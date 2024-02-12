/**
	vs.ViewerLink - a class for linking move and zoom events for multiple Viewers


	- we probably need to question how slides are aligned, esp. during either creation or onLoad.
	  This could be similar to zf.widget.Iterator wrt plane of section


	Developer's Notes

	Remember, a function remembers the environment _in which it was defined._
	See JavaScript: The Definitive Guide, Section 8.8 (p.141) for details.

	ViewerLink is designed differently than most classes in the vs.* family.  It
	relies heavily on variable scope to manage privacy between the relationships
	of the Viewers.  As such, its instance methods need to be defined within the
	constructor rather than the prototype so that they have access to the variables
	defined within.

	The add() function generates the necessary functions and adds a Viewer to
	the ViewerLink.

	In order to keep Viewers together despite "bounding" (being dragged outside
	of the visible area), we use Viewer.moveTo() rather than moveBy().  To do
	this we need to record the original offset on either load or zoom; these
	are the baseX and baseY variables.  Each component of the ViewerLink has
	its own private copy of these variables.

	objects[] is an array of anonymous objects.  It should be keyed the same as
	the viewers[] array, and it will contain callbacks used for manipulating
	"captive" Viewers.  (The "active" Viewer is the one being dragged/zoomed;
	the "captive" Viewer(s) are the ones responding to it via the ViewerLink.)

	Each Viewer object involved in a particular ViewerLink recieves the same
	ViewerLink object but UNIQUE methods for the onEvent(*,object,method).
	The unique methods are closures containing a variable referencing that
	viewer and other variables local to that viewer.



	- may need to write some kind of syncTo() method to align Viewers
	- Or we could [also] write a method to run setup() on each of the objects
	- also need to write global moveBy() and zoomTo/In/Out() methods
	- could we get any of the methods into the prototype?  Maybe use getViewers?

	- Is there any way we can use this to link together three planes?  This
	  would have to link in one dimension only, so the move function would have
	  to look something like:  coords = [ this.moveX ? dx : 0, this.moveY ? dy : 0 ]
	  Actually we could put this in the dx/dy generation code... easily!
	  This might have to filter out non-movements?   It definitely recurses in the
	  3-way comparison.
	- Instead of having the entire viewerlink be defined with one kind of movement,
	  could it be possible to define the type of linkage on a viewer-by-viewer basis,
	  making possible the 3-way linkage described above?

	- Create a spacebar key binding to either actively link currentViewer's group
	  (or only/default ViewerLink).


	- Seems like this is broken in terms of staying aligned while zooming.
	  Might be due to changes wrt arguments, namely (z, CENTER, initiator).

	x When adding a viewer after having zoomed linked viewers, proportional move is off
		- this is because viewers' baseZ/power is not being updated after zoom event
		- combined setup() and onLoad() plus check viewer.loaded()

	@constructor
	@param {...vs.Viewer|Array.<vs.Viewer>} viewer_list
*/
vs.ViewerLink = function(viewer_list) {
// ----------------------------------------------------------------------------
	// define some shared, private variables
	var viewers = [],
		objects = [],
		viewerlink = this,
		count = 0;

	if (IN_DEVELOPMENT)
		this.widgetHandle = 'viewerlink';

	// define some instance methods with access to shared private variables
// ----------------------------------------------------------------------------
/**
	@param {...vs.Viewer|Array.<vs.Viewer>} viewer_list
*/
	this.add = function(viewer_list) {
// ----------------------------------------------------------------------------
		// must reset baseX/baseY for existing Viewers
		var n = objects.length;
		while (n--)
			objects[n].setup();

		$A(arguments).flatten().each(function(v) {
			viewers.include(v) || add(v);
		});
	};
// ----------------------------------------------------------------------------
/**
	@param {...vs.Viewer|Array.<vs.Viewer>} viewer_list
*/
	this.remove = function(viewer_list) {
// ----------------------------------------------------------------------------
		$A(arguments).flatten().each(function(v) {
			var i = viewers.indexOf(v);
			if (i != -1) {
				viewers[i].unEvent(viewerlink);
				viewers.splice(i, 1);
				objects.splice(i, 1);
				count--;
			}
		});
	};
// ----------------------------------------------------------------------------
	this.zoomIn  = function() { var i = count; while (i--) viewers[i].zoomIn(null, this)  }
	this.zoomOut = function() { var i = count; while (i--) viewers[i].zoomOut(null, this) }
// ----------------------------------------------------------------------------
	/** @return {Array.<vs.Viewer>} */
	this.getViewers = function(){ return viewers.concat() };
// ----------------------------------------------------------------------------
	/**
		@param	{vs.Viewer} viewer
		@return	{boolean}
	*/
	this.isLinking = function(viewer) { return viewers.indexOf(viewer) > -1 };
// ----------------------------------------------------------------------------
	/**
		@param	{vs.Viewer} viewer
		@return	{boolean}
	*/
	this.includes = function(viewer) { return viewers.include(viewer) };
// ----------------------------------------------------------------------------
	this.destroy = function() {
// ----------------------------------------------------------------------------
		// this.remove(viewers);
		this.remove.apply(this, viewers);
		objects.length = 0;
		delete this.remove;
		delete this.add;
		viewerlink = null;
	};

	this.query = function(){ objects.invoke('query') };

	/**
		@param	{vs.Viewer} viewer
	*/
	function add(viewer) {
// ----------------------------------------------------------------------------
	// define some local private variables and functions
// ----------------------------------------------------------------------------
		var baseX, baseY, baseZ, power;

		function onLoad() {
			baseX = viewer.offsetX;
			baseY = viewer.offsetY;
			baseZ = viewer.z;
			if (viewer.loaded())
				power = viewer.slide.getPower(baseZ);
		}
		function onMove() {
			if (this.move) {
				var i = count,
					r = this.proportional ? 1/power : 1,
					dx = this.moveX ? r * (viewer.offsetX - baseX) : 0,
					dy = this.moveY ? r * (viewer.offsetY - baseY) : 0;
				while (i--) viewers[i] == viewer || objects[i].move(dx, dy);
			}
		}
		function onZoom() {
			var i = count, z;
			if (this.zoom) {
				z = this.proportional ? viewer.slide.getPower(viewer.z) : viewer.z - baseZ
				while (i--) viewers[i] == viewer || objects[i].zoom(z); // need center here iff this.move
				i = count;
			}
			while (i--) objects[i].setup();
		}
		function onDrop() { var i = count; while (i--) viewers[i].dragging = false }
		function onGrab() { var i = count; while (i--) viewers[i].dragging = true  }
// ----------------------------------------------------------------------------
	// set up the viewer and an anonymous object with some closures
// ----------------------------------------------------------------------------
		onLoad();
		// Set up the event handlers
		viewers[count] = viewer.onEvent("move", viewerlink, onMove)
                               .onEvent("zoom", viewerlink, onZoom)
                               .onEvent("drop", viewerlink, onDrop)
                               .onEvent("grab", viewerlink, onGrab)
                               .onEvent("load", viewerlink, onLoad);
		// create and save a reference to an anonymous object with move/zoom closures
		objects[count++] = {
			move: function(x, y) { viewer.moveTo(viewerlink.proportional
				? [power * x + baseX, power * y + baseY]
				: [ x + baseX, y + baseY], viewerlink) },
			zoom: function(z)   { viewer.zoomTo(viewerlink.proportional
				? viewer.slide.getNearestLevelByPower(z)
				: baseZ + z, null, viewerlink) },
			query: function(){ console.log("%s: %d %d %d (%d)", viewer.name, baseX, baseY, baseZ, power) },
			setup: onLoad
		};
	}

	// Add any Viewers passed to the constructor
	this.add.apply(this, arguments);
};

