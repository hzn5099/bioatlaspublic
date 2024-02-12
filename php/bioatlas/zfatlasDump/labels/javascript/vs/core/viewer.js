/**
	vs.Viewer - a class used to view virtual slides, the raison d'etre of the vs.* namespace.

	- should loadVisibleTiles() be "debounced" onZoom?  (but not onLoad, of course)
	  With scaled tiles, this would give the illusion of zooming without loading tiles
	  in case the zoomlevel is changed again immediately.

	@constructor
*/
// ----------------------------------------------------------------------------
vs.Viewer = function() {
// ----------------------------------------------------------------------------
	// Initialize objects and arrays
	// (These can't be initialized in the prototype since each object would share a
	// *reference* to the prototype object/array, not a unique copy.)
	this.widgets		= {};
	this.events			= {
	// Create and populate event queues
		'move':		[],		// on Viewer move (delta)
		'grab':		[],		// on first mousemove after mousedown (event, clickCoords)
		'drop':		[],		// on mouseup after mousedown + mousemove (event, clickCoords)
		'zoom':		[],		// on zoom (this.z)
		'load':		[],		// on slide load (slide)
 		'tile':		[],		// IMG.onload for tiles
		'attach':	[],		// on attaching Viewer to an HTMLElement (parent)
		'unload':	[],		// on unloading a VirtualSlide (undefined)
		'destroy':	[],		// on destroying a Viewer (undefined)
		'detach':	[],		// on removing a Viewer from HTMLElement (container)
		'resize':	[[this, this.resize]],
		'down':		[[this, this.down], [this, this.focus]], // (event, clickCoords)
		'click':	[],	// on mouseup with no mousemove
		'dblclick':	[[this, this.zoom]] // (event, clickCoords)
	};

	this.eventFunctionQueue	= [];

	// The problem is that these methods can no longer be overridden on an instance-by-instance basis
	// (without using bind).
	// We might want to farm them out to an initialize() method for that reason.
	// Or combine that with a default of initializing on creating via an argument to the constructor,
	// i.e., new vs.Viewer(false)
	// Or accept properties as an object.... new vs.Viewer({ ajaxFailure: failFunction });
	this._grab			= this.grab.bind(this);
	this._drop			= this.drop.bindAsEventListener(this);
	this._grab			= this.grab.bindAsEventListener(this);
	this._drag			= this.drag.bindAsEventListener(this);
	this._onMouseDown	= this.onMouseDown.bindAsEventListener(this);
	this._onDblClick	= this.onDblClick.bindAsEventListener(this);
	this._tile			= this.updateTiles.bind(this);
	this._ajaxSuccess	= this.ajaxSuccess.bind(this);
	this._ajaxFailure	= this.ajaxFailure.bind(this);
	this._ajaxTimeout	= this.ajaxTimeout.bind(this);
	this._tileOnload	= this.tileOnload.curry(this);

	// Initiate periodic tile loader (loads extra tiles when viewer is otherwise inactive)
	this.tileBufferSlowInterval =
		setInterval(this.idleTileLoader.bind(this), this.tileBufferSlowPeriod);

	// debugging junk:
	this.name = "Viewer" + vs.Viewer.instances.length;

	// vs.Viewer.instances.push(this);
	// this.id = vs.Viewer.instances.indexOf(this);
	this.id = (vs.Viewer.instances.push(this)) - 1;
};
// ----------------------------------------------------------------------------
// vs.Viewer CLASS PROPERTIES
// ----------------------------------------------------------------------------
vs.Viewer.instances			= [];
vs.Viewer.currentViewer		= null;
vs.Viewer.events			= {
	onAttach:	"attach",
	onClick:	"click",
	onDblclick:	"dblclick",
	onDetach:	"detach",
	onDrop:		"drop",
	onGrab:		"grab",
	onLoad:		"load",
	onMove:		"move",
	onResize:	"resize",
	onTile:		"tile",
	onUnload:	"unload",
	onZoom:		"zoom"
};

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------

// "Public" (settable)

// Is boundaryLimit the best way to handle bounding movement?
// It might even make sense to change it depending on zoom level or level dimensions.
/** @type {number}	*/		vs.Viewer.prototype.boundaryLimit			= 50;			// (pixels)
/** @type {string}	*/		vs.Viewer.prototype.cssClassName			= "vsViewer";	// CSS class name for slide element
/** @type {number}	*/		vs.Viewer.prototype.tileDelay				= 100;			// (milliseconds)
/** @type {number}	*/		vs.Viewer.prototype.dragMultiplier			= 1;
/** @type {number}	*/		vs.Viewer.prototype.tileBufferFast			= 1;			// radius of tiles to load outside of visible area
/** @type {number}	*/		vs.Viewer.prototype.tileBufferSlow			= 2;			// radius of tiles to load outside of visible area while inactive (beyond tileBufferFast)
/** @type {number}	*/		vs.Viewer.prototype.tileBufferSlowLimit		= 8;			// Maximum number of tiles to load per interval
/** @type {number}	*/		vs.Viewer.prototype.tileBufferSlowPeriod	= 8000; 		// milliseconds (this could be more frequent with less tiles to load)
/** @type {number}	*/		vs.Viewer.prototype.tileBufferSlowInterval	= 0;			// Return value of window.setInterval()
/** @type {string}	*/		vs.Viewer.prototype.fetchURL				= "";			// URL for fetching virtualslide (for Ajax.Request)

// "Private" (read-only)

/** @type {vs.VirtualSlide} */ vs.Viewer.prototype.slide;
/** @type {Object}	*/		vs.Viewer.prototype.widgets;
/** @type {Object}	*/		vs.Viewer.prototype.events;
/** @type {Array}	*/		vs.Viewer.prototype.eventFunctionQueue;
/** @type {Element}	*/		vs.Viewer.prototype.container;
/** @type {Element}	*/		vs.Viewer.prototype.element;
/** @type {Ajax.Request}*/	vs.Viewer.prototype.request;			// (Prototype)
/** @type {number}	*/		vs.Viewer.prototype.tileTimer;			// Timer
/** @type {Array}	*/		vs.Viewer.prototype.tileElements;		// Array of IMG elements
/** @type {Array.<Array>}	*/
							vs.Viewer.prototype.slideContent;		// Array of arrays (Element, x, y, width, height)
