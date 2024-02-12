/**
	vs.widget.Labels - display labels on slide

	@constructor
	@extends	{vs.ViewerWidget}
*/
vs.widget.Labels = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ViewerWidget);

// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
/** @type {string}			*/ vs.widget.Labels.prototype.widgetHandle	= "labels";
/** @type {string}			*/ vs.widget.Labels.prototype.url			= "labels.ajax.php";
/** @type {string}			*/ vs.widget.Labels.prototype.defaultClass	= "centered";
/** @type {Ajax.Request}	*/ vs.widget.Labels.prototype.request		= null;
/** @type {Array}			*/ vs.widget.Labels.prototype.labels		= null;
/** @type {Array}			*/ vs.widget.Labels.prototype.highlighted	= null;
/** @type {number}			*/ vs.widget.Labels.prototype.currentLevel	= 0;
/** @type {number}			*/ vs.widget.Labels.prototype.showLevels	= 0;
/** @type {number}			*/ vs.widget.Labels.prototype.hideLevels	= 0;
/** @type {number}			*/ vs.widget.Labels.prototype.offsetCenterX	= 0;
/** @type {number}			*/ vs.widget.Labels.prototype.offsetCenterY	= 0;

// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
vs.widget.Labels.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	// This will require viewer-indirect-events.js
	// This will require viewer-click-on-drop.js
	// ^^^ we now have this; I'm not sure if indirect events have been merged.
	// this.viewer.suspend();
	// this.viewer.unEvent("click", this.viewer, this.viewer.down);
	// this.viewer.onEvent("click", this, this.clickHandler);
	// this.viewer.unEvent("dblclick", this.viewer, this.viewer.zoom);
	// this.viewer.onEvent("dblclick", this, this.dblClickHandler);
	// Bind ajax* callbacks
	this._ajaxSuccess = this.ajaxSuccess.bind(this);
	this._ajaxFailure = this.ajaxFailure.bind(this);
	this._ajaxTimeout = this.ajaxTimeout.bind(this);

	this.labels = [];
	this.highlighted = [];
};

// ----------------------------------------------------------------------------
/*
vs.widget.Labels.prototype.dblClickHandler = function(event, clickCoords) {
	console.log(arguments);
	this.viewer.zoom(event, clickCoords);
};

// ----------------------------------------------------------------------------
vs.widget.Labels.prototype.clickHandler = function(event, clickCoords) {
// ----------------------------------------------------------------------------
	this.viewer.down(event, clickCoords);
};
*/
// ----------------------------------------------------------------------------
/**
	@param	{Event} event
	@return	{Element|undefined}
*/
vs.widget.Labels.prototype.findElementFromEvent = function(event) {
// ----------------------------------------------------------------------------
	return event.element().ancestors().find(function(e) { return e.readAttribute("vslabel") });
};

// ----------------------------------------------------------------------------
/**
	@param	{Object} label
	@return	{boolean}
*/
vs.widget.Labels.prototype.onCurrentLevel = function(label) {
// ----------------------------------------------------------------------------
	return !!(label['z'] & Math.pow(2, this.viewer.z));
};

// ----------------------------------------------------------------------------
/**
	@param	{Object} label
	@return	{number}
*/
vs.widget.Labels.prototype.getLowestVisibleLevel = function(label) {
// ----------------------------------------------------------------------------
	return Math.log(label['z'].highestOrderBit())/Math.log(2);
};

// ----------------------------------------------------------------------------
vs.widget.Labels.prototype.onDestroy = function() {
// ----------------------------------------------------------------------------
	if (this.request)
		this.request.cancel();
	this.remove(this.labels);

	this.viewer.resume();
};

// ------------------------------------------------------------------------
/**
	@param	{Object|Array} labels
	@return	{vs.widget.Labels}
*/
vs.widget.Labels.prototype.add = function(labels) {
// ------------------------------------------------------------------------
	// coerce an array and add to our labels;
	// should make this uniq(), as to avoid duplicates
	this.labels = this.labels.concat(labels = [].concat(labels));
	this.render(labels, this.currentLevel);
	return this;
};

// ------------------------------------------------------------------------
/**
	@param	{Object|Array} labels
	@return	{vs.widget.Labels}
*/
vs.widget.Labels.prototype.remove = function(labels) {
// ------------------------------------------------------------------------
	// coerce an array
	labels = [].concat(labels);
	// Remove labels from this.labels
	this.labels = Array.prototype.without.apply(this.labels, labels);
	// Remove DOM elements from viewer
	this.viewer.removeFromSlide(this.searchForElements(labels));
	return this;
};

