/**
	@constructor
	@extends {vs.ElementWidget}
*/
vs.widget.Thumbnail = vs.util.extend(
// ============================================================================
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}			*/	vs.widget.Thumbnail.prototype.widgetHandle		= "thumbnail";
/** @type {string}			*/	vs.widget.Thumbnail.prototype.cssClassName		= "vs-widget vsWidgetThumbnail";
/** @type {number}			*/	vs.widget.Thumbnail.prototype.dragMultiplier	= 2;
/** @type {boolean}			*/	vs.widget.Thumbnail.prototype.showGhostROI		= false;
/** @type {boolean}			*/	vs.widget.Thumbnail.prototype.updateOnDrag		= false;
/** @type {vs.Viewer}		*/	vs.widget.Thumbnail.prototype.thumbnail;
/** @type {vs.ViewerLink}	*/	vs.widget.Thumbnail.prototype.viewerlink;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	// create HTMLElements
	this.element = new Element('DIV')
		.addClassName(this.cssClassName);
	this.control = new Element('DIV', {'title': "Click to toggle thumbnail visibility"})
		.addClassName("vs-widget vs-control vsThumbnailControl")
		.observe("click", this.noPropagation);

	this.thumbnail = new vs.widget.Thumbnail.Viewer;
	this.thumbnail.addWidget(vs.widget.ROI, {relativeTo: this.viewer});
	this.thumbnail.unEvent('dblclick', this.thumbnail, this.thumbnail.zoom);
	this.thumbnail.onEvent('drop', this, this.onThumbnailDrop);
	this.thumbnail.onEvent('grab', this, this.addGhostROI);
	this.thumbnail.onEvent('dblclick', this, this.zoomParent);
	this.thumbnail.dragMultiplier = this.dragMultiplier;

	this.viewerlink = new vs.ViewerLink(this.thumbnail);
	this.viewerlink.zoom = false;

	this.observers.push(
		[this.control, 'dblclick',  this.noPropagation],
		[this.control, 'mousedown', this.noPropagation],
		[this.control, 'mousedown', this.toggle.bind(this)]
	);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.onDrop = function() {
// ----------------------------------------------------------------------------
	if (!this.updateOnDrag)
		this.viewerlink.remove(this.viewer);
	this.align();
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.onGrab = function() {
// ----------------------------------------------------------------------------
	this.viewerlink.add(this.viewer);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.toggle = function() {
// ----------------------------------------------------------------------------
	vs.ElementWidget.prototype.toggle.call(this);
	this.control.toggleClassName("minimized");
};

// ----------------------------------------------------------------------------
/**
	@return	{vs.widget.Thumbnail}
*/
vs.widget.Thumbnail.prototype.align = function() {
// ----------------------------------------------------------------------------
	this.thumbnail.centerOn(
		this.thumbnail.slide.getCoordsFromAbs(
			this.viewer.getCenter(true),
			this.thumbnail.z
	));

	return this;
};

// ----------------------------------------------------------------------------
/**
	@return	{vs.widget.Thumbnail}
*/
vs.widget.Thumbnail.prototype.alignParent = function() {
// ----------------------------------------------------------------------------
	this.viewer.centerOn(
		this.viewer.slide.getCoordsFromAbs(
			this.thumbnail.getCenter(true),
			this.viewer.z
	), this);

	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
	@param	{Array.<number>} clickCoords
*/
vs.widget.Thumbnail.prototype.zoomParent = function(event, clickCoords) {
// ----------------------------------------------------------------------------
	// clickCoords is the slide/level coords of our thumbnail viewer
	// We need to convert this to parent viewer coords

	// I should probably bound this to coords within the slide; otherwise zoomIn w/o coords

	var viewer = this.viewer.focus(),
		coords = clickCoords.multiplyBy(viewer.width/this.thumbnail.width);

	event.shiftKey
		? viewer.zoomOut(coords)
		: viewer.zoomIn(coords);

	this.align();
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.addGhostROI = function() {
// ----------------------------------------------------------------------------
	// WRITE ME
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.onThumbnailDrop = function() {
// ----------------------------------------------------------------------------
	if (!this.updateOnDrag)
		this.alignParent();
	this.viewer.focus();
};

// ----------------------------------------------------------------------------
/**
	@param	{Element=} container
*/
vs.widget.Thumbnail.prototype.onAttach = function(container) {
// ----------------------------------------------------------------------------
	(this.container || container).appendChild(this.element);
	(this.container || container).appendChild(this.control);
	this.thumbnail.attachTo(this.element);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype['onResize'] =
vs.widget.Thumbnail.prototype.onZoom = function() {
// ----------------------------------------------------------------------------
	this.align();
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.onLoad = function() {
// ----------------------------------------------------------------------------
	// Load slide
	this.thumbnail.load(
		this.viewer.slide,
		null,
		this.viewer.getCenter(true),
		null,
		this
	);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.onUnload = function() {
// ----------------------------------------------------------------------------
	this.thumbnail.unload(this);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.prototype.destroy = function() {
// ----------------------------------------------------------------------------
	this.onUnload();
	this.thumbnail.destroy();
	this.thumbnail = null;
};



// ============================================================================
/**
	Should this be named vs.ThumbnailViewer instead?

	@constructor
	@extends {vs.Viewer}
*/
vs.widget.Thumbnail.Viewer = vs.util.extend(
// ============================================================================
// EXTENDS:
	vs.Viewer);

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	load(): This version of load() ignores startzoom and absoluteCoords.

	@param	{vs.VirtualSlide} slide
	@param	{?number=} startzoom
	@param	{Array.<number>=} startpos
	@param	{?boolean=} absoluteCoords
	@param	{Object=} initiator
	@return	{vs.widget.Thumbnail.Viewer}
*/
vs.widget.Thumbnail.Viewer.prototype.load = function(slide, startzoom, startpos, absoluteCoords, initiator) {
// ----------------------------------------------------------------------------
	startzoom = slide.getClosestLevel(this.containerWidth, this.containerHeight);
 	return vs.Viewer.prototype.load.call(this, slide, startzoom, startpos, true, initiator);
};

// ----------------------------------------------------------------------------
vs.widget.Thumbnail.Viewer.prototype.setElementSize = function() {
// ----------------------------------------------------------------------------
	this.elementWidth  = this.width;
	this.elementHeight = this.height;
};

// ============================================================================
/**
	@constructor
	@extends {vs.ElementWidget}
*/
vs.widget.ROI = vs.util.extend(
// ============================================================================
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.cssClassName = "vsWidgetROI";
vs.widget.ROI.prototype.widgetHandle = "roi";
/** @type {vs.Viewer} */
vs.widget.ROI.prototype.relativeTo;
// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.element = new Element('DIV').addClassName(this.cssClassName);
	if (this.relativeTo)
		this.trackViewer(this.relativeTo);
};

// ----------------------------------------------------------------------------
/**
	@param	{vs.Viewer} viewer
*/
vs.widget.ROI.prototype.trackViewer = function(viewer) {
// ----------------------------------------------------------------------------
	this.relativeTo = viewer;
	// set up event listeners on relative viewer here
	viewer.onEvent("load", this, this.update);
	viewer.onEvent("zoom", this, this.update);
	this.update();
};

// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.update = function() {
// ----------------------------------------------------------------------------
	// should check if both are loaded
	var v0 = this.viewer,
		v1 = this.relativeTo,
		e = this.element,
		btw = e.getStyle("borderTopWidth"),
		blw = e.getStyle("borderLeftWidth"),
		w = v0.width  * v1.containerWidth/v1.width,
		h = v0.height * v1.containerHeight/v1.height,
		x = (v0.containerWidth  - w)/2 - (blw.indexOf("px") > 0 ? parseInt(blw, 10) : 0),
		y = (v0.containerHeight - h)/2 - (btw.indexOf("px") > 0 ? parseInt(btw, 10) : 0);

	e.setStyle({
		left:	Math.round(x) + "px",
		top:	Math.round(y) + "px",
		width:	Math.round(w) + "px",
		height:	Math.round(h) + "px"
	});
};

// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.onDestroy = function() {
// ----------------------------------------------------------------------------
	if (this.relativeTo) {
		this.relativeTo.unEvent(this);
	}
};

// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.onLoad = function() {
// ----------------------------------------------------------------------------
	this.element.show();
	this.update();
};

// ----------------------------------------------------------------------------
vs.widget.ROI.prototype.onUnload = function() {
// ----------------------------------------------------------------------------
	this.element.hide();
};

vs.widget.ROI.prototype.onResize =
vs.widget.ROI.prototype.onZoom = function(){ this.update() };
