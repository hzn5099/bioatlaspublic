/**
	@constructor
	@extends {vs.widget.AjaxIterator}
*/
zfatlas.widget.Iterator = vs.util.extend(
// ----------------------------------------------------------------------------
	// EXTENDS:
	vs.widget.AjaxIterator);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string} */
zfatlas.widget.Iterator.prototype.plane	= "";  // sagittal, coronal, transverse

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
zfatlas.widget.Iterator.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	// Call superclass method
	vs.widget.AjaxIterator.prototype.initialize.call(this);
	// this.viewerAjaxSuccess() will be called when viewer.fetch()'s Ajax.Request returns
	this.ajaxOptions['onSuccess'] = this.viewerAjaxSuccess.bind(this);
};

/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
// ----------------------------------------------------------------------------
zfatlas.widget.Iterator.prototype.viewerAjaxSuccess = function(response, headerJSON) {
// ----------------------------------------------------------------------------
	var slide;
	try {
		slide = new vs.VirtualSlide(/** @type {Object} */(eval("(" + response.responseText + ")")));
		this.loadSlide(slide);
	} catch(e) {
		console.error("[zfatlas.widget.Iterator]; ajaxSuccess(): error evaling response: %s".sprintf(e.message));
	}

};

// ----------------------------------------------------------------------------
/**
	@param {vs.VirtualSlide|number} slide
	@param {?number=} startzoom
	@param {Array.<number>=} startpos
	@param {boolean=} absCoords
*/
zfatlas.widget.Iterator.prototype.loadSlide = function(slide, startzoom, startpos, absCoords) {
// ----------------------------------------------------------------------------
	// This bit lets us use this method as normal AjaxIterator or as Viewer-style .load().
	if (typeof slide == "number") {
		this.viewer.fetch(this.slides[slide], startzoom, startpos, absCoords, this.ajaxOptions);
		return;
	}

	var alreadyHasSlide = this.viewer.loaded(),
		inAtlas = this.slides.indexOf(slide.id) > -1,
		continuity = inAtlas && alreadyHasSlide && this.slides.indexOf(this.viewer.slide.id) > -1,
		vw = this.viewer.containerWidth,
		vh = this.viewer.containerHeight;

	// startzoom
	if (!slide.isValidLevel(startzoom)) {
		if (continuity)
			startzoom = slide.getNearestLevelByPower(this.viewer.slide.getPower(this.viewer.z));
		else if (inAtlas)
			startzoom = slide.getContainingLevel(vw, vh);
	}

	// startpos
	if (!startpos) {
		if (continuity) {
			var currentpos = this.viewer.getCenter(true);
			startpos = [
				currentpos[0] * slide.levels[startzoom][0]/this.viewer.slide.levels[this.viewer.z][0],
				currentpos[1] * slide.levels[startzoom][1]/this.viewer.slide.levels[this.viewer.z][1]
			];
			absCoords = continuity; // true

			switch(this.plane.toLowerCase()) {
			// ----------------------------------------------------------------
				case "coronal": // left/middle
					startpos[0] = currentpos[0]; break;
			// ----------------------------------------------------------------
				case "transverse": // center/top
					startpos[1] = currentpos[1]; break;
			// ----------------------------------------------------------------
				case "sagittal": // left/top
				case "saggital": // (common spelling mistake)
					startpos = currentpos;
			}

		} else if (inAtlas) {
			if (!slide.isValidLevel(startzoom)) {
				startzoom = slide.getContainingLevel(vw, vh);
				startzoom = startzoom == -1
					? slide.getLowestLevel()
					: startzoom;
			}

			absCoords = continuity; // false
			startpos = slide.getCenter(startzoom);

			switch(this.plane.toLowerCase()) {
			// ----------------------------------------------------------------
				case "coronal": // Left/middle
					startpos[0] = Math.min(vw >> 1, startpos[0]); break; // n >> 1 == Math.floor(n/2)
			// ----------------------------------------------------------------
				case "transverse": // Center/top
					startpos[1] = Math.min(vh >> 1, startpos[1]); break;
			// ----------------------------------------------------------------
				case "sagittal": // Left/top
				case "saggital": // (common spelling mistake)
				default: startpos = [
						Math.min(vw >> 1, startpos[0]),
						Math.min(vh >> 1, startpos[1])
					];
			// ----------------------------------------------------------------
			}
		}
	}

	// Load slide with calculated values
	this.viewer.load(slide, startzoom, startpos, absCoords, this);
};

// ----------------------------------------------------------------------------
/**
	@param	{Object} series
	@return	{zfatlas.widget.Iterator}
*/
zfatlas.widget.Iterator.prototype.setSeries = function(series) {
// ----------------------------------------------------------------------------
	Object.extend(vs.widget.AjaxIterator.prototype.setSeries.apply(this, arguments), {
		plane: series.plane || ""
	});
};
