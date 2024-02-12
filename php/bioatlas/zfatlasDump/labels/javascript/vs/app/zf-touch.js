// ----------------------------------------------------------------------------
zfatlas.init.TouchViewer = function(container, slide, atlas) {
// ----------------------------------------------------------------------------
/*
	We'll have to determine big vs. small at some point.
	Current this is sufficient for iPad (minus the zooming).

	Need:
		- zooming (widget or interface)
		- add navigation or remove Iterator
		- for smaller devices (iPod/iPhone)
		- other small, touch devices (identifying them)

		- Can we use CSS to progressively hide widgets?
		- Or should we just use screen.width/screen.height?
		- Do we need a special widget just for mobile, i.e., to pop up more options?

		- A zoom widget specifically for touch devices (buttons) until we perfect pinch zoom
			- Plus
			- Minus
			- Fading notification of current level (" 20x "..."") even if no change

	strictly speaking, we probably don't even need anything except touchmove (and touchend for pinch zoom)


	Changes from standard vs.Viewer:

	- load()
		Only one event listener added ("touchstart" -> _down)
	- unload()
		Only one event listener removed ("touchstart")
	- down()
		Change event.stop() to event.preventDefault()
		Remove event.isLeftClick()
		Change event.screenX to event.touches[0].screenX
		Change event.screenY to event.touches[0].screenY
		Change "mouseup" to "touchend"
		Change "mousemove" to "touchmove"
	- grab()
		Change "mousemove" to "touchmove"
	- drop()
		Change "mouseup" to "touchend"
		Change "mousemove" to "touchmove"
		Add code for detecting pinch end and passing off event to zoom()
	- drag()
		Change event.stop() to event.preventDefault()
		Change event.screenX to event.touches[0].screenX
		Change event.screenY to event.touches[0].screenY
		Add code for pinch gesture (transform zoom)
	- zoom()
		Add smooth transition (animation) from current event.scale to nearest zoom level




	These could be included with vs.Viewer by adding separate touch* events in load/unload and defining new methods, i.e., touchDown, touchZoom, etc.
	_touchStart
	_touchMove
	_touchEnd

	zoomTo might need to be updated as well, to not zoom tiles.  In fact, maybe we can externalize that code...  this.scaleTiles();










	The zooming needs to animate between the gestureend and the closest available level.
	Zoom center needs to be the center of the gesture coords
		clientX/Y?

*/
	var viewer = (new vs.Viewer)
		.attachTo("vs")
		.addWidget(vs.widget.Scalebar)
		.addWidget(vs.widget.ZoomTouch)
		.addWidget(vs.widget.TileStatistics)
		.focus(),

		startpos = vs.env.query.c && vs.env.query.c.match(/^\d+,\d+$/)
			? vs.env.query.c.split(",")
			: null;

	viewer.load(new vs.VirtualSlide(window['slide']), vs.env.query.z, startpos, true);

	return viewer;
};
/*
	Affected methods:

		load(), unload(), drag(), drop(), grab(), zoom()

	Touch device events:

		touchstart
		touchend
		touchmove

		gesturestart,-change,-end

		1. touchstart ( first finger )
		2. gesturestart
		3. touchstart (second finger)
		4. gesturechange ( many times )
		5. gestureend (when second finger is removed)
		6. touchend ( second finger )
		7. touchend ( first finger)

		** two touchend events do not necessarily occur if both fingers are removed simultaneously

	Implementation:

		For movement, change mouse* to touch*.
		For zooming.... use gesture*
			This needs two parts: (1) gesturechange/fake zoom and (2) gestureend/real zoom



	touchEnd is not accurate enough to maintain our own touch counter, but touchStart is.
	We can set...
		touches = event.touches.length (onTouchStart)
		touches = event.changedTouches.length - 1 (onTouchEnd)

	We could also use DOM events instead of Prototype here, if we wanted, although it'd break consistency


*/
// ----------------------------------------------------------------------------
// Override some vs.Viewer methods if this is a "mobile" device.
if (vs.env.mobile) {

	var
		circle1 = new Element('DIV').setStyle({
			position:			'absolute',
			zIndex:				'99',
			border:				'1px solid #000',
			backgroundColor:	'rgba(51,255,51,0.60)',
			WebkitBoxShadow:	'2px 2px 4px rgba(0,0,0,0.5)',
			color:				'#060',
			textAlign:			'center',
			fontSize:			'50px',
			fontFamily:			'sans-serif',
			width:				'60px',
			height:				'60px',
			WebkitBorderRadius:	'30px',
			margin:				'-30px'
		}).insert("1"),
		circle2 = circle1.cloneNode(false).insert("2"),
		circle3 = circle1.cloneNode(false).setStyle({
			backgroundColor:		'rgba(255,51,51,0.60)',
			color:					'#600'
		}).insert("X")
		circle4 = circle3.cloneNode(true);




vs.Viewer.prototype.pinching = false;
vs.Viewer.prototype.dragging = false;
vs.Viewer.prototype.tapCount = 0;
// ----------------------------------------------------------------------------
/**
	viewer.load() - Loads a slide, with optional position info.

	@param {vs.VirtualSlide} slide
	@param {?number=} startzoom
	@param {Array.<number>=} startpos
	@param {?boolean=} absoluteCoords
	@param {Object=} initiator
	@return	{vs.Viewer}

*/
vs.Viewer.prototype.load = function(slide, startzoom, startpos, absoluteCoords, initiator) {
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
		return;

	if (this.loaded())
		this.unload();

	// Initialize various properties
	this.slide			= slide;
	this.tileElements	= [];
	this.slideContent	= [];
	this.z				= Number.POSITIVE_INFINITY;  // resetting this so that setZoom works

	// Set initial zoom (as specified, largest within slide, or smallest zoom level)
	this.setZoom( startzoom )
	|| this.setZoom( slide.getContainingLevel( this.containerWidth, this.containerHeight ));

	this.element		= this.createElement(); // do this after setZoom so that setElementSize can have access to this.z
	this.offsetX		=
	this.offsetY		= 0; // these need to be zero before calling setCenter (or setPosition) on load

	// Set initial position
	startpos = startpos
		? absoluteCoords
			? slide.getCoordsFromAbs(startpos, this.z)
			: startpos
		: slide.getCenter(this.z);

	this.setCenter(startpos);

	// Attach event listeners and set background color to match slide
	this.container
		.observe('touchstart', this._down)
		.observe('touchmove',  this._drag)
		.observe('touchend',   this._drop)
		.insert(circle1)
		.insert(circle2)
		.insert(circle3)
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
		this.doEvent("unload",initiator);

		if (this.container) {
			this.container
				.stopObserving('touchstart', this._down)
				.stopObserving('touchmove',  this._drag)
				.stopObserving('touchend',   this._drop)
			if (this.element) {
				this.container.removeChild(this.element);
			}
			this.container.style.backgroundColor = vs.VirtualSlide.prototype.bgColor;
		}
		this.slide		=
		this.element	= null;
	}
	return this;
};7
// ----------------------------------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.down = function(event) { // onTouchStart
// ----------------------------------------------------------------------------
	event.preventDefault();


	$("output").insert("down(%d/%d/%d) ".sprintf(
		event.touches.length,
		event.changedTouches.length,
		event.targetTouches.length
	));

	$("touches").update(event.touches.length);

	if (event.touches.length > 1) {
		this.pinching = true;
		$("pinching").addClassName("true");
		return;
	}

	this.doEvent('click', this, this.getClickCoords(event));

	// These store the previous event.screen* values for movement in drag().
	this.lastScreenX = event.touches[0].screenX;
	this.lastScreenY = event.touches[0].screenY;

	circle1.style.left = event.touches[0].clientX + "px";
	circle1.style.top  = event.touches[0].clientY + "px";

	this.element.insert(circle4);

	this.container.observe('touchmove', this._grab);
};
// ----------------------------------------------------------------------------
	vs.Viewer.prototype.grab = function() { // onTouchMove (but only the first one following down())
// ----------------------------------------------------------------------------
		this.container.stopObserving('touchmove', this._grab);
		this.dragging = true;
		$("dragging").addClassName("true");
		this.doEvent("grab", this);
	};
