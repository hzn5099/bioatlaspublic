/**
	zfatlas.widget.Ruler - a variation on Scalebar oriented toward measurement

	Ruler appears in the middle of the screen, is updated onResize, and is
	prefers more divisions.

	@constructor
	@extends	{vs.widget.Scalebar}
*/
zfatlas.widget.Ruler = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.Scalebar);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}			*/	zfatlas.widget.Ruler.prototype.widgetHandle	= "ruler";
/** @type {string}			*/	zfatlas.widget.Ruler.prototype.cssClassName	= "vs-widget vsWidgetRuler";
/** @type {Array.<number>}	*/	zfatlas.widget.Ruler.prototype.divisions	= [10,8,9,7,6,5,4,3,2];
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	@param	{number} tableWidth
	@param	{number} cellWidth
	@return	{boolean}
*/
zfatlas.widget.Ruler.prototype.criteria = function(tableWidth, cellWidth) {
	return tableWidth.between(this.viewer.containerWidth * 0.8, this.viewer.containerWidth) && (cellWidth > 40);
};

// For some reason Closure is "optimizing" this away, so we'll use quotes:
zfatlas.widget.Ruler.prototype['onResize'] = vs.widget.Scalebar.prototype.update;