// ----------------------------------------------------------------------------
// Properties
// ----------------------------------------------------------------------------
/** @type {boolean} 	*/ vs.ViewerLink.prototype.move			= true;
/** @type {boolean} 	*/ vs.ViewerLink.prototype.moveX		= true;
/** @type {boolean} 	*/ vs.ViewerLink.prototype.moveY		= true;
/** @type {boolean} 	*/ vs.ViewerLink.prototype.zoom			= true;
/** @type {boolean} 	*/ vs.ViewerLink.prototype.proportional	= true;
// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
/** @type {Function}	*/ vs.ViewerLink.prototype.add;
/** @type {Function}	*/ vs.ViewerLink.prototype.remove;
/** @type {Function}	*/ vs.ViewerLink.prototype.getViewers;
/** @type {function(vs.Viewer):boolean}	*/ vs.ViewerLink.prototype.isLinking;
/** @type {Function}	*/ vs.ViewerLink.prototype.destroy;




/*
	Preliminiary key bindings; not enough to work yet; would cause recursion with Thumbnails/pre-existing links

vs.ViewerLink.globalViewerLink = new vs.ViewerLink;
vs.ViewerLink.keydown = function(event) {
	if (event.keyCode != 32) return;
	Event.observe(document, "keyup", vs.ViewerLink.keyup);
	Event.stopObserving(document, "keydown", vs.ViewerLink.keydown);
	vs.ViewerLink.globalViewerLink.add(vs.Viewer.instances);
}
vs.ViewerLink.keyup = function(event) {
	if (event.keyCode != 32) return;
	Event.observe(document, "keydown", vs.ViewerLink.keydown);
	vs.ViewerLink.globalViewerLink.remove(vs.Viewer.instances);
}
vs.ViewerLink.enableKeyBindings = function() {
	Event.observe(document, "keydown", keydown);
}
vs.ViewerLink.disableKeyBindings = function() {
	Event.stopObserving(document, "keydown", vs.ViewerLink.keydown);
}

	Movement

	Viewers use their offsets at the time of link creation as the basis for linked movement.
	This way they can stay aligned despite having different boundaries.
	The initiating viewer reports movement as the difference between its current position and its position at link creation.
	The linked viewers set their position as that difference plus their original position.

	ViewerLink makes use of the Viewer event model to coordinate movement.  The ViewerLink object is
	the object that is used, meaning 'this' in the method will refer to the ViewerLink instance.
	However, each Viewer will receive a different method, a closure with the variable 'viewer' being a reference to the Viewer instance.
	This way the ViewerLink can skip the initiating Viewer by checking the value of the 'viewer' variable (which will be unique to each closure).


	There should be a global set of dx/dy variables, or setup should be run for every viewer on each add().  Consider the following:  if
		a slide is added to the viewerlink after existing slides have been moved, and it is moved, then the remaining slides will jump back
		to near their base position because dx/dy is used as the basis for movement.

*/