// ------------------------------------------------------------------------
/**
	@param	{Array} labels
	@param	{number} z
*/
vs.widget.Labels.prototype.render = function(labels, z) {
// ------------------------------------------------------------------------
	var vslElements, vslObjects = {}, n = labels.length, lc;
	// Separate label objects into arrays by constructor
	while (n--) {
		if (labels[n]["z"] & z) {
			lc = labels[n]["constructor"] || this.defaultClass || "default";
			if (!(lc in vslObjects))
				vslObjects[lc] = [];
			vslObjects[lc].push(labels[n]);
		}
	}
	// Create label elements, add them to slide
	for (lc in vslObjects) {
		if (lc in vs.label.classes) {
			vslElements = vs.label.classes[lc].create(this.viewer, vslObjects[lc]);
			n = vslElements.length;
			while (n--)
				this.viewer.addToSlide.apply(this.viewer, vslElements[n]);
		}
	}
	this.viewer.appendSlideContent();
	return this;
};

// ------------------------------------------------------------------------
/**
	highlight(); if no argument, unhighlights highlighted labels

	@param	{Array=} labels
	@return	{vs.widget.Labels}
*/
vs.widget.Labels.prototype.highlight = function(labels) {
// ------------------------------------------------------------------------
	var e, n = this.highlighted.length;
	// Unhighlight highlighted labels first (if any)
	while (n--)
		if (e = document.getElementById(vs.label.setId(this.viewer, this.highlighted[n])))
			vs.label.classes[this.highlighted[n]['constructor']].unhighlight(e);
	this.highlighted = [];
	labels = this.highlighted = [].concat(labels || []);
	n = labels.length;
	// Highlight specified labels
	// this is wrong for labels not on the slide; they should be included, too.
	while (n--)
		if (e = document.getElementById(vs.label.setId(this.viewer, labels[n])))
			vs.label.classes[labels[n]['constructor']].highlight(e);
	return this;
};

// ----------------------------------------------------------------------------
/**
	centerOn()

	@param	{Object} label
	@param	{boolean=} zoomIfNotVisible
	@param	{boolean=} smooth
	@param	{Object=} effectOptions
	@return	{vs.widget.Labels}
*/
vs.widget.Labels.prototype.centerOn = function(label, zoomIfNotVisible, smooth, effectOptions) {
// ----------------------------------------------------------------------------
	var viewer = this.viewer,
		coords = [label['x'] + this.offsetCenterX, label['y'] + this.offsetCenterY]
			.multiplyBy(viewer.getRatio());

	if (zoomIfNotVisible && !this.onCurrentLevel(label)) {
		viewer.zoomTo(this.getLowestVisibleLevel(label), coords);
	} else if (smooth) {
		viewer.animatedCenterOn(coords, effectOptions);
	} else {
		viewer.centerOn(coords);
	}

	return this;
};

// ------------------------------------------------------------------------
vs.widget.Labels.prototype.onLoad = function() {
// ------------------------------------------------------------------------
	// this.currentLevel = (Math.pow(2, this.viewer.z) | this.showLevels) & ~this.hideLevels;
	this.request = new Ajax.Request(this.url, {
		'method':		"get",
		'parameters':	{
			"slide_id":	this.viewer.slide.id
		},
		'onSuccess': this._ajaxSuccess,
		'onFailure': this._ajaxFailure,
		'onTimeout': this._ajaxTimeout
	});
};

// ------------------------------------------------------------------------
vs.widget.Labels.prototype.onUnload = function() {
// ------------------------------------------------------------------------
	if (this.request)
		this.request.cancel();
	this.labels.length = 0;
};

// ------------------------------------------------------------------------
/**
	@param	{number=} zf
*/
// ------------------------------------------------------------------------
vs.widget.Labels.prototype.onZoom = function(zf) {
// ------------------------------------------------------------------------
	this.currentLevel = (Math.pow(2, this.viewer.z) | this.showLevels) &~ this.hideLevels;
	this.render(this.labels, this.currentLevel)
		.highlight(this.highlighted);
};

// ------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.widget.Labels.prototype.ajaxSuccess = function(response, headerJSON) {
// ------------------------------------------------------------------------
	var labels;
	try {
		labels = /** @type {Array} */(eval("(" + response.responseText + ")"));
	} catch (err) {
		this.ajaxException(response, err);
	}
	this.labels = labels;
	this.onZoom();
	// this.add(labels);
};