// ----------------------------------------------------------------------------
	vs.Viewer.prototype.drop = function(event) { // onTouchEnd
// ----------------------------------------------------------------------------
/*
	Might have to define our own "pinching" boolean to assure proper behavior for multi-finger touchend.
*/
	$("output").insert("drop(%d/%d/%d) ".sprintf(
		event.touches.length,
		event.changedTouches.length,
		event.targetTouches.length
	));

	var active_fingers = event.changedTouches.length - 1;

	$("touches").update(active_fingers);

	if (active_fingers < 2 && this.pinching) {
		this.pinching = false;
		$("pinching").removeClassName("true");
		this.zoom(event);
	} else if (active_fingers == 0) {
		this.container.stopObserving('touchmove', this._grab);

		if (this.dragging) { // since dragging is only true after move
			this.refresh().doEvent("drop").dragging = false;
			$("dragging").removeClassName("true");
		}
	}

};
// ----------------------------------------------------------------------------
/** @param	{Event} event */
	vs.Viewer.prototype.zoom = function(event) { // onTouchEnd
// ----------------------------------------------------------------------------
/*
	Event.stop(event);

	var clickCoords = this.getClickCoords(event);

	this.doEvent("dblclick", clickCoords).zoomTo( this.z + (event.shiftKey ? 1 : -1), clickCoords)
*/

	var
		zf = this.slide.getNearestLevelByPower(event.scale * this.slide.getPower(this.z)),
		origin = this.element.style.WebkitTransformOrigin.match(/(\d+)px (\d+)px/),
		center = origin ? this.elementToSlideOffsets(origin.slice(1,3)) : this.getCenter();

	console.log("End scale: %f | Current power: %d | z: %d -> %d (%f)".sprintf(event.scale, this.slide.getPower(this.z), this.z, zf, this.slide.getRatio(zf, this.z)));
	console.log("Origin: %s, center: %s".sprintf(origin.toString(), center.toString()));

	// FIXME: centering is off
	// Need to translate origin to element
	// It's close, but still off -- element "jumps" after transition

	var viewer = this,
		zoomTo = function() {
			viewer.zoomTo(zf,center);
		};

	console.log("Scaling effect...");
	new Effect.Tween(this.element.style, event.scale, this.slide.getRatio(zf, this.z), {duration:0.5,afterFinish:zoomTo}, function(p){
		this.WebkitTransform = "scale("+p+")";
	});
/*
	this.doEvent("dblclick", this.getCenter()).zoomTo(
		zf
		// need to give a centerOn value; this seems like it should be getCenter + midpoint
	);*/
};
// DRAG II: THE REVENGE OF GESTURE!
// ----------------------------------------------------------------------------
/** @param	{Event} event */
vs.Viewer.prototype.drag = function(event) { // onTouchMove
// ----------------------------------------------------------------------------

	$("output").insert("drag(%d/%d/%d) ".sprintf(
		event.touches.length,
		event.changedTouches.length,
		event.targetTouches.length
	));

	$("touches").update(event.touches.length);

	event.preventDefault();

	circle1.style.left = event.touches[0].clientX + "px";
	circle1.style.top  = event.touches[0].clientY + "px";

	// ------------------------------------------------------------------------
	if (this.pinching)  { // Pinch zoom
	// ------------------------------------------------------------------------
		circle2.style.left = event.touches[1].clientX + "px";
		circle2.style.top  = event.touches[1].clientY + "px";
		circle3.style.left = Math.round((event.touches[0].clientX + event.touches[1].clientX)/2) + "px";
		circle3.style.top  = Math.round((event.touches[0].clientY + event.touches[1].clientY)/2) + "px";
		circle4.style.left = Math.round((event.touches[0].clientX + event.touches[1].clientX)/2) - this.elementOffsetX + "px";
		circle4.style.top  = Math.round((event.touches[0].clientY + event.touches[1].clientY)/2) - this.elementOffsetY + "px";

		this.element.style.WebkitTransformOrigin = Math.round((event.touches[0].clientX + event.touches[1].clientX)/2 - this.elementOffsetX) + "px " + Math.round((event.touches[0].clientY + event.touches[1].clientY)/2 - this.elementOffsetY) + "px";
		this.element.style.WebkitTransform = "scale(" + event.scale + ")";
		// this.element.style.WebkitTransform = "scale(" + event.scale + ")" + " rotate(" + event.rotation + "deg)";

	// ------------------------------------------------------------------------
	} else {  // Dragging
	// ------------------------------------------------------------------------
		var xf, yf,
			screenX = event.touches[0].screenX,
			screenY = event.touches[0].screenY,
			d	= [],
			es	= this.element.style,
			e	= this.events.move,
			i	= e.length,
			xi	= this.elementOffsetX,
			yi	= this.elementOffsetY,
			dx	= this.elementOffsetX - this.offsetX, // the difference between the element offset and the (virtual) slide offset
			dy	= this.elementOffsetY - this.offsetY;

		es.left = (this.elementOffsetX = xf = Math.bound(xi + this.dragMultiplier * (screenX - this.lastScreenX), this.xLowerLimit + dx, this.xUpperLimit + dx)) + "px";
		es.top  = (this.elementOffsetY = yf = Math.bound(yi + this.dragMultiplier * (screenY - this.lastScreenY), this.yLowerLimit + dy, this.yUpperLimit + dy)) + "px";


		this.lastScreenX = screenX;
		this.lastScreenY = screenY;

		this.offsetX += (d[0] = xf - xi);
		this.offsetY += (d[1] = yf - yi);
		this.dX += d[0];
		this.dY += d[1];

		// Tile loading during drag
		if (Math.abs(this.dX) > this.tileWidth || Math.abs(this.dY) > this.tileHeight)
			this.loadVisibleTiles(0);

		// Fire "move" events
		while (i--) e[i][1].call(e[i][0], d, this);
	}
};
// ----------------------------------------------------------------------------
} // endif;
// ----------------------------------------------------------------------------
/*
	Need:

		- Coordinates at the midpoint between touches[0] and touches[1] wrt the slide element
		- event.scale

	Behavior:

		- Single touch/first finger controls movement
		- Gesture/second finger controls zoom/scaling.
		- onGestureEnd (second finger leaving), animate transition between current scale to nearest zoom level

		- Check for gesturestart conditions in pinch()
		- Check for gestureend conditions in drop()


We need to be able to tell the difference between the touchEnd that ends a gesture and the last finger.
Since the TouchEvent that comes with ontouchend doesn't have accurate touches.length, we can maintain our own.

This will have to watch touchstart, touchend, AND touchcancel

PS: Check the changedTouches array.  Or the targetTouches array (aka "TouchList" a la http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchListClassReference/TouchList/TouchList.html#//apple_ref/javascript/cl/TouchList).

	touches = event.touches.length (onTouchStart)
	touches = event.changedTouches.length - 1 (onTouchEnd)
*/

