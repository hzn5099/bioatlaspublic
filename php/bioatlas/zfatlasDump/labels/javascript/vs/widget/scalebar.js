/**
	vs.widget.Scalebar - provides physical dimension reference for virtual slides

	[ Introduction ]

	Scalebar generates an element containing a table with three rows of cells, the
	top two of which alternate className="light" to be used to alternate their color
	between light/dark, by default.  The third row contains the cumulative sizes of
	the segments' width (like 10,20,30, etc).  Below the table is a SPAN element
	with a className="caption".  This describes the scale used for the scalebar.


	[ Element Layout ]

	<DIV class="vsWidgetScalebar">
		<TABLE>
			<TBODY>
				<TR> <TD class="light/>  <TD/>               <TD class="light/> ... </TR>
				<TR> <TD/>               <TD class="light/>  <TD/>              ... </TR>
				<TR> <TD>  (n*1)  </TD>  <TD>  (n*2)  </TD>  <TD>  (n*3)  </TD> ... </TR>
			</TBODY>
		</TABLE>
		<SPAN class="caption"></SPAN>
	</DIV>


	[ Example ]

	Scale Bar Example:
		[   50|  100|  150]
		Scale: 150mm @ 40x


	"divisions" is the number of parts the scale bar is divided into (3).
	"multiples" is the multiple of units per division (50).

	power * pxPerMmAt1x * units * divisions * multiples

	tableWidth = power * pxPerMmAt1x * units * divisions * multiple
	cellWidth = tableWidth / divisions = power * pxPerMmAt1x * units * multiple

	targetWidth = power * pxPerMmAt1x * units * divisions * nearestMultiple
	nearestMultiple = targetWidth/(power * pxPerMmAt1x * units * divisions)

	To get the number 100.74 px/mm @ 1x, we scanned a slide with a precision etched
	scale (a "stage micrometer") at 40x, opened it in Photoshop, and measured the
	number of pixels per unit of measurement.  So, to know the proper scale to use,
	we only need to know the current power of the displayed slide.

	To make Scalebar flexible, it uses several parameters to generate a scale, the
	most important of which is the target width of the table (this.targetWidth).
	By default it is 200px.

	this.element =

		<div>
			<TABLE>
				<tr> <td>(...n subdivisions)	<td>(...)
				<tr> <td>(...n subdivisions)	<td>(...)
				<tr> <td>(colspan = n)			<td>(...)
			</TABLE>
			<div class="caption"></div>
		</div>


		237px, 15mm @ 0.15669x

		100.74 px/mm @ 1x

		maximum flexibility in design

		toElement();
		vs.widget.Scalebar.create(power, unit, toPixels, multiple, divisions, subdivisions);

	- For "minimal" scalebar, put "Scale:" into 'title'!
	- There's always a chance that the text will be larger than the TD, forcing it to be larger;
	  maybe the text should be wrapped in a DIV with overflow:visible + white-space:pre or something

	@constructor
	@extends	{vs.ElementWidget}
*/
vs.widget.Scalebar = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/*
	 pxPerMmAt1x	A calibration constant relating pixels to length.
	 minCellWidth	Don't use scale bars with table cell widths (TD) under this pixel size.
	 targetWidth	Try to get a scale bar close to this pixel width.
	 divisions		The possible numbers of scale bar divisions (in prefered order).
	 multiples		The possible unit multiples per division (in prefered order).
	 convert		A hash of unit conversion factors, mm -> ?.
*/
/** @type {string}			*/	vs.widget.Scalebar.prototype.widgetHandle	= "scalebar";
/** @type {string}			*/	vs.widget.Scalebar.prototype.cssClassName	= "vs-widget vsWidgetScalebar";
/** @type {number}			*/	vs.widget.Scalebar.prototype.pxPerMmAt1x	= 100.74;	// A conversion coefficient relating distance to pixels
/** @type {number}			*/	vs.widget.Scalebar.prototype.subdivisions	= 10; // subdivide the first cell by this many
/** @type {Array.<number>}	*/	vs.widget.Scalebar.prototype.divisions		= [5, 4, 3, 2, 10, 8, 6, 7, 9]; // the number of divisions in a scalebar, in order of preference
/** @type {Array.<number>}	*/	vs.widget.Scalebar.prototype.multiples		= [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500]; // the multiples used per division, in order of preference
/** @type {Object.<string,number>}	*/
// '\u03bc' is Unicode for the Greek letter mu; the HTML code is '&#956;', which works in the scalebar but not in the 'title' property whereas Unicode does.
								vs.widget.Scalebar.prototype.convert		= {'pm':0.000000001, 'nm':0.000001, '\u03bcm':0.001, 'mm':1, 'cm':10, 'm':1000};
/** @type {Element}			*/	vs.widget.Scalebar.prototype.error			= new Element('DIV').addClassName('error').insert("Error making scale bar!");
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.Scalebar.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.element = new Element('DIV').addClassName(this.cssClassName);

	if (this.minimized) {
		this.minimized = false;
		this.toggle();
	}
};

// ----------------------------------------------------------------------------
// This could also return a score instead of a boolean, and we could sort by score.
// Currently some powers only return a single candidate (out of 594 possiblilities!) (0.31x, 0.16x, 1.25x, 0.63x)
// Of course, on our site we have a relatively small collection of possible powers;
// maybe we should hard-code a few with a dynamic fallback.