// ------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.widget.Labels.prototype.ajaxFailure = function(response, headerJSON) { };

// ------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{?(Array|Object)} headerJSON
*/
vs.widget.Labels.prototype.ajaxTimeout = function(response, headerJSON) { };

// ------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{Error} error
*/
vs.widget.Labels.prototype.ajaxException = function(response, error) {
// ------------------------------------------------------------------------
	console.error("vs.widget.Labels.ajaxException(): %s".sprintf(error.message));
	// this.destroy();
};

// ------------------------------------------------------------------------
/**
	@param	{Function} criteria
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.search = function(criteria, labels) {
// ----------------------------------------------------------------------------
	labels = labels || this.labels;
	var matches = [], n = labels.length;
	while (n--)
		if (criteria(labels[n])) matches.push(labels[n]);
	return matches;
};

// ----------------------------------------------------------------------------
/**
	searchBy - search general properties

	@param	{string} property
	@param	{*} value
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchBy = function(property, value, labels) {
// ----------------------------------------------------------------------------
	return this.search(function(label){ return label[property] == value }, labels);
};

// ----------------------------------------------------------------------------
/**
	searchById

	@param	{number} id
	@param	{Array=} labels
	@return	{Object|undefined}
*/
vs.widget.Labels.prototype.searchById = function(id, labels) {
// ----------------------------------------------------------------------------
// I think it'd be better to search by both 'id' and 'temp_id'
// Maybe I should just give every label an 'element_id', regardless of actual 'id'
	labels = labels || this.labels; // || []
	var n = labels.length;
	while (n--)
		if (labels[n]['id'] == id || labels[n]['temp_id'] == id)
			return labels[n];
	return;
};

// ----------------------------------------------------------------------------
/**
	searchByElement

	@param	{Element} element
	@param	{Array=} labels
	@return	{Object|undefined}
*/
vs.widget.Labels.prototype.searchByElement = function(element, labels) {
// ----------------------------------------------------------------------------
	var id = vs.label.getId(element),
		results = this.searchBy('id', id, labels);
	if (!results.length) {
		results = this.searchBy('temp_id', id, labels);
	}
	return results.length ? results[0] : void(0);
};

// ----------------------------------------------------------------------------
/**
	searchBySubstring

	@param	{string} substring
	@param	{boolean} includeDefinition
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchBySubstring = function(substring, includeDefinition, labels) {
// ----------------------------------------------------------------------------
	var str = substring.toLowerCase();
	return this.search(function(label) {
		return ~(label['term'] || "").toLowerCase().indexOf(str) || (includeDefinition && label['definition'] && ~label['definition'].stripTags().toLowerCase().indexOf(str));
	}, labels);
};

// ----------------------------------------------------------------------------
/**
	searchByPattern

	@param	{RegExp} pattern
	@param	{boolean} includeDefinition
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchByPattern = function(pattern, includeDefinition, labels) {
// ----------------------------------------------------------------------------
	return this.search(function(label) {
		return (label['term'] || "").match(pattern) || includeDefinition && label['definition'].stripTags().match(pattern);
	}, labels);
};

// ----------------------------------------------------------------------------
/**
	searchByRadius

	@param	{Array} center
	@param	{number} radius
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchByRadius = function(center, radius, labels) {
// ----------------------------------------------------------------------------
// This searches by absolute coords, so the center and radius must be converted.
// I.e.:  vs.labels.searchByRadius( labels, [5490, 2016], radius/viewer.slide.getRatio(viewer.z) );
	return this.search(function(label) {
		return Math.pow(Math.pow(center[0] - label['x'], 2) + Math.pow(center[1] - label['y'], 2), 0.5) < radius;
	}, labels);
};

// ----------------------------------------------------------------------------
/**
	searchByRegion

lowerCoords --> +---+
				|   |
				|   |
				+---+ <-- upperCoords [x,y]

	@param	{Array} lowerCoords
	@param	{Array} upperCoords
	@param	{Array=} labels
	@return	{Array}

*/
vs.widget.Labels.prototype.searchByRegion = function(lowerCoords, upperCoords, labels) {
// ----------------------------------------------------------------------------
	return this.search(function(label) {
		return label['x'] > lowerCoords[0] && label['x'] < upperCoords[0] &&
			   label['y'] > lowerCoords[1] && label['y'] < upperCoords[1];
	}, labels);
};

