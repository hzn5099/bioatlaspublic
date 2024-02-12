/**
	vs.widget.AjaxIterator - controls for navigating a list of slides

	options {
		slides:			Required; Array; list of slide ids suitable for use with vs.Viewer.fetch()
		name:			Optional; String; a short, descriptive text
		description:	Optional; String; longer, descriptive text
		ajaxOptions:	Optional; Object; suitable for Prototype's Ajax.Request constructor
	}

	@constructor
	@extends {vs.widget.Iterator}
*/
vs.widget.AjaxIterator = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.Iterator);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type	{Object}	*/	vs.widget.AjaxIterator.prototype.ajaxOptions;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.AjaxIterator.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	vs.widget.Iterator.prototype.initialize.call(this);
	this.ajaxOptions = this.ajaxOptions || {};
};

// ----------------------------------------------------------------------------
/**
	@param	{number=} slide
	@return	{number}
*/
vs.widget.AjaxIterator.prototype.position = function(slide) {
// ----------------------------------------------------------------------------
	return this.slides.indexOf(slide || this.viewer.slide && this.viewer.slide.id);
};

// ----------------------------------------------------------------------------
/**
	@param	{number} i
	@param	{?number=} startzoom
	@param	{Array=} startpos
	@param	{boolean=} absCoords
*/
vs.widget.AjaxIterator.prototype.loadSlide = function(i, startzoom, startpos, absCoords) {
// ----------------------------------------------------------------------------
	this.viewer.fetch(this.slides[i], startzoom, startpos, absCoords, this.ajaxOptions);
};

