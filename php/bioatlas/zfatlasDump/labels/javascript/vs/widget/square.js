/**
	zfatlas.widget.Square - provides physical dimension reference for virtual slides

	[ Introduction ]

	Scalebar generates an element containing a table with three rows of cells, the
	top two of which alternate className="light" to be used to alternate their color
	between light/dark, by default.  The third row contains the cumulative sizes of
	the segments' width (like 10,20,30, etc).  Below the table is a SPAN element
	with a className="caption".  This describes the scale used for the scalebar.
	Plus a second table vertically and placed next to the horizontal table
	to create a square.

*/
zfatlas.widget.Square = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.Scalebar);

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
/** @type {string}		*/	zfatlas.widget.Square.prototype.widgetHandle	= "square";
/** @type {string}		*/	zfatlas.widget.Square.prototype.cssClassName	= "vs-widget vsWidgetSquare";

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
/** @return	{Element} */
zfatlas.widget.Square.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	var unit, d, m, cellWidth, cellHeight, rul1, rul2,
		zoomlevel			= this.viewer.z,
		power				= this.viewer.slide.getPower(zoomlevel);

	if (power == 0) {
		if (IN_DEVELOPMENT)
			console.warn("[zfatlas.widget.Square] Power is zero.");
		return this.error.cloneNode(true);
	}

        var square = new Element('DIV').addClassName('squareDiv')
        // table to position the 2 scalebars into a square
                .insert(rul1 = new Element('DIV').addClassName('vruler'))
                .insert(rul2 = new Element('DIV').addClassName('hruler'));

	// Find an appropriate match for this power
	var keepd, keepunit, keepm;
	for (d = 0; d < this.divisions.length; d++) {
		for (unit in this.convert) {
			for (m = 0; m < this.multiples.length; m++) {
				cellWidth = power * this.pxPerMmAt1x * this.convert[unit] * this.multiples[m];
				if (this.criteria(cellWidth * this.divisions[d], cellWidth))
				{
					rul2.insert(vs.widget.Scalebar.create(power, unit, this.pxPerMmAt1x * this.convert[unit], this.multiples[m], this.divisions[d], this.subdivisions));
					keepd = d;
					keepunit = unit;
					keepm = m;
					d = this.divisions.length;
					break;
				}
			}
		}
	}
	square.style.minWidth = "160px";
	square.style.minHeigth = "20px";

	rul1.insert(createVertScalebar(power, keepunit, this.pxPerMmAt1x * this.convert[keepunit], this.multiples[keepm], 1, this.subdivisions));

	// how to check that have a ruler?
        return square;
};

// For some reason Closure is "optimizing" this away, so we'll use quotes:
zfatlas.widget.Square.prototype['onResize'] = vs.widget.Scalebar.prototype.update;

var createVertScalebar = function(power, unit, toPixels, multiple, divisions, subdivisions) {
        multiple  = multiple  || 1;
        divisions = divisions || 1;
        var tb, tr, light = true, d,
                getCellHeight = vs.util.integerQuotient(power * toPixels * multiple * divisions, divisions),
                getSubdivisionHeight = subdivisions ? vs.util.integerQuotient(getCellHeight(), subdivisions) : null,
                scaleText = "Scale: %d%s @ %sx".sprintf(
                        multiple * divisions,
                        unit,
                        Math.truncate(power, 2)
                ),

                // scalebar DIV wrapper
                vscalebar = new Element('DIV', {'title': scaleText})
                // scalebar table
                        .insert(new Element('TABLE', {'cellPadding': 0, 'cellSpacing': 0})
                                .insert(tb = new Element('TBODY')));
                        // scalebar caption
                        // .insert(new Element('SPAN').addClassName("caption").update(scaleText));

	// columns and rows reversed from horizontal ruler
	// put rows without subdivisions first
        for (d = 0; d < divisions - (subdivisions ? 1 : 0); d++, light = !light) {
                tr = tb.insertRow(d);
                tr.insertCell(0).height = tr.insertCell(1).height = tr.insertCell(2).height = getCellHeight();
                tr.cells[0].width = tr.cells[1].width = tr.cells[2].width = "10";
                tr.cells[1].className = light ? "light" : "dark";
                tr.cells[2].className = light ? "dark" : "light";
        }

        if (subdivisions) {
		var subH = getSubdivisionHeight();
		var offset = divisions - 1;
                for (d = 0; d < subdivisions; d++, light = !light) {
                        tr = tb.insertRow(d + offset);
                        tr.insertCell(0).height = tr.insertCell(1).height = tr.insertCell(2).height = getSubdivisionHeight();
			tr.cells[0].width = tr.cells[1].width = tr.cells[2].width = "10";
                        tr.cells[1].className = light ? "light" : "dark";
                        tr.cells[2].className = light ? "dark" : "light";
                }
        }

        vscalebar.style.minHeight = (tb.rows[d - 1].cells[1].height * d + 10) + "px";
        return vscalebar;
};