// ----------------------------------------------------------------------------
/**
	searchByViewport - searches in current viewport (common case of searchByRegion)

	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchByViewport = function(labels) {
// ----------------------------------------------------------------------------
	var viewer = this.viewer;
	return this.searchByRegion(
		[viewer.offsetX, viewer.offsetY].multiplyBy(-Math.pow(viewer.getRatio(),-1)),
		[viewer.containerWidth - viewer.offsetX, viewer.containerHeight - viewer.offsetY].multiplyBy(Math.pow(viewer.getRatio(),-1)),
		labels
	);
};

// ----------------------------------------------------------------------------
/**
	@param	{number} z
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchByMask = function(z, labels) {
// ----------------------------------------------------------------------------
	return this.search(function(label) {
		return label['z'] & z;
	}, labels);
};

// ----------------------------------------------------------------------------
/**
	@param	{number} z
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.searchByLevel = function(z, labels) {
// ----------------------------------------------------------------------------
	return this.searchByMask(Math.pow(2, z), labels);
};

/**
	@param	{Array=} labels
	@return	{Array.<Element>}
*/
vs.widget.Labels.prototype.searchForElements = function(labels) {
// ------------------------------------------------------------------------
	var e,
		n = labels.length,
		elements = [];

	// Collect DOM elements
	if (this.viewer)
		while (n--)
			if (e = document.getElementById(vs.label.setId(this.viewer, labels[n])))
				elements.push(e);

	return elements;
};


// ------------------------------------------------------------------------
// Sorting methods (EXPERIMENTAL)
// ------------------------------------------------------------------------
/**
	@param	{Function} comparison
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.sort = function(comparison, labels) {
// ------------------------------------------------------------------------
	return (labels || this.labels).sort(comparison);
};

// ------------------------------------------------------------------------
/**
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.sortByTerm = function(labels) {
// ------------------------------------------------------------------------
	return this.sort(function(a, b) {
		return a['term'] < b['term'] ? -1 : a['term'] > b['term'] ? 1 : 0;
	}, labels);
};

// ------------------------------------------------------------------------
/**
	@param	{Array} coords
	@param	{Array=} labels
	@return	{Array}
*/
vs.widget.Labels.prototype.sortByDistance = function(coords, labels) {
// ------------------------------------------------------------------------
	var c0 = coords[0], c1 = coords[1];
	return this.sort(function(a, b) {
		var
			b0 = b['x'] - c0, b1 = b['y'] - c1,
			a0 = a['x'] - c0, a1 = a['y'] - c1;
		return a0*a0 + a1*a1 - b0*b0 - b1*b1;
	}, labels);
};

// Use bit masks to show/hide levels
// Mostly useful for "show all" (-1,0), "hide all" (0, -1), and "normal" (0,0)
// ------------------------------------------------------------------------
vs.widget.Labels.prototype.setLevelMask = function(show, hide) {
// ------------------------------------------------------------------------
	var newMask,
		curMask = this.currentLevel;
	this.showLevels = show;
	this.hideLevels = hide;
	this.currentLevel = newMask = (Math.pow(2, this.viewer.z) | (this.showLevels = show)) &~ (this.hideLevels = hide);

/*
	var format = "%%12s %%0%db".sprintf(this.viewer.slide.levels.length);
	console.log("%12s %s".sprintf("", "-".times(this.viewer.slide.levels.length)));
	console.log(format.sprintf("Current", curMask));
	console.log(format.sprintf("New", this.currentLevel));
	console.log(format.sprintf("Adding", newMask &~ curMask));
	console.log(format.sprintf("Removing", curMask &~ newMask));
	var removing = this.searchByMask(curMask &~ newMask);
	console.log("Removing these labels: %s".sprintf(removing.pluck('term').join(', ')));
	console.log("Adding these labels: %s".sprintf(this.searchByMask(newMask &~ curMask).pluck('term').join(', ')));
*/
	// the only thing 'hide' is good for is hiding the current level
	// remove labels in current/not in new
	this.viewer.removeFromSlide(this.searchForElements(this.searchByMask(curMask &~ newMask)));
	// add labels not in current/in new
	return this.render(this.labels, newMask &~ curMask);
};

vs.widget.Labels.prototype.reload = function() {
	this.viewer.removeFromSlide(this.searchForElements(this.labels));
	this.onZoom();
	return this;
};

