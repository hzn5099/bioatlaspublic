/**
	vs.widget.Iterator - controls for navigating a list of slides

	options {
		slides:			Required; Array; instances of vs.VirtualSlides
		name:			Optional; String; a short, descriptive text
		description:	Optional; String; longer, descriptive text
	}

	@constructor
	@extends {vs.ViewerWidget}
*/
vs.widget.Iterator = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ViewerWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}	*/	vs.widget.Iterator.prototype.widgetHandle	= "iterator";
/** @type {number}	*/	vs.widget.Iterator.prototype.id;
/** @type {string}	*/	vs.widget.Iterator.prototype.name			= "";
/** @type {string}	*/	vs.widget.Iterator.prototype.description	= "";
/** @type {Array}	*/	vs.widget.Iterator.prototype.slides;
/** @type {Object}	*/	vs.widget.Iterator.prototype.series; // normally not set; used to pass series via addWidget options
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.Iterator.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.setSeries(this.series || {});
	delete this.series;
};

// ----------------------------------------------------------------------------
/**
	@param	{vs.VirtualSlide=} slide
	@return	{number}
*/
vs.widget.Iterator.prototype.position = function(slide) {
// ----------------------------------------------------------------------------
	return (this.slides || []).indexOf(slide || this.viewer.slide);
};

// ----------------------------------------------------------------------------
/**
	iterator.go(); move absolutely

	@param	{number} i
	@return	{boolean}
*/
vs.widget.Iterator.prototype.go = function(i) {
// ----------------------------------------------------------------------------
	var isValid = (i >= 0 && i < this.slides.length && i != this.position());

	isValid && this.loadSlide(i);

	return isValid;
};

// ----------------------------------------------------------------------------
/**
	iterator.skip(); move relatively

	@param	{number} n
	@return	{boolean}
*/
// ----------------------------------------------------------------------------
vs.widget.Iterator.prototype.skip = function(n) {
// ----------------------------------------------------------------------------
	var current = this.position();

	return (current > -1) && this.go(current + n);
};

// ----------------------------------------------------------------------------
/**
	@param	{number} i
	@param	{number=} startzoom
	@param	{Array.<number>=} startpos
	@param	{boolean=} absCoords
	@return	{vs.widget.Iterator}
*/
vs.widget.Iterator.prototype.loadSlide = function(i, startzoom, startpos, absCoords) {
// ----------------------------------------------------------------------------
	this.viewer.load(this.slides[i], startzoom, startpos, absCoords);

	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{Object} series
	@return	{vs.widget.Iterator}
*/
vs.widget.Iterator.prototype.setSeries = function(series) {
// ----------------------------------------------------------------------------
	return Object.extend(this, vs.env.PropertyMap({
		id: null,
		name: "",
		description: "",
		slides: []
	}, series));
};

// ----------------------------------------------------------------------------
/**
	@param	{Object} series
	@param	{number=} i
	@param	{number=} startzoom
	@param	{number=} startpos
	@param	{boolean=} absCoords
	@return	{vs.widget.Iterator}
*/
vs.widget.Iterator.prototype.loadSeries = function(series, i, startzoom, startpos, absCoords) {
// ----------------------------------------------------------------------------
	return this.setSeries(series).loadSlide(i || 0, startzoom, startpos, absCoords);
};

// ----------------------------------------------------------------------------
/** @return	{boolean} */
vs.widget.Iterator.prototype.next = function() { return this.skip(1) };

// ----------------------------------------------------------------------------
/** @return	{boolean} */
vs.widget.Iterator.prototype.previous = function() { return this.skip(-1) };

// ----------------------------------------------------------------------------
/** @return	{boolean} */
vs.widget.Iterator.prototype.first = function() { return this.go(0) };

// ----------------------------------------------------------------------------
/** @return	{boolean} */
vs.widget.Iterator.prototype.last = function() { return this.go(this.slides.length - 1) };

// ----------------------------------------------------------------------------
// KEY BINDINGS
// ----------------------------------------------------------------------------
/*
	Left arrow = previous
	Right arrow = next
	Ctrl + left arrow = first
	Ctrl + right arrow = last
*/
// ----------------------------------------------------------------------------
vs.widget.Iterator.keyBindings = (function() {
// ----------------------------------------------------------------------------

	function getIterator() {
		var vsv = vs.Viewer.currentViewer;
		return vsv ? vsv.widgets['iterator'] : void(0);
	}

	return new vs.KeyBindingGroup({
		'Left arrow: 37': function (event, modMask) { var i = getIterator(); if (i) { if (!modMask) i.previous(); else if (modMask == vs.Keys.CTRL) { event.stop(); i.first() }} },
		'Right arrow: 39': function(event, modMask) { var i = getIterator(); if (i) { if (!modMask) i.next(); else if (modMask == vs.Keys.CTRL) { event.stop(); i.last() }} }
	});

})();

// Add to default/viewer context
// vs.Viewer.keys.addGroup(vs.widget.Iterator.keyBindings);