/*
	"click" means we've pressed the mouse button or touched the screen
	"grab" means we've started dragging the slide
	"drop" means we've released the mouse button or stopped touching the screen after having dragged the slide.

	Two fingers can simultaneously touch or leave the screen, resulting in a single touchevent.
		How to trigger pinching/dragging?
		Where to set pinching/dragging?
		How to send "click" and "grab" events?
			If we jump straight to zooming, we can probably skip "click", although if only one finger leaves...
		Are we guaranteed to have two changedTouches when we're done pinching?  It doesn't seem like that's always true.
			If so, how to find transform origin?  (Use last?)
	If we zoom when pinching goes from true->false, do we also set dragging = false automatically?
	What happens if the scale->tile transitional effect is interrupted?

	-----
	load(): container.observe('touchstart', this._down)
	down(): container.observe('touchmove',  this._grab) -- but only if !pinching

	Everything *could* get wrapped up in drag()




	I could set dragging/pinching in down()/drop() and base behavior in drag() on this
	Define double/triple taps to zoomIn/fit, respectively?
	Add iterator widget that responds to swipes (left/right)







	drag() -
		if one finger is touching the screen, drag the element
		if more than one finger is touching the screen, scale the element based on the first two touches
	drop() -
		if > 1 fingers are still touching the screen, do nothing
		if one finger is still touching, zoom the viewer
		if no fingers are touching (1) zoom the viewer if pinching == true and (2) "drop" the slide



*/
if (vs.env.mobile) Event.observe(document, 'dom:loaded', function() {
	$("zfMenuContainer")
		.insert(new Element('DIV',{id:"dragging"}).insert("Dragging"))
		.insert(new Element('DIV',{id:"pinching"}).insert("Pinching"))
		.insert(new Element('DIV',{id:"touches"}).insert("0"));
});


// ----------------------------------------------------------------------------
vs.Viewer.prototype.touchStart = function(event) {
// ----------------------------------------------------------------------------
	if (event.touches.length == 1) {
		this.doEvent("click");
		this.lastScreenX = event.touches[0].lastScreenX;
		this.lastScreenX = event.touches[0].lastScreenY;
	}
};
// ----------------------------------------------------------------------------
vs.Viewer.prototype.touchMove = function(event) {
// ----------------------------------------------------------------------------

	// Set up

	var active_fingers = event.touches.length;

	if (active_fingers > 1 && !this.pinching) {
		this.pinching = true;
		// this.dragging = false;
	} else if (active_fingers == 1 && !this.dragging) {
		this.doEvent("grab", this);
		this.dragging = true;
	}

	event.preventDefault();

	// Do stuff

	if (this.dragging) {

	} else if (this.pinching) {

	}
};