// If I want a global(-ish) cache, we could index by power.toExponential(1) (or 2)
/*
	I could rewrite the actual HTMLElement creation into a single method.
	toElement( power, unit, divisions, multiples, subdivisions)

	this[40] = this.toElement(40, "um", 5, 10, 10);
	this[20] = this.toElement(20, "um", 5, 10, 10);
	this[10] = this.toElement(10, "um", 4, 100, 10);
	// ...etc

	if (power == 40)
		return this[40];
	else if (power.between(20,20.1))
		return this[20];
	else if (power.between(10,10.1))
		return this[10];
	else if (power.between(5, 5.1))
		return this[5];
	else
		return vs.widget.Scalebar.toElement.call(this);
*/
/**
	@param	{number} tableWidth
	@param	{number} cellWidth
	@return	{boolean}
*/
vs.widget.Scalebar.prototype.criteria = function(tableWidth, cellWidth) {
// ----------------------------------------------------------------------------
	return (tableWidth.between(160, 240) && cellWidth > 40);
};

// ----------------------------------------------------------------------------
vs.widget.Scalebar.prototype.update = function() {
	this.element.update(this.toElement());
};

// ----------------------------------------------------------------------------
/** @return	{Element} */
vs.widget.Scalebar.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	var unit, d, m, cellWidth,
		zoomlevel			= this.viewer.z,
		power				= this.viewer.slide.getPower(zoomlevel);

	if (power == 0) {
		if (IN_DEVELOPMENT)
			console.warn("[vs.widget.Scalebar] Power is zero.");
		return this.error.cloneNode(true);
	}

	// Find an appropriate match for this power
	for (d = 0; d < this.divisions.length; d++) {
		for (unit in this.convert) {
			for (m = 0; m < this.multiples.length; m++) {
				cellWidth = power * this.pxPerMmAt1x * this.convert[unit] * this.multiples[m];
				if (this.criteria(cellWidth * this.divisions[d], cellWidth))
					return vs.widget.Scalebar.create(power, unit, this.pxPerMmAt1x * this.convert[unit], this.multiples[m], this.divisions[d], this.subdivisions);
			}
		}
	}

	if (IN_DEVELOPMENT)
		console.warn("[vs.widget.Scalebar] Failed to find a suitable scalebar.");

	return this.error.cloneNode(true);
};

// ----------------------------------------------------------------------------
vs.widget.Scalebar.prototype.onUnload = function() {
	this.element.update();
};

// ----------------------------------------------------------------------------
vs.widget.Scalebar.prototype.onLoad =
vs.widget.Scalebar.prototype.onZoom =
vs.widget.Scalebar.prototype.update;

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
vs.widget.Scalebar.create = function(power, unit, toPixels, multiple, divisions, subdivisions) {
// ----------------------------------------------------------------------------
	multiple  = multiple  || 1;
	divisions = divisions || 1;
/*
	target cell width	= power * this.pxPerMmAt1x * this.convert[unit] * multiple
	target table width	= target_cell_width * divisions
	first cell width	= Math.floor(target_cell_width)
*/
	var tr1, tr2, tr3, light = true, d,
		getCellWidth = vs.util.integerQuotient(power * toPixels * multiple * divisions, divisions),
		getSubdivisionWidth = subdivisions ? vs.util.integerQuotient(getCellWidth(), subdivisions) : null,
		scaleText = "Scale: %d%s @ %sx".sprintf(
			multiple * divisions,
			unit,
			Math.truncate(power, 2)
		),

		// scalebar DIV wrapper
		// scalebar = new Element('DIV',{'title':scaleText.replace(/&#956;/,'\u03bc')})
		scalebar = new Element('DIV', {'title': scaleText}).addClassName('scalebarDiv')
		//need ID or class to rotate DIV (can't do span) also needs widget class
		// scalebar table
			.insert(new Element('TABLE', {'cellPadding': 0, 'cellSpacing': 0})
				.insert(new Element('TBODY')
					.insert(tr1 = new Element('TR'))
					.insert(tr2 = new Element('TR'))
					.insert(tr3 = new Element('TR'))
				))
			// scalebar caption
			.insert(new Element('SPAN').addClassName("caption").update(scaleText));

	// Add first cell with n-subdivisions
	if (subdivisions) {
		for (d = 0; d < subdivisions; d++, light = !light) {
			tr1.insertCell(d).width = tr2.insertCell(d).width = getSubdivisionWidth();
			tr1.cells[d].className = light ? "light" : "dark";
			tr2.cells[d].className = light ? "dark" : "light";
		}
		tr3.insertCell(0);
		tr3.cells[0].innerHTML = multiple;
		tr3.cells[0].colSpan = subdivisions;
	}

	// Add remaining cells
	for (d = 0; d < divisions - (subdivisions ? 1 : 0); d++, light = !light) {
		tr1.insertCell(d + subdivisions).width = tr2.insertCell(d + subdivisions).width = getCellWidth();
		tr1.cells[d + subdivisions].className = light ? "light" : "dark";
		tr2.cells[d + subdivisions].className = light ? "dark" : "light";
		tr3.insertCell(tr3.cells.length).innerHTML = multiple * (d + (subdivisions ? 2 : 1));
	}

	// tr3.cells[0].innerHTML += unit;

	scalebar.style.minWidth = (tr1.cells[d - 1].width * d + 10) + "px";
	return scalebar;
};

