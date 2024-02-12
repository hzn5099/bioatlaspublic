/**
	@constructor
	@extends {vs.Viewer}
*/
vs.TouchViewer = vs.util.extend(vs.Viewer);
// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
vs.TouchViewer.prototype.dragMultiplier = 1.5;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	viewer.load() - Loads a slide, with optional position info

	@param	{vs.VirtualSlide} slide
	@param	{?number=} startzoom
	@param	{Array.<number>=} startpos
	@param	{?boolean=} absoluteCoords
	@param	{Object=} initiator
	@return	{vs.TouchViewer}
*/
vs.TouchViewer.prototype.load = function(slide, startzoom, startpos, absoluteCoords, initiator) {
// ----------------------------------------------------------------------------

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
	this.setZoom(startzoom)
	|| this.setZoom(slide.getContainingLevel(this.containerWidth, this.containerHeight));

	this.element = this.createElement(); // do this after setZoom so that setElementSize can have access to this.z
	this.offsetX =
	this.offsetY = 0; // these need to be zero before calling setCenter (or setPosition) on load

	// Set initial position
	startpos = startpos
		? absoluteCoords
			? slide.getCoordsFromAbs(startpos, this.z)
			: startpos
		: slide.getCenter(this.z);

	this.setCenter(startpos);

	// Attach event listeners and set background color to match slide
	this.container
		.observe('touchstart', this._onMouseDown)
		.style.backgroundColor = slide.bgColor;

	// Execute "load" events, update tiles, and append slide content
	return this.doEvent("load", initiator, slide, startzoom, startpos)
		.updateTiles()
		.appendSlideContent();
};
// ----------------------------------------------------------------------------
/**
	@param	{Object=} initiator
	@return	{vs.TouchViewer}
*/
vs.TouchViewer.prototype.unload = function(initiator) {
// ----------------------------------------------------------------------------
	if (this.slide) {
		// Fire onUnload events first, *before* unloading the element.
		this.doEvent("unload", initiator);

		if (this.container) {
			this.container.stopObserving('touchstart', this._onMouseDown);
			if (this.element)
				this.container.removeChild(this.element);
			this.container.style.backgroundColor = vs.VirtualSlide.prototype.bgColor;
		}
		this.slide = this.element = null;
	}
	return this;
};

// ----------------------------------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
vs.TouchViewer.prototype.onMouseDown = function(event) { // onTouchStart
// ----------------------------------------------------------------------------
	event.preventDefault();
	document.observe('touchend',  this._drop);
	// this.doEvent("down", null, event, this.getClickCoords(event));
	this.doEvent("down", null, event, [0,0]);
};

/**
	@param	{Event} event
	@param	{Array} clickCoords
*/
vs.TouchViewer.prototype.down = function(event, clickCoords) { // onTouchStart
// ----------------------------------------------------------------------------
	event.preventDefault();

	// These store the previous event.screen* values for movement in drag().
	this.lastScreenX = event.touches[0].screenX;
	this.lastScreenY = event.touches[0].screenY;

	document
		.observe('touchmove', this._grab)
		.observe('touchmove', this._drag);
};
// ----------------------------------------------------------------------------
vs.TouchViewer.prototype.grab = function() { // onTouchMove (but only the first one following down())
// ----------------------------------------------------------------------------
	document.stopObserving('touchmove', this._grab);
	this.dragging = true;
	this.doEvent("grab", this);
};
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
vs.TouchViewer.prototype.drop = function(event) { // onTouchEnd
// ----------------------------------------------------------------------------
	document
		.stopObserving('touchmove', this._grab)
		.stopObserving('touchmove', this._drag)
		.stopObserving('touchend',  this._drop);

	if (this.dragging)
		this.refresh().doEvent("drop").dragging = false;
	else
		this.doEvent("click", this, event, this.getClickCoords(event));
};
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
vs.TouchViewer.prototype.drag = function(event) { // onTouchMove
// ----------------------------------------------------------------------------
	event.preventDefault();

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
};

