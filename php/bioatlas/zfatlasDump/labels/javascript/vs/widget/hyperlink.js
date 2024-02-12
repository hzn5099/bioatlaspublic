/*
	vs.widget.Hyperlink - generates a link to the current slide and position

	options {
		baseURL:		String; URL including pathname (i.e., "/viewSlide.php")
		getURL:			Function; should return string suitable for targetURL
	}

	NOTE:  To allow clicking on a link without following it, use event.stop().
*/
// ============================================================================
/**
	@constructor
	@extends	{vs.ViewerWidget}
*/
vs.widget.Hyperlink = vs.util.extend(
// ============================================================================
// EXTENDS:
	vs.ViewerWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string} */	vs.widget.Hyperlink.prototype.widgetHandle	= "hyperlink";
/** @type {string} */	vs.widget.Hyperlink.prototype.baseURL		= window.location.protocol + "//" + window.location.host + window.location.pathname;
/** @type {string} */	vs.widget.Hyperlink.prototype.targetURL		= "";
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	@return	{string}
*/
vs.widget.Hyperlink.prototype.getURL = function() {
// ----------------------------------------------------------------------------
	return [
		this.baseURL,
		"?s=", this.viewer.slide.id,
		"&z=", this.viewer.z,
		"&c=", this.viewer.getCenter(true).toString()
	].join("");
};

// ----------------------------------------------------------------------------
vs.widget.Hyperlink.prototype.update = function() {
// ----------------------------------------------------------------------------
	this.targetURL = this.getURL();
};

// ----------------------------------------------------------------------------
vs.widget.Hyperlink.prototype.onLoad =
vs.widget.Hyperlink.prototype.onDrop =
vs.widget.Hyperlink.prototype.onZoom = function(){ this.update() };

