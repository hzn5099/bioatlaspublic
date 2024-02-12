/**
	vs.widget.Vertscalebar - provides vertical physical dimension reference for virtual slides
*/
vs.widget.Vertscalebar = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/*
	 pxPerMmAt1x	A calibration constant relating pixels to length.
	 minCellHeight	Don't use scale bars with table cell widths (TD) under this pixel size.
	 targetHeight	Try to get a scale bar close to this pixel width.
	 divisions		The possible numbers of scale bar divisions (in prefered order).
	 multiples		The possible unit multiples per division (in prefered order).
	 convert		A hash of unit conversion factors, mm -> ?.
*/
/** @type {string}			*/	vs.widget.Vertscalebar.prototype.widgetHandle	= "vertscalebar";
/** @type {string}			*/	vs.widget.Vertscalebar.prototype.cssClassName	= "vs-widget vsWidgetVertscalebar";
/** @type {number}			*/	vs.widget.Vertscalebar.prototype.pxPerMmAt1x	= 100.74;	// A conversion coefficient relating distance to pixels
/** @type {number}			*/	vs.widget.Vertscalebar.prototype.subdivisions	= 10; // subdivide the first cell by this many
/** @type {Array.<number>}	*/	vs.widget.Vertscalebar.prototype.divisions		= [10,8,9,7,6,5,4,3,2]; // the number of divisions in a scalebar, in order of preference
/** @type {Array.<number>}	*/	vs.widget.Vertscalebar.prototype.multiples		= [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500]; // the multiples used per division, in order of preference
/** @type {Object.<string,number>}	*/
// '\u03bc' is Unicode for the Greek letter mu; the HTML code is '&#956;', which works in the scalebar but not in the 'title' property whereas Unicode does.
					vs.widget.Vertscalebar.prototype.convert		= {'pm':0.000000001, 'nm':0.000001, '\u03bcm':0.001, 'mm':1, 'cm':10, 'm':1000};
/** @type {Element}			*/	vs.widget.Vertscalebar.prototype.error			= new Element('DIV').addClassName('error').insert("Error making scale bar!");
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.Vertscalebar.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.element = new Element('DIV').addClassName(this.cssClassName);

	if (this.minimized) {
		this.minimized = false;
		this.toggle();
	}
};

// ----------------------------------------------------------------------------
/**
	@param	{number} tableHeight
	@param	{number} cellHeight
	@return	{boolean}
*/
vs.widget.Vertscalebar.prototype.criteria = function(tableHeight, cellHeight) {
// ----------------------------------------------------------------------------
	return (tableHeight.between (this.viewer.containerHeight * 0.8, this.viewer.containerHeight) && cellHeight > 40);
};

// ----------------------------------------------------------------------------
vs.widget.Vertscalebar.prototype.update = function() {
	this.element.update(this.toElement());
};

// ----------------------------------------------------------------------------
/** @return	{Element} */
vs.widget.Vertscalebar.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	var unit, d, m, cellHeight,
		zoomlevel			= this.viewer.z,
		power				= this.viewer.slide.getPower(zoomlevel);

	if (power == 0) {
		if (IN_DEVELOPMENT)
			console.warn("[vs.widget.Vertscalebar] Power is zero.");
		return this.error.cloneNode(true);
	}

	// Find an appropriate match for this power
	for (d = 0; d < this.divisions.length; d++) {
		for (unit in this.convert) {
			for (m = 0; m < this.multiples.length; m++) {
				cellHeight = power * this.pxPerMmAt1x * this.convert[unit] * this.multiples[m];
				if (this.criteria(cellHeight * this.divisions[d], cellHeight))
					return vs.widget.Vertscalebar.create(power, unit, this.pxPerMmAt1x * this.convert[unit], this.multiples[m], this.divisions[d], this.subdivisions);
			}
		}
	}

	if (IN_DEVELOPMENT)
		console.warn("[vs.widget.Vertscalebar] Failed to find a suitable scalebar.");

	return this.error.cloneNode(true);
};

// ----------------------------------------------------------------------------
vs.widget.Vertscalebar.prototype.onUnload = function() {
	this.element.update();
};

// ----------------------------------------------------------------------------
vs.widget.Vertscalebar.prototype.onLoad =
vs.widget.Vertscalebar.prototype.onZoom =
vs.widget.Vertscalebar.prototype.update;

// ----------------------------------------------------------------------------
/**
	@param	{number} power
	@param	{string} unit
	@param	{number} toPixels
	@param	{number=} multiple
	@param	{number=} divisions
	@param	{number=} subdivisions
	@return	{Element}
*/
vs.widget.Vertscalebar.create = function(power, unit, toPixels, multiple, divisions, subdivisions) {
// ----------------------------------------------------------------------------
	multiple  = multiple  || 1;
	divisions = divisions || 1;
	var tr1, tr2, tr3, light = true, d,
		getCellHeight = vs.util.integerQuotient(power * toPixels * multiple * divisions, divisions),
		getSubdivisionHeight = subdivisions ? vs.util.integerQuotient(getCellHeight(), subdivisions) : null,
		scaleText = "Scale: %d%s @ %sx".sprintf(
			multiple * divisions,
			unit,
			Math.truncate(power, 2)
		),

		// scalebar DIV wrapper
		scalebar = new Element('DIV', {'title': scaleText})
		// scalebar table
			.insert(new Element('TABLE', {'cellPadding': 0, 'cellSpacing': 0})
				.insert(tb = new Element('TBODY'))
			// scalebar caption
			.insert(new Element('SPAN').addClassName("caption").update(scaleText));

	// 3 columns with unknown rows?
	// Add first row with n-subdivisions
	if (subdivisions) {
		for (d = 0; d < subdivisions; d++, light = !light) {
			var tr = tb.insertRow(d);
			if (d == 0) { 
				tr.insertCell(0);
				tr.cells(0).innerHTML = multiple;
				tr.cells(0).rowSpan = subdivisions;
                        }
			tr.insertCell(1).height = tr.insertCell(2).height = getSubdivisionHeight();
			tr.cells[1].className = light ? "light" : "dark";
			tr.cells[2].className = light ? "dark" : "light";
		}
	}

	// Add remaining rows
	for (d = 0; d < divisions - (subdivisions ? 1 : 0); d++, light = !light) {
		var tr = tb.insertRow(d + subdivisions);
		tr.insertCell(1).height = tr.insertCell(2).height = getCellHeight();
		tr.cells[1].className = light ? "light" : "dark";
		tr.cells[2].className = light ? "dark" : "light";
		tr.insertCell(0).innerHTML = multiple * (d + (subdivisions ? 2 : 1));
	}

	scalebar.style.minHeight = (tr1.cells[d - 1].width * d + 10) + "px";
	return scalebar;
};