/** @type {boolean}	*/		vs.Viewer.prototype.dragging		= false;
/** @type {number}	*/		vs.Viewer.prototype.lastScreenX		= 0;
/** @type {number}	*/		vs.Viewer.prototype.lastScreenY		= 0;
/** @type {number}	*/		vs.Viewer.prototype.offsetX			= 0;	// This is the slide's virtual offset wrt the container as if the
/** @type {number}	*/		vs.Viewer.prototype.offsetY			= 0;	// slide were a DIV absolutely positioned within container
/** @type {number}	*/		vs.Viewer.prototype.containerWidth	= 0;
/** @type {number}	*/		vs.Viewer.prototype.containerHeight	= 0;
/** @type {number}	*/		vs.Viewer.prototype.tileWidth		= 0;
/** @type {number}	*/		vs.Viewer.prototype.tileHeight		= 0;
/** @type {number}	*/		vs.Viewer.prototype.tileCols		= 0;
/** @type {number}	*/		vs.Viewer.prototype.tileRows		= 0;
/** @type {number}	*/		vs.Viewer.prototype.tileA			= 0;	// The tile index intersecting the upper-left corner of viewport
/** @type {number}	*/		vs.Viewer.prototype.tileZ			= 0;	// The tile index intersecting the lower-right corner of viewport
/** @type {number}	*/		vs.Viewer.prototype.xLowerLimit		= 0;
/** @type {number}	*/		vs.Viewer.prototype.xUpperLimit		= 0;
/** @type {number}	*/		vs.Viewer.prototype.yLowerLimit		= 0;
/** @type {number}	*/		vs.Viewer.prototype.yUpperLimit		= 0;
/** @type {number}	*/		vs.Viewer.prototype.z				= Number.POSITIVE_INFINITY;
// Bound methods
/** @type {Function}*/		vs.Viewer.prototype._drop;
/** @type {Function}*/		vs.Viewer.prototype._grab;
/** @type {Function}*/		vs.Viewer.prototype._drag;
/** @type {Function}*/		vs.Viewer.prototype._onMouseDown;
/** @type {Function}*/		vs.Viewer.prototype._onDblClick;
/** @type {Function}*/		vs.Viewer.prototype._tile;
/** @type {Function}*/		vs.Viewer.prototype._ajaxSuccess;
/** @type {Function}*/		vs.Viewer.prototype._ajaxFailure;
/** @type {Function}*/		vs.Viewer.prototype._ajaxTimeout;
/** @type {Function}*/		vs.Viewer.prototype._tileOnload;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	viewer.attachTo - attaches viewer to HTMLElement; must be done before
	loading a slide.

	@param {Element|string} parent
	@param {Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.attachTo = function(parent, initiator) {
// ----------------------------------------------------------------------------
// NOTE:  This isn't sufficient for a detach + attach situation; unload() removes the slide.
	var slide = this.slide
		? [this.slide, this.z, this.getCenter()]
		: null;

	if (this.container)
		this.detach();

	this.container = $(parent);
	this.setContainerProperties()
		.doEvent("attach", initiator, this.container);

	if (slide)
		this.load.apply(this, slide);

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.detach - detaches viewer from its parent element.

	@param {Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.detach = function(initiator) {
// ----------------------------------------------------------------------------
	if (this.container) {
		if (this.slide) this.unload();
		this.doEvent("detach", initiator, this.container);
		this.container = null;
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.load() - Loads a slide, with optional position info.

	@param	{vs.VirtualSlide} slide
	@param	{?number=} startzoom
	@param	{Array.<number>=} startpos
	@param	{?boolean=} absCoords
	@param	{Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.load = function(slide, startzoom, startpos, absCoords, initiator) {
// ----------------------------------------------------------------------------
	if (IN_DEVELOPMENT) {
		if (!slide)
			throw new Error( "[ vs.Viewer.load() ] slide is a required argument" );
		if (!(slide instanceof vs.VirtualSlide))
			throw new Error( "[ vs.Viewer.load() ] slide is not an instance of vs.VirtualSlide" );
		if (!this.container)
			throw new Error( "[ vs.Viewer.load() ] viewer is not attached" );
	}

	if (!this.attached())
		return this;

	if (this.loaded())
		this.unload();

	// Initialize various properties
	this.slide			= slide;
	this.tileElements	= [];
	this.slideContent	= [];
	this.z				= Number.POSITIVE_INFINITY;  // resetting this so that setZoom works

	// Set initial zoom (as specified, largest within slide, or smallest zoom level)
	this.setZoom(startzoom)
		|| this.setZoom(slide.getContainingLevel(this.containerWidth, this.containerHeight));

	this.element = this.createElement(); // do this after setZoom so that setElementSize can have access to this.z
	this.offsetX =
	this.offsetY = 0; // these need to be zero before calling setCenter (or setPosition) on load

	// Set initial position
	startpos = startpos
		? absCoords
			? slide.getCoordsFromAbs(startpos, this.z)
			: startpos
		: slide.getCenter(this.z);

	this.setCenter(startpos);

	// Attach event listeners and set background color to match slide
	this.container
		.observe('mousedown', this._onMouseDown)
		.observe('dblclick',  this._onDblClick )
		.style.backgroundColor = slide.bgColor;

	// Execute "load" events, update tiles, and append slide content
	return this.doEvent("load", initiator, slide, startzoom, startpos)
		.updateTiles()
		.appendSlideContent();
};

// ----------------------------------------------------------------------------
/**
	@param	{Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.unload = function(initiator) {
// ----------------------------------------------------------------------------
	if (this.slide) {
		// Fire onUnload events first, *before* unloading the element.
		this.doEvent("unload", initiator);

		if (this.container) {
			this.container
				.stopObserving('dblclick',  this._onDblClick)
				.stopObserving('mousedown', this._onMouseDown);
			if (this.element)
				this.container.removeChild(this.element);
			this.container.style.backgroundColor = vs.VirtualSlide.prototype.bgColor;
		}
		this.slide = this.element = null;
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.attached(); if a Viewer is attached to a container

	@return {boolean}
*/
vs.Viewer.prototype.attached = function() {
// ----------------------------------------------------------------------------
	return !!this.container;
};

// ----------------------------------------------------------------------------
/**
	viewer.loaded(); if a slide is loaded into an attached vs.Viewer.

	@return	{boolean}
*/
vs.Viewer.prototype.loaded = function() {
// ----------------------------------------------------------------------------
	return this.attached() && !!this.slide;
};

// ----------------------------------------------------------------------------
/**
	viewer.addWidget(); instantiates Widget with this as the first argument

	@param {Function} Widget
	@param {Object=} options
	@return {vs.Viewer}
*/
vs.Viewer.prototype.addWidget = function(Widget, options) {
// ----------------------------------------------------------------------------
	try {
		new Widget(this, options || {});
	} catch(e) {
		console.error("Error creating widget: %s".sprintf(e.message));
	} finally {
		return this;
	}
};

// ----------------------------------------------------------------------------
/**
	viewer.focus(); sets the currentViewer (useful for keyboard zoom, etc.)

	@return {vs.Viewer}
*/
vs.Viewer.prototype.focus = function() {
// ----------------------------------------------------------------------------
	return vs.Viewer.currentViewer = this;
};

// ----------------------------------------------------------------------------
/**
	viewer.resize(); methods to call if the window/viewport has been resized

	- The position of the slide should be checked as well, to assure that it is
	  still within bounds as the window may have been resized from the right/bottom,
	  moving the slide out of bounds.
*/
vs.Viewer.prototype.resize = function() {
// ----------------------------------------------------------------------------
	this.setContainerProperties().loaded() && this.updateTiles();
};

// ----------------------------------------------------------------------------
// SLIDE ELEMENT MANAGEMENT METHODS
// ----------------------------------------------------------------------------
/**
	viewer.refresh(); Redraws element and updates tiles.

	@return {vs.Viewer}
*/
vs.Viewer.prototype.refresh = function() {
// ----------------------------------------------------------------------------
	var e = this.createElement();

	this.appendSlideContent(e);
	if (this.element)
		this.container.removeChild(this.element);
	this.element = e;

	return this.updateTiles();
};

// ----------------------------------------------------------------------------
/**
	viewer.createElement();

	@return {Element}
*/
vs.Viewer.prototype.createElement = function() {
// ----------------------------------------------------------------------------
/*
	The "new" vs.Viewer works by creating a "disposable" DIV which is recreated
	on each load(), zoom(), or drop().  This is in contrast to the previous
	versions which created a DIV the dimensions of the current level.  Once
	slides reached a dimension of 32,768px the Opera browser would fail to
	correctly place tiles; presumably other browsers may have similar (but much
	greater) limitations, so this disposable DIV method can handle any size
	virtualslide.

	A "sleight-of-hand" is performed when changing the slide element.  A new DIV
	is positioned over the old one, and on-slide elements are transferred or
	added to the new element and repositioned.  The old element is removed from
	the container and discarded.  This happens in-place and should be invisible
	to the user.  drop() was chosen because there would presumably be a pause
	when a user stops dragging the slide, allowing any lag in the redraw to be
	hidden.

	vs.Viewer slide elements contain two categories of elements: slide tiles and
	everything else (labels, etc).  appendSlideContent() adds "everything else"
	and should be called before updateTiles(), which transfers slide image tiles
	to the new element, because tiles have a z-index of 1, which is/should be lower
	than anything else (except scaled tiles).

	createElement()

		- Creates a new DIV, sets the size, and appends it to this.container.
		- RETURNS: A reference to the new DIV.
*/
	var e = new Element('DIV').addClassName(this.cssClassName);

	this.setElementSize();
	// why on earth am I parseInt'ing these values?  Paranoia much?
	e.style.width  = parseInt(this.elementWidth, 10) + "px";
	e.style.height = parseInt(this.elementHeight, 10) + "px";

	// n >> 1 is equivalent to Math.floor(n/2), but performs better (~50%),
	// and subtraction (-) binds tighter than rightshift (>>)
	e.style.left = (this.elementOffsetX = this.containerWidth  - this.elementWidth  >> 1) + "px";
	e.style.top  = (this.elementOffsetY = this.containerHeight - this.elementHeight >> 1) + "px";

	this.container.appendChild(e);

	return e;
};

// ----------------------------------------------------------------------------
/**
	viewer.appendSlideContent(); determines what elements from slideContent should
		be placed on slide element.

	@param {Element=} target
	@return {vs.Viewer}
*/
vs.Viewer.prototype.appendSlideContent = function(target) {
// ----------------------------------------------------------------------------
	var e,
		f = document.createDocumentFragment(),
		s = this.slideContent,
		i = s.length,
		// Define boundaries for slideContent
		dx = this.offsetX - this.elementOffsetX,
		dy = this.offsetY - this.elementOffsetY,
		// lowerX = this.elementOffsetX - this.offsetX, // == -dx
		// lowerY = this.elementOffsetY - this.offsetY, // == -dy
		lowerX = -dx,
		lowerY = -dy,
		// upperX = lowerX + this.elementWidth,
		// upperY = lowerY + this.elementHeight;
		upperX = this.elementWidth  - dx,
		upperY = this.elementHeight - dy;

	while (i--) {
		e = s[i];

		if (
			e[1] < upperX &&
			e[2] < upperY &&
			e[3] > lowerX &&
			e[4] > lowerY
		) {
			e[0].style.left = (e[1] + dx) + "px";
			e[0].style.top  = (e[2] + dy) + "px";
			f.appendChild(e[0]);
		}
	}

	(target || this.element).appendChild(f);
	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.setElementSize(); sets the size to create viewer element

	This was separated from createElement() to make it easier to redefine, if necessary.
	The default element size is the physical screen size times the dragMultiplier,
	essentially as far as anyone could drag the element.

	NOTE: On my dual monitor display, screen.width only refers to a single screen,
	      but I can drag the slide across both.
	      Actually Chrome sees 5120... FF only sees 2560
	Interesting... Chrome only seems to allow a document to be 4000px wide;
	Opera also messes up documents larger than what it thinks screen.width is.
*/
vs.Viewer.prototype.setElementSize = function() {
// ----------------------------------------------------------------------------
	this.elementWidth	= (this.dragMultiplier * 2 + 1) * screen.width;
	this.elementHeight	= (this.dragMultiplier * 2 + 1) * screen.height;
};

// ----------------------------------------------------------------------------
/**
	viewer.addToSlide(); adds HTMLElement to slideContents array for inclusion
		on visible slide element

	If position is not passed to this method in the arguments, the style.left/top
	properties must be set, otherwise the element will not be added to the slide.
	If size is not set, it defaults to 1.  This doesn't actually set the size of
	the element to 1x1, just determines when it intersects with the slide element.

	@param	{Element} element
	@param	{number} x
	@param	{number} y
	@param	{number=} w
	@param	{number=} h
	@param	{boolean=} append
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.addToSlide = function(element, x, y, w, h, append) {
// ----------------------------------------------------------------------------
	var es = element.style;
	// If x/y aren't set, attempt to determine position from styles
	if (
		x == undefined && isNaN(x = parseInt(es.left,10)) ||
		y == undefined && isNaN(y = parseInt(es.top,10))
	) return this;

	// Add element to slideContent array
	this.slideContent.push([element, x, y,
		(w == undefined ? (parseInt(es.width,10)  || 1) : w) + x,
		(h == undefined ? (parseInt(es.height,10) || 1) : h) + y
	]);

	// Append to slide element if append
	if (append) {
		var dx = this.offsetX - this.elementOffsetX,
			dy = this.offsetY - this.elementOffsetY;
		if (x > -dx && y > -dy && x < this.elementWidth - dx && y < this.elementHeight - dy) {
			es.left = (x + dx) + "px";
			es.top  = (y + dy) + "px";
			this.element.appendChild(element);
		}
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.removeFromSlide(); removes element(s) from slide

	@param	{Array.<Element>|Element} elements
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.removeFromSlide = function(elements) {
// ----------------------------------------------------------------------------
	var e, sC = this.slideContent, sC_i = sC.length, elements_i;
	elements = [].concat(elements);
	while (sC_i--) {
		elements_i = elements.length;
		while (elements_i--) {
			if (sC[sC_i][0] == elements[elements_i]) {
				sC.splice(sC_i, 1);
				elements.splice(elements_i, 1);
				break;
			}
		}
	}

	return this.refresh();
};

// ----------------------------------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------------------------------
/*
	"click"
		mousedown + mouseup with no mousemove (dragging == false)
	"grab"
		mousedown + single mousemove
	"down"
		mousedown
	"drop"
		mouseup after mousemove (dragging == true)

	Note:  There is potential for the "click" event to be problematic in situations
	such as the one in the label editor where a label is click+dragged; when the
	label is dropped, the "click" event fires.

*/
/** @param	{Event} event */
vs.Viewer.prototype.onMouseDown = function(event) {
// ----------------------------------------------------------------------------
	if (!event.isLeftClick())
		return;

	event.stop();
	document.observe("mouseup", this._drop);
	this.doEvent("down", null, event, this.getClickCoords(event));
};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.onDblClick = function(event) { // onDblClick
// ----------------------------------------------------------------------------
	event.stop();
	this.doEvent("dblclick", null, event, this.getClickCoords(event));
};
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
	@param	{Array} clickCoords
*/
vs.Viewer.prototype.down = function(event, clickCoords) {
// ----------------------------------------------------------------------------
	this.lastScreenX = event.screenX;
	this.lastScreenY = event.screenY;
	document
		.observe("mousemove", this._grab)
		.observe("mousemove", this._drag);
};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.grab = function(event) {
// ----------------------------------------------------------------------------
// it would also be nice to "abstract away" the 'grab' event as well, so that
// certain widgets can intercept the "mousedown + mousemove" combo.
	document.stopObserving("mousemove", this._grab);
	this.doEvent("grab", this, event, this.getClickCoords(event));
	this.dragging = true;
};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.drop = function(event) {
// ----------------------------------------------------------------------------
	document
		.stopObserving("mousemove", this._grab)
		.stopObserving("mousemove", this._drag)
		.stopObserving("mouseup", this._drop);

	if (this.dragging) // since dragging is only true after move (but not grab)
		this.refresh().doEvent("drop").dragging = false;
	else
		this.doEvent("click", this, event, this.getClickCoords(event));
};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.drag = function(event) { // onMouseMove
// ----------------------------------------------------------------------------
/*
	offset[XY] is virtual offset of slide
	elementOffset[XY] is offset of element
*/
	Event.stop(event);

	var xf, yf,
		screenX = event.screenX,
		screenY = event.screenY,
		d	= [],
		es	= this.element.style,
		e	= this.events['move'],
		i	= e.length,
		xi	= this.elementOffsetX,
		yi	= this.elementOffsetY,
		dx	= xi - this.offsetX, // the difference between the element offset and the (virtual) slide offset
		dy	= yi - this.offsetY;

	es.left = (this.elementOffsetX = xf = Math.bound(xi + this.dragMultiplier * (screenX - this.lastScreenX), this.xLowerLimit + dx, this.xUpperLimit + dx)) + "px";
	es.top  = (this.elementOffsetY = yf = Math.bound(yi + this.dragMultiplier * (screenY - this.lastScreenY), this.yLowerLimit + dy, this.yUpperLimit + dy)) + "px";

	this.lastScreenX = screenX;
	this.lastScreenY = screenY;

	this.offsetX += (d[0] = xf - xi);
	this.offsetY += (d[1] = yf - yi);

	// There's still room for improvement with this, possibly loading an extra row of tiles or loading them before they're needed.
 	if (this.requiresTiles())
		this.loadVisibleTiles(0);

	// Fire "move" events
	while (i--) e[i][1].call(e[i][0], d, this);
};

// ----------------------------------------------------------------------------
/** @return	{boolean} */
vs.Viewer.prototype.requiresTiles = function() {
// ----------------------------------------------------------------------------
	var range = this.getViewportRange(0),
		cols = this.tileCols;

	// would it be sufficient to only check tileZ?
	// tileA isn't because of resizing, but would tileZ cover both resize + movement
	return (
		range.rowA < Math.floor(this.tileA/cols) ||
		range.rowZ > Math.floor(this.tileZ/cols) ||
		range.colA < this.tileA % cols ||
		range.colZ > this.tileZ % cols
	);
};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.zoom = function(event, clickCoords) { // onDblClick
// ----------------------------------------------------------------------------
	this.zoomTo(this.z + (event.shiftKey ? 1 : -1), clickCoords);
};
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
	@return	{Array.<number>}

	- What about absolutely positioned elements set by bottom and/or right?
		Example: Scalebar is off when clicked
*/
vs.Viewer.prototype.getClickCoords = function(event) {
// ----------------------------------------------------------------------------
	var target = event.element(),
		targetOffset = target.cumulativeOffset().relativeTo(this.container.cumulativeOffset()),
		clickX = event.offsetX || event.layerX,
		clickY = event.offsetY || event.layerY,
		x = targetOffset[0] + clickX - this.offsetX,
		y = targetOffset[1] + clickY - this.offsetY;

		// Prototype methods to determine if element is contained by the Viewer
		// contained = target.ancestors().contains(this.container);

	// would it be safer to return undefined or getCenter?  Or just make that distinction in the caller?
	// this.getClickCoords(event) || this.getCenter();
	// But since we're taking the difference between cumulativeOffset, this shouldn't matter
	// return contained ? [x,y] : this.getCenter();
	return [x, y];
};

// ----------------------------------------------------------------------------
/**
	suspend(); suspends interactive events

	@return	{vs.Viewer}
*/
vs.Viewer.prototype.suspend = function() {
// ----------------------------------------------------------------------------
	return this
		.unEvent("down", this, this.down)
		.unEvent("dblclick", this, this.zoom);
};

// ----------------------------------------------------------------------------
/**
	resume(); resumes interactive events

	@return	{vs.Viewer}
*/
vs.Viewer.prototype.resume = function() {
// ----------------------------------------------------------------------------
	this.suspend();// make sure we don't add it twice
	this.events["down"].unshift([this, this.down]);
	this.events["dblclick"].unshift([this, this.zoom]);
	return this;
};
// ----------------------------------------------------------------------------
// ZOOMING METHODS
// ----------------------------------------------------------------------------
/**
	viewer.zoomTo(zf); changes the zoom level of a viewer to <zf>.
		center coords are relative to CURRENT level.

	--------------------------------------
	Math(*): Mapping zi coords to zf space
	--------------------------------------
	Given the following:
		offset  = container/2 - center
		offset' = container/2 - center'
		center' = r * center
	...where...
		center		= this.getCenter() = [x,y]
		container	= [containerWidth,containerHeight]
		offset		= [this.offsetX,this.offsetY]
		r			= this.slide.getRatio(zf,zi)

	Then, offset'
		= container/2 - center'
		= container/2 - (r * center)
		= container/2 - (r * (offset + container/2))
		= container/2 - (r * offset) + (r * container/2)
		= container/2 - (r * container/2) + (r * offset)
		= (1 - r) * container/2 + (r * offset)


	@param	{number} zf
	@param	{Array=} center
	@param	{Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.zoomTo = function(zf, center, initiator) {
// ----------------------------------------------------------------------------
	var zi = this.z,
		range = this.getElementRange(),
		tilewidth  = this.tileWidth,
		tileheight = this.tileHeight,
		width  = this.width,
		height = this.height,
		last_col = this.tileCols - 1,
		last_row = this.tileRows - 1;

	center = center instanceof Array ? center : this.getCenter();

	// Set zoom level
	if (this.setZoom(zf)) { // level properties have been reset by now

		var tile,
			tE = this.tileElements,
			n  = tE.length,
			r  = this.slide.getRatio(zf = this.z, zi), // reset zf in case of Infinity

			r_tw = Math.round(r * tilewidth),
			r_th = Math.round(r * tileheight),

			r_tw_colA = r_tw * range.colA,
			r_th_rowA = r_th * range.rowA,

			// width and height have been reset by now.
			r_tw_edge = Math.round(r * (width  % tilewidth  ||  tilewidth)), // edge tile width
			r_th_edge = Math.round(r * (height % tileheight || tileheight)), // edge tile height

			scaledTileElement = document.createElement('DIV'),

			delta = this.setCenter(center.multiplyBy(r));

		scaledTileElement.style.position = "absolute";
		scaledTileElement.style.zIndex   = 0;

		// Scale tiles
		// NOTE: Restricting this to zoom in (zi > zf) only or not for zooming out more
		// than one level (zi - zf > -2) as it really hangs Chrome on low-spec machines.
		if (zi > zf) while (n--) {
			tile = tE[n]; // aliasing this for better performance
			if (!tile.src) continue; // discard unloaded tiles
			scaledTileElement.appendChild(tile);
			tile.width  = tile.__col == last_col ? r_tw_edge : r_tw;
			tile.height = tile.__row == last_row ? r_th_edge : r_th;
			tile.style.left = r_tw * tile.__col - r_tw_colA + 'px';
			tile.style.top  = r_th * tile.__row - r_th_rowA + 'px';
		}

		// Reset arrays
		this.slideContent	= [];
		this.tileElements	= [];

		// Reset this.element
		this.container.removeChild(this.element);
		this.element = this.createElement();

		// Execute event queues, etc.
		this.doEvent("zoom", initiator, zf)
			.doEvent("move", this, delta)
			.addToSlide(scaledTileElement,
				r_tw_colA,
				r_th_rowA,
				r_tw * (1 + range.colZ) - r_tw_colA,
				r_th * (1 + range.rowZ) - r_th_rowA)
			.appendSlideContent();

		// Adding the setTimout makes the zoom appear faster, causing the
		// browser to refresh the scaled tiles before loading the new ones.
		setTimeout(this._tile, 0);
	}
	return this;
};
// ----------------------------------------------------------------------------
// Convenience wrappers for zoomTo()
// ----------------------------------------------------------------------------
/**
	@param	{Array=} center
	@param	{Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.zoomIn = function(center, initiator) {
	return this.zoomTo(this.z - 1, center, initiator);
};

/**
	@param	{Array=} center
	@param	{Object=} initiator
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.zoomOut = function(center, initiator) {
	return this.zoomTo(this.z + 1, center, initiator);
};

// ----------------------------------------------------------------------------
// TILE MANAGEMENT methods
// ----------------------------------------------------------------------------
/*
	Since the whole purpose of this Viewer is to display images to users in
	pieces, we need a method to find and load only the tiles in view.

	- Using a sparse array enhances tile lookup performance since we just have to
	check for the existence of a single element rather than scan the array for
	a particular element.  I.e., tiles[tile_index] = true;

	- Sorting the missing tiles by distance from center means the tiles in the
	center of the screen will load first, instead of from the top left corner.

	- Creating a "template" image and using cloneNode is faster than using
	document.createElement('IMG') for each tile.

	- Only checking for unloaded tiles after the slide element has moved a tile
	dimension (width or height) reduces wasted cycles.  (If all visible tiles
	have loaded, there can't be any others until the slide has moved a tile
	width or height.)

	- Local variables are used for any object property used more than once (performance
	enhancement).

	- Creating enough tile IMGs for the entire element, then filling in the URL
	on-demand is much smoother than adding the tile IMGs as-needed since there
	is no need for a document reflow each time.

*/
// ----------------------------------------------------------------------------
/**
	updateTiles(); updates tile images (loads all in visible range)

	called by: load(), resize(), refresh(), zoomTo(), moveTo(), and drag().

	@protected
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.updateTiles = function() {
// ----------------------------------------------------------------------------
	return this.createUnloadedTiles().loadVisibleTiles(this.tileBufferFast);
};

// ----------------------------------------------------------------------------
/**
	@protected
	@param	{Element=} element
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.createUnloadedTiles = function(element) {
// ----------------------------------------------------------------------------
	var r, c, i,
		z = this.z,
		dx = this.offsetX - this.elementOffsetX,	// amount to offset elements wrt element position vs. slide position
		dy = this.offsetY - this.elementOffsetY,
		tE = this.tileElements,
		n  = tE.length,
		w  = this.width,
		h  = this.height,
		tw = this.tileWidth,
		th = this.tileHeight,
		tile_exists = [],
		tiles = [],
		tile,
		range = this.getElementRange(),
		colA = range.colA,
		rowA = range.rowA,
		colZ = range.colZ,
		rowZ = range.rowZ,
		cols = this.tileCols,
		lastCol = cols - 1,
		lastRow = this.tileRows - 1,
		tw_edge = w % tw || tw,
		th_edge = h % th || th,
		TILE = document.createElement('IMG'),
		f = document.createDocumentFragment();

	// Set common properties on tile prototype element
	TILE.style.position	= "absolute";
	TILE.style.display	= "none";
	TILE.style.zIndex	= 1;
	TILE.alt = "";

	// Check tileElements (tile transfer)
	while (n--) {
		tile = tE[n];
		r = tile.__row;
		c = tile.__col;
		if (r < rowA || r > rowZ || c < colA || c > colZ)
			continue;
		tile_exists[r * cols + c] = true;
		tiles.push(f.appendChild(tile));

		tile.style.left = (tw * c + dx) + "px";
		tile.style.top  = (th * r + dy) + "px";
	}

	// Find non-existent tiles within element boundaries
	for (r = rowA; r <= rowZ; ++r) {
		for (c = colA; c <= colZ; ++c) {
			i = r * cols + c;
			if (tile_exists[i]) continue;
			tile = TILE.cloneNode(false);
			tile.width  = c == lastCol ? tw_edge : tw; // edge_width = slide_width mod tile_width
			tile.height = r == lastRow ? th_edge : th;
			tile.style.left = (tw * c + dx) + "px";
			tile.style.top  = (th * r + dy) + "px";
			tile.onload = this._tileOnload; // cloneNode doesn't clone event handlers
			tile.__row = r;
			tile.__col = c;
			tile.__src = this.slide.url(c,r,z,i);
			tiles.push(f.appendChild(tile));
		}
	}

	(element || this.element).appendChild(f);
	this.tileElements = tiles;

	return this;
};

// ----------------------------------------------------------------------------
/**
	@protected
	@param	{number=} padding
	@param	{number=} limit
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.loadVisibleTiles = function(padding, limit) {
// ----------------------------------------------------------------------------
	var r, c,
		tE = this.tileElements,
		n = tE.length,
		tiles = [],
		tile,
		range = this.getViewportRange(padding),
		colA = range.colA,
		rowA = range.rowA,
		colZ = range.colZ,
		rowZ = range.rowZ,
		cols = this.tileCols,
		lastCol = cols - 1,
		lastRow = this.tileRows - 1,
		c0 = rowA + (rowZ - rowA)/2,	// Center x
		c1 = colA + (colZ - colA)/2,	// Center y
		// More efficient (~46%) and shorter coordinate ordering function:
		// (NOTE:  This sort backwards so we can use a decrementing (n--) loop.)
		byDistance = function(a, b) {
			var b0 = b.__row - c0, b1 = b.__col - c1,
				a0 = a.__row - c0, a1 = a.__col - c1;
			return b0*b0 + b1*b1 - a0*a0 - a1*a1;
		};

	// Find unloaded tiles (where src == "")
	while (n--) {
		// tile = tE[i];
		// if (tile.src) continue;
		if ((tile = tE[n]).src || tile.__row < rowA || tile.__row > rowZ || tile.__col < colA || tile.__col > colZ)
			continue;
		tiles.push(tile);
	}

	// Sort by distance from center of viewport
	tiles.sort(byDistance);

	// Load image (set .src)
	n = limit > 0 ? Math.min(limit, tiles.length) : tiles.length;
	while (n--)
		tiles[n].src = tiles[n].__src

	// Reset movement since last update
	// index = row * numberOfCols + col
	if (!padding) {
		this.tileA = rowA * cols + colA;
		this.tileZ = rowZ * cols + colZ;
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.tileOnload(); this is the callback that each tile image receives (as IMG.onload).
		In order to preserve this == Image, viewer is passed as an argument.

	@this	{Image}
	@param	{vs.Viewer} viewer
*/
vs.Viewer.prototype.tileOnload = function(viewer) {
// ----------------------------------------------------------------------------
	this.style.display = "block";
	// new Effect.Appear(this, {duration:0.25});
	viewer.doEvent("tile");
	this.onload = null;
};

// ----------------------------------------------------------------------------
vs.Viewer.prototype.idleTileLoader = function() {
// ----------------------------------------------------------------------------
	// Return if this is not appropriate
	if (this.dragging || !this.loaded() || !this.tileBufferSlow)
		return;

	var tE = this.tileElements,
		n = tE.length;

	// Return if any tiles are currently loading
	while (n--)
		if (tE[n].src && !tE[n].complete)
			return;

	// Otherwise, set some tiles loading
	this.loadVisibleTiles(this.tileBufferFast + this.tileBufferSlow, this.tileBufferSlowLimit);
};

// ----------------------------------------------------------------------------
/**
	setZoom() + setLevelProperties()

	viewer.setZoom(z); sets the zoom level without triggering an event or changing
		tiles.  Used in zoomTo() and load() for validating <z>.

	@protected
	@param	{?number=} zf
	@return	{boolean}
*/
vs.Viewer.prototype.setZoom = function(zf) {
// ----------------------------------------------------------------------------
	var /** @type {Array.<number>} */ center,
		/** @type {Array.<number>} */ level,
		zi = this.z,
		is_valid = this.loaded()
			// resetting zf here to accomodate Infinity == "lowest level" shorthand
			&& zi != (zf = zf == Number.POSITIVE_INFINITY ? this.slide.getLowestLevel() : parseInt(zf,10))
			&& this.slide.isValidLevel(zf);

	if (is_valid) {
		if (this.slide.isValidLevel(zi)) { // for this to work, we need to set a nonsense level in load() (e.g., -1 or Infinity)
			center = this.getCenter().multiplyBy(this.slide.getRatio(zf,zi));
			this.offsetX	= Math.round(this.containerWidth/2  - center[0]);
			this.offsetY	= Math.round(this.containerHeight/2 - center[1]);
		}
		level = this.slide.levels[zf];
		// formerly in separate setLevelProperties():
		this.tileCols	= Math.ceil((this.width  = level[0])/(this.tileWidth  = level[2]));
		this.tileRows	= Math.ceil((this.height = level[1])/(this.tileHeight = level[3]));
		this.xLowerLimit = this.boundaryLimit - level[0];
		this.yLowerLimit = this.boundaryLimit - level[1];

		// Set this.z
		this.z = zf;
	}

	return is_valid;
};

// ----------------------------------------------------------------------------
// MOVEMENT methods
// ----------------------------------------------------------------------------
/**
	viewer.moveTo(); moves the viewer to offset [x,y].  Actual movement may vary
		depending on bounding (moving out of view, etc.) behavior; actual distance
		moved is returned, [dx,dy].

	@param	{Array.<number>} offset
	@param	{Object=} initiator
	@return	{Array.<number>}
*/
vs.Viewer.prototype.moveTo = function(offset, initiator)   {
// ----------------------------------------------------------------------------
	var es = this.element.style,
		delta = this.setPosition(offset);

	es.left = (this.elementOffsetX += delta[0]) + "px";
	es.top  = (this.elementOffsetY += delta[1]) + "px";

	this.doEvent("move", initiator, delta);
	// Should probably do "drop" here, too (but causes RangeError in doEvent)
	// Can we do "drop" iff !dragging? (Useful for ViewerLink)
	// this.doEvent("drop", initiator);
	// if (!this.dragging)
	// 	this.doEvent("drop", initiator);

	if (this.requiresTiles()) {
		if (this.dragging)
			this.updateTiles();
		else
			this.refresh();
	}
	return delta;
};

// ----------------------------------------------------------------------------
/**
	viewer.moveBy(); moves the viewer by delta [x,y].  Actual movement may vary
		depending on bounding (moving out of view, etc.) behavior; actual distance
		moved is returned, [dx,dy].  This is just a wrapper around moveTo().

	@param	{Array.<number>} delta
	@param	{Object=} initiator
	@return	{Array.<number>}
*/
vs.Viewer.prototype.moveBy = function(delta, initiator) {
// ----------------------------------------------------------------------------
	return this.moveTo([
		this.offsetX + delta[0],
		this.offsetY + delta[1]
	], initiator);
};

// ----------------------------------------------------------------------------
/**
	viewer.centerOn(); moves the viewer so that coords in the center of the
		viewport, if possible.  Actual movement may vary depending on bounding
		(moving out of view, etc.) behavior; actual distance moved is returned,
		[dx,dy].  This is just a wrapper around moveTo().

	@param	{Array.<number>} coords
	@param	{Object=} initiator
	@return	{Array.<number>}
*/
vs.Viewer.prototype.centerOn = function(coords, initiator) {
// ----------------------------------------------------------------------------
	return this.moveTo([
		this.containerWidth/2 - coords[0],
		this.containerHeight/2 - coords[1]
	], initiator);
};

// ----------------------------------------------------------------------------
// ANIMATED MOVEMENT methods
// ----------------------------------------------------------------------------
/**
	animatedMoveTo(); primer "mover" of animated movement methods

	@param	{Array} offset
	@param	{Object=} initiator
	@param	{Object=} effectOptions
	@return	{Effect}
*/
vs.Viewer.prototype.animatedMoveTo = function(offset, initiator, effectOptions) {
// ----------------------------------------------------------------------------
	var effect, viewer = this,
		startCoords = [this.offsetX, this.offsetY],
		delta = this.setPosition(offset),
		endCoords = [ startCoords[0] + delta[0], startCoords[1] + delta[1] ];

	// Reset these after getting delta
	this.offsetX = startCoords[0];
	this.offsetY = startCoords[1];

	function cancel(event) {
		effect.cancel();
		viewer.container.stopObserving("mousedown", arguments.callee);
		viewer.onMouseDown(event);
		viewer = effect = null;
	}

	viewer.container.observe("mousedown", cancel);

	return effect = new Effect.Tween(this, 0, 1,
		Object.extend({
			transition:	Effect.Transitions.sinoidal,
			afterSetup: function() {
				viewer.dragging = true;
			},
			afterFinish: function() {
				viewer.container.stopObserving("mousedown", cancel);
				viewer.dragging = false;
				viewer.refresh();
				viewer = effect = null;
			}
		}, effectOptions || {}),
		function(p) {
			this.moveTo([
				startCoords[0] + delta[0] * p,
				startCoords[1] + delta[1] * p
			], initiator);
		}
	);
};

// ----------------------------------------------------------------------------
/**
	@param	{Array} delta
	@param	{Object=} initiator
	@param	{Object=} effectOptions
	@return	{Effect}
*/
vs.Viewer.prototype.animatedMoveBy = function(delta, initiator, effectOptions) {
// ----------------------------------------------------------------------------
	return this.animatedMoveTo([
		this.offsetX + delta[0],
		this.offsetY + delta[1]
	], initiator, effectOptions);
};

// ----------------------------------------------------------------------------
/**
	@param	{Array} center
	@param	{Object=} initiator
	@param	{Object=} effectOptions
	@return	{Effect}
*/
vs.Viewer.prototype.animatedCenterOn = function(center, initiator, effectOptions) {
// ----------------------------------------------------------------------------
	return this.animatedMoveTo([
		(this.containerWidth  >> 1) - center[0],
		(this.containerHeight >> 1) - center[1]
	], initiator, effectOptions);
};

// ----------------------------------------------------------------------------
/**
	viewer.setPosition(); used internally to set position without events or actual
		movement.

	setPosition (and setCenter) are used internally to set offsets WITHOUT
	executing "move" event or updating/moving the element.  Like setZoom, they
	pretty much just set values while making sure they are valid.

	They both return the amount actually changed.

	@protected
	@param	{Array.<number>} offset
	@return	{Array.<number>}
*/
vs.Viewer.prototype.setPosition = function(offset) {
// ----------------------------------------------------------------------------
	var xi = this.offsetX,
		yi = this.offsetY;

	return [
		(this.offsetX = Math.bound(Math.round(offset[0]), this.xLowerLimit, this.xUpperLimit)) - xi,
		(this.offsetY = Math.bound(Math.round(offset[1]), this.yLowerLimit, this.yUpperLimit)) - yi
	];
};

// ----------------------------------------------------------------------------
/**
	viewer.setCenter(); used internally to set position without events or actual
		movement.  Puts coords in center of viewport; returns amount actually
		moved.

	@protected
	@param	{Array.<number>} coords
	@return	{Array.<number>}
*/
vs.Viewer.prototype.setCenter = function(coords) {
// ----------------------------------------------------------------------------
	return this.setPosition([
		this.containerWidth/2 - coords[0],
		this.containerHeight/2 - coords[1]
	]);
};

// ----------------------------------------------------------------------------
/**
	viewer.setContainerProperties(); sets properties after attach or resize events.

	@return	{vs.Viewer}
*/
vs.Viewer.prototype.setContainerProperties = function() {
// ----------------------------------------------------------------------------
	if (this.container) {
		var c = this.container.getDimensions();
		this.containerWidth  = c.width;
		this.containerHeight = c.height;
		this.xUpperLimit = c.width  - this.boundaryLimit;
		this.yUpperLimit = c.height - this.boundaryLimit;
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.getCenter(); returns the coordinates at the center of the viewport
		relative to the current zoom level unless absolute is true.

	@param	{boolean=} absolute
	@return {Array.<number>|undefined}
*/
vs.Viewer.prototype.getCenter = function(absolute) {
// ----------------------------------------------------------------------------
	if (this.loaded()) return [
		Math.round((this.containerWidth/2  - this.offsetX) * (absolute ? this.slide.getRatio(0, this.z) : 1)),
		Math.round((this.containerHeight/2 - this.offsetY) * (absolute ? this.slide.getRatio(0, this.z) : 1))
	];
};
// ----------------------------------------------------------------------------
/**
	viewer.getTileRange(); return tile rows and columns for a given area

	@param	{number} x
	@param	{number} y
	@param	{number} w
	@param	{number} h
	@param	{number} padding
	@return	{Object.<string,number>}
*/
vs.Viewer.prototype.getTileRange = function(x, y, w, h, padding) {
// ----------------------------------------------------------------------------
	var tw = this.tileWidth,
		th = this.tileHeight,
		lastCol = this.tileCols - 1,
		lastRow = this.tileRows - 1;

	return {
		colA: Math.bound(Math.floor(-x/tw) - padding, 0, lastCol),
		rowA: Math.bound(Math.floor(-y/th) - padding, 0, lastRow),
		colZ: Math.bound(Math.floor((w - x)/tw) + padding, 0, lastCol),
		rowZ: Math.bound(Math.floor((h - y)/th) + padding, 0, lastRow)
	};
};

// ----------------------------------------------------------------------------
/**
	viewer.getViewportRange(); calls getTileRange for visible tiles (plus optional padding, i.e., this.tileBufferFast)

	@param	{number=} padding
	@return	{Object.<string,number>}
*/
vs.Viewer.prototype.getViewportRange = function(padding) {
// ----------------------------------------------------------------------------
	return this.getTileRange(
		this.offsetX,
		this.offsetY,
		this.containerWidth,
		this.containerHeight,
		padding > 0 ? padding : 0
	);
};

// ----------------------------------------------------------------------------
/**
	viewer.getElementRange(); calls getTileRange for tiles within this.element

	@return	{Object.<string,number>}
*/
vs.Viewer.prototype.getElementRange = function() {
// ----------------------------------------------------------------------------
	return this.getTileRange(
		this.offsetX - this.elementOffsetX,
		this.offsetY - this.elementOffsetY,
		this.elementWidth,
		this.elementHeight,
		0
	);
};

// ----------------------------------------------------------------------------
/**
	viewer.getRatio(); calls slide.getRatio for current z

	@return	{number|undefined}
*/
vs.Viewer.prototype.getRatio = function() {
// ----------------------------------------------------------------------------
	return this.slide
		? this.slide.getRatio(this.z)
		: void(0);
};

// ----------------------------------------------------------------------------
/**
	viewer.getPower(); calls slide.getPower for current z

	@return	{number|undefined}
*/
vs.Viewer.prototype.getPower = function() {
// ----------------------------------------------------------------------------
	return this.slide
		? this.slide.getPower(this.z)
		: void(0);
};

// ----------------------------------------------------------------------------
// Events methods
// ----------------------------------------------------------------------------
/**
	viewer.onEvent(); sets a method to be called when a given event occurs.

	@param	{string} event
	@param	{Object} object
	@param	{Function} method
	@return	{vs.Viewer}

	DevNote:  Should this also have an "ignoreObject" boolean that doesn't filter
	out by initiator?  I think that would be helpful.

	onEvent(event, object, method);

	The *Event methods are used to hook into various events that occur throughout
	the lifetime of the Viewer.  Typically these are used by ViewerWidgets, but
	they can be used in other ways as well.

	One important feature of this event system is that it can be used to "filter"
	an object out of the events in order to avoid recursion.  The classic example
	is a thumbnail viewer widget that drags the parent when it is being dragged
	and is dragged by the parent when the parent is being dragged.  Typically this
	means that one method is "watching" the parent and updating the thumbnail while
	another method is "watching" the thumbnail and updating the parent.  Of course,
	when the parent-watcher observes movement and moves the thumbnail, the thumbnail-
	watcher will update the parent, again invoking the parent-watcher.  This results
	in recursion.

	The event queue system is used to avoid this by registering an object with an
	event.  In doEvent, an optional "initiator" argument is passed to the function.
	As the Viewer loops through the registered events, it compares the initiator
	to the object, and if they match, the method is not executed.  The initiator
	comes from the Viewer method which triggers the particular event.

	To fix the thumbnail example above, the thumbnail object would be registered
	under the "move" event with its thumbnail-updating method and the thumbnail-
	watcher would update the parent with viewer.moveBy(delta, ThumbnailObject),
	passing itself into the parent Viewer's moveBy method as the initiator, which,
	in turn gets passed into the doEvent("move") method, and is used to "filter out"
	the thumbnail object from executing recursive code.

	NOTE: If you want to use a function instead of a method (i.e., there's no
	object associated with it), use either null or window for the object argument.

	In the Viewer code, any method containing a doEvent() must accept an optional
	'initiator' argument at the end of the argument list.  This lets us use the
	standard methods (moveTo, zoomTo, load, etc.) both internally and externally,
	only requiring an extra parameter to take advantage of the object "filtering."

	---------------------------------------------------------------
	A List of Valid Events
	---------------------------------------------------------------
	event		initiating method(s)						data
	---------------------------------------------------------------
	"move"		move(), moveTo(), moveBy(), centerOn()		[dx,dy]
	"zoom"		zoomTo(), zoomIn(), zoomOut()				zf
	"click"		down()										event, [x,y] click coordinates
	"dblclick"	zoom()										event, [x,y] click coordinates
	"grab"		grab()
	"drop"		drop()										[dx,dy] total distance moved? (not implemented)
	"attach"	attachTo()									container
	"detach"	detach()
	"load"		load(), fetch(), ajaxSuccess()				slide, startzoom, startpos, absCoords
	"unload"	unload()
	"destroy"	destroy()
	"resize"	vs.Viewer.resizeListener					[w,h] container dimensions? (not implemented)
	---------------------------------------------------------------

	Developer's Note:  I may consider removing the event verification portion and
	replacing it with an event creating portion.  Although I can't think right now
	of why it'd be useful, it might be nice for widgets to be able to create their
	own events without them existing in the Viewer.

	"link" and "unlink" come to mind -- could be useful for ViewerLink + a ViewerLinkIndicator widget

	"drop" should be synonymous with "done moving" so that widgets, et al. that
		need to update based on position, but not every "move" event can do so
		more efficiently.
	Should "drop" always be preceeded by "grab"?

*/
vs.Viewer.prototype.onEvent = function(event, object, method) {
// ----------------------------------------------------------------------------
	var args = [object, method];

	this.events[event]
		? this.events[event].push(args)
		: this.events[event] = [args];
	return this;
};
// ----------------------------------------------------------------------------
/**

	viewer.doEvent(); trigger an event on this particular viewer.  All object.methods
		for that event are executed, except on <initiator>, if defined.

	Instead of immediately executing the functions in the array, they are pushed onto
	a queue (FIFO).  This is in case a new event is initiated during the execution of
	these functions.  E.g., if, during a load event, some object initiated a "move,"
	then the array of move functions would be executed before finishing the "load"
	event.  This may result in some widgets failing due to their onLoad method not
	being executed before their onMove method.  With the queue, all methods are
	executed in their expected order.

	@param	{string} event
	@param	{Object=} initiator
	@param	{...} argument_list
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.doEvent = function(event, initiator, argument_list) {
// ----------------------------------------------------------------------------
	var fQ = this.eventFunctionQueue,
		startQueue = fQ.length == 0,
		args = Array.prototype.slice.call(arguments, 2),
		e = this.events[event],
		i = 0, n;

	/*
		eventFunctionQueue =
		[
			[object, method], [args]
			...
			[object, method], [args]
		]
		fQ[i][0][0] = object
		fQ[i][0][1] = method
		fQ[i][1]    = args
	*/

	if (e) {

			n = e.length;
			if (initiator) for ( ; i < n; i++)
				e[i][0] == initiator || fQ.push([e[i], args]);
			else for ( ; i < n; i++)
				fQ.push([e[i], args]);

			if (startQueue) {
				for (i = 0; i < fQ.length; i++) // don't cache length because it might change
					try {
						fQ[i][0][1].apply(fQ[i][0][0], fQ[i][1]);
					} catch(err) {
						console.error("[vs.Viewer] doEvent('%s'): %s".sprintf(event, err.message));
					}

				this.eventFunctionQueue = [];
			}

	} else if (IN_DEVELOPMENT)
		console.warn("[vs.Viewer.doEvent] No event (%s) defined!".sprintf(event));

	return this;
};
// ----------------------------------------------------------------------------
/**
	viewer.unEvent(); remove an object from an event; see below for further detail.

	unEvent(object):				Remove all events matching object
	unEvent(event):					Remove all events in this.events[event]
	unEvent(event,object):			Remove only "event" events matching object
	unEvent(event,object,method):	Remove specific event

	@param	{Object|string=} event
	@param	{Object=} object
	@param	{Function=} method
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.unEvent = function(event, object, method) {
// ----------------------------------------------------------------------------
	var i, e;

	// unEvent(object)
	// Remove object from all event queues if it's the only argument
	if (typeof arguments[0] == 'object') {
		for (e in this.events) {
			i = this.events[e].length;
			while (i--)
				if (this.events[e][i][0] == arguments[0]) this.events[e].splice(i,1);
		}
	} else if ((e = this.events[event]) && (i = e.length)) {
		// unEvent(event)
		// Remove ALL events
		if (arguments.length == 1)
			e = [];
		// unEvent(event,object)
		// Remove all events associated with <object>
		else if (arguments.length == 2)
			while (i--) e[i][0] == object && e.splice(i,1);
		// unEvent(event,object,method)
		// Remove all events with <object> and <method>
		else
			while (i--) e[i][0] == object && e[i][1] == method && e.splice(i,1);
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	viewer.destroy(); dereferences viewer from various locations as well as
		firing the "destroy" event.

	@param	{Object=} initiator
*/
vs.Viewer.prototype.destroy = function(initiator) {
// ----------------------------------------------------------------------------
	if (this.request)
		this.request.cancel();

	clearInterval(this.tileBufferSlowInterval);

	this.doEvent("destroy", initiator).detach();

	// Remove all references & event handlers
	for (var p in this)
		delete this[p];

	// Remove global reference(s)
	if (vs.Viewer.currentViewer == this)
		vs.Viewer.currentViewer = null;

	// This is incompatible with vs.Viewer#id:
	vs.Viewer.instances = vs.Viewer.instances.without(this);
};

// ----------------------------------------------------------------------------
// Ajax methods (for fetching slides by id)
// ----------------------------------------------------------------------------
/**
	viewer.fetch(id); uses an Ajax request to fetch a slide object.  Options are
		passed to the Prototype Ajax.Request.

	@param	{number} id
	@param	{?number=} startzoom
	@param	{Array.<number>=} startpos
	@param	{?boolean=} absCoords
	@param	{Object=} ajaxOptions
	@return	{vs.Viewer}
*/
vs.Viewer.prototype.fetch = function(id, startzoom, startpos, absCoords, ajaxOptions) {
// ----------------------------------------------------------------------------

	// Check for (and abort) incomplete request
	// (Ajax.Request.cancel is our extension to Prototype.)
	if (this.request)
		this.request.cancel();

	this.request = new Ajax.Request(this.fetchURL, Object.extend({
		// default options
		'method':		'get',
		'parameters':	{'s': id},

		'onSuccess':	this._ajaxSuccess,
		'onFailure':	this._ajaxFailure,
		'onTimeout':	this._ajaxTimeout,
		'onException':	function(request, err){ console.error("Ajax exception: %s", err.message); }, // move this to an IN_DEVELOPMENT block?

		use_cache:		true,

		startzoom:	startzoom,
		startpos:	startpos,
		absCoords:	absCoords,
		initiator:	null
		// override with custom options, if any
	}, ajaxOptions ||  {}));

	return this;
};

// ----------------------------------------------------------------------------
/**
	Called on successful fetch().

	The onSuccess/onFailure/onTimeout callbacks receive an Ajax.Response object
	(line 1555 in v1.6.1) as their first argument and response.headerJSON for
	the second.

	The Ajax.Request object and the XHR object are available as the 'request'
	and 'transport' properties, respectively.  The options originally passed to
	the Ajax.Request constructor are accessible from the request object, i.e.,
	response.request.options.

	The extra "()" around response.responseText are necessary to successfully
	eval an object literal.  See http://rayfd.me/2007/03/28/why-wont-eval-eval-my-json-or-json-object-object-literal/
	for an explanation.

	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.Viewer.prototype.ajaxSuccess = function(response, headerJSON) {
// ----------------------------------------------------------------------------
	var slide,
		opts = response.request.options;
	try {
		slide = new vs.VirtualSlide(/** @type {Object} */(eval("(" + response.responseText + ")")));
	} catch (err) {
		(opts.onException || Prototype.emptyFunction)(response.request, err);
	}

	this.load(slide,
		opts.startzoom,
		opts.startpos,
		opts.absCoords,
		opts.initiator
	);
};

// ----------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.Viewer.prototype.ajaxFailure = function(response, headerJSON) {};

// ----------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.Viewer.prototype.ajaxTimeout = function(response, headerJSON) {};
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// vs.Viewer CLASS METHODS
// ----------------------------------------------------------------------------
// vs.Viewer GLOBAL KEY LISTENERS
// ----------------------------------------------------------------------------
/*

	Event.keyCode results for most major browsers

			Linux					Windows									Mac
			Chrome	Firefox	Opera	IE6		IE7		IE8		Firefox	Opera	Safari
"-"			189		109		109		189				189		109		109		189
"="			187		61		61		187				187		107		61		187
Shift + "="	187		61		61		187				187		107		61		187
NumPad "-"	109		109		109		109				109		109		45		189
NumPad "+"	107		107		61		107				107		107		43		187

*/
// ----------------------------------------------------------------------------
vs.Viewer.keyBindings = (function() {
// ----------------------------------------------------------------------------
	/**
		@param {Event} event
		@param {number} modMask
	*/
	function zoomOut(event, modMask) {
		// prevent Opera's webpage zoom from changing scale
		if (Prototype.Browser.Opera)
			event.stop();
		var vsv = vs.Viewer.currentViewer;
		if (!vsv || vsv.dragging) {
			return;
		}
		if (modMask == vs.Keys.SHIFT) {
			var zi = vsv.z,
				zf = vsv.slide.getContainingLevel(vsv.containerWidth, vsv.containerHeight),
			   center = vsv.slide.getCenter(zi);

			vsv.zoomTo(zf, center);
			if (vsv.z == zi)
				vsv.centerOn(center);
		} else if (!modMask) {
			vsv.zoomOut();
		}
	}

	/**
		@param {Event} event
		@param {number} modMask
	*/
	function zoomIn(event, modMask) {
		// prevent Opera's webpage zoom from changing scale
		if (Prototype.Browser.Opera)
			event.stop();
		var vsv = vs.Viewer.currentViewer;
		if (!vsv || vsv.dragging) {
			return;
		}
		if (modMask == vs.Keys.SHIFT) {
			vsv.zoomTo(0);
		} else if (!modMask) {
			vsv.zoomIn();
		}
	}

	return new vs.KeyBindingGroup({
		'-: 45 109 189 231': zoomOut,
		'+: 43 61 107 187': zoomIn
	});
})();

// set up default key context
vs.Viewer.keys = new vs.KeyContext(vs.Viewer.keyBindings);
vs.Keys.pushContext(vs.Viewer.keys);

// ----------------------------------------------------------------------------
// Resize event listeners
// ----------------------------------------------------------------------------
vs.Viewer.resizeListener = function() {
// ----------------------------------------------------------------------------
	var viewer,
		viewers = vs.Viewer.instances,
		n = viewers.length;

	while (n--)
		if ((viewer = viewers[n]).attached())
			viewer.doEvent("resize", null, viewer.container.getDimensions());
};

// ----------------------------------------------------------------------------
vs.Viewer.refreshAll = function() {
// ----------------------------------------------------------------------------
	for (var i = 0; i < vs.Viewer.instances.length; i++)
		if (vs.Viewer.instances[i].loaded())
			vs.Viewer.instances[i].refresh();
};

// ----------------------------------------------------------------------------
vs.Viewer.init = function() {
// ----------------------------------------------------------------------------
	// Observe resize events (and adjust viewers accordingly)
	Event.observe(window, 'resize', vs.Viewer.resizeListener);

	// Enable key bindings
	vs.Keys.start();

	// Add caching to Ajax.Request classes
	Ajax.Request.addMethods(vs.Prototype.AjaxCacheRequestMethods);

	// Extend Ajax.Request with cancel() method
	Ajax.Request.addMethods(vs.Prototype.AjaxRequestMethods);

	// Enable Ajax timeouts
	Ajax.Responders.register(vs.Prototype.AjaxTimeoutResponders);
// ----------------------------------------------------------------------------
};

