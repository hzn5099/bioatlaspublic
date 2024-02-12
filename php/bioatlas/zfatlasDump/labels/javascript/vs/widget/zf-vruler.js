/**
	zfatlas.widget.vRuler - a variation on Scalebar oriented toward measurement

	Vertical Ruler appears in the middle of the screen, is updated onResize, and is
	prefers more divisions.

	@constructor
	@extends	{vs.widget.Scalebar}
*/
zfatlas.widget.vRuler = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.Scalebar);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}			*/	zfatlas.widget.vRuler.prototype.widgetHandle	= "vruler";
/** @type {string}			*/	zfatlas.widget.vRuler.prototype.cssClassName	= "vs-widget vsWidgetVRuler";
/** @type {Array.<number>}	*/	zfatlas.widget.vRuler.prototype.divisions	= [10,8,9,7,6,5,4,3,2];
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	@param	{number} tableWidth
	@param	{number} cellWidth
	@return	{boolean}
*/
zfatlas.widget.vRuler.prototype.criteria = function(tableWidth, cellWidth) {
	return tableWidth.between(this.viewer.containerHeight * 0.8, this.viewer.containerHeight) && (cellWidth > 40);
};

// For some reason Closure is "optimizing" this away, so we'll use quotes:
zfatlas.widget.vRuler.prototype['onResize'] = vs.widget.Scalebar.prototype.update;

