/**
	zfatlas.widget.Labels - zfatlas-specific label behavior

	@constructor
	@extends {vs.widget.Labels}
*/
zfatlas.widget.Labels = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.Labels);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}	*/	zfatlas.widget.Labels.prototype.cssClassName = "zf-widget-labels";
/** @type {string}	*/	zfatlas.widget.Labels.prototype.url			= "labels.ajax.php";
/** @type {boolean}	*/	zfatlas.widget.Labels.prototype.visible		= true;
/** @type {Element}	*/	zfatlas.widget.Labels.prototype.container	= null;
/** @type {Element}	*/	zfatlas.widget.Labels.prototype.element		= null;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	@param	{number} m
*/
// this is all wrong, probably setLevelMask in parent, too.
zfatlas.widget.Labels.prototype.setLevelMaskMode = function(m) {
// ----------------------------------------------------------------------------
	var z = Math.pow(2, this.viewer.z),
		y = 0, n = 0;

	switch (this.levelMaskMode = m) {
		// all
		case 1: y = -1; break;
		// more (one either side of current)
		case 2: y = z<<1 | z | z>>1;
				break;
		// none
		case 4: n = -1;
	}
	this.setLevelMask(y, n);
};

// ----------------------------------------------------------------------------
zfatlas.widget.Labels.prototype.initialize = function() {
// ----------------------------------------------------------------------------

	vs.widget.Labels.prototype.initialize.call(this);

	this.viewer.onEvent("click", this, this.clickHandler);

	this.element = new Element('DIV').addClassName(this.cssClassName)
		.insert(new Element('DIV', {'title': "Close"}).addClassName('close')
			// WinXP doesn't seem to have the Unicode character for Multiplication, but &times; works.
			// .insert("&#x2715;") // Multiplication "X" (as close symbol)
			.update("&times;")
			.observe("mousedown", this.hideDefinition.bind(this)))
		.insert(new Element('H2'))
		.insert(new Element('DIV').addClassName('content-wrapper'))
		.observe("mousedown", vs.ElementWidget.prototype.noPropagation)
		.observe("dblclick", vs.ElementWidget.prototype.noPropagation);
};

// ----------------------------------------------------------------------------
zfatlas.widget.Labels.prototype.hideDefinition = function() {
// ----------------------------------------------------------------------------
	var labelElement = this.element.up(".vsLabel");
	if (labelElement) {
		labelElement.removeClassName("withDefinition");
	}
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
	@param	{Array} clickCoords
*/
zfatlas.widget.Labels.prototype.clickHandler = function(event, clickCoords) {
// ----------------------------------------------------------------------------
	var label,
		target = this.findElementFromEvent(event),
		element = this.element,
		margin = {
			top:	50,
			right:	10,
			bottom:	50,
			left:	65
		};

	if (target && !target.hasClassName("withDefinition")) {
		label = this.searchByElement(target);
		var r = this.viewer.getRatio(),
			viewer_top = -this.viewer.offsetY,
			viewer_bottom = this.viewer.containerHeight + viewer_top,
			viewer_left = -this.viewer.offsetX,
			viewer_right = this.viewer.containerWidth + viewer_left,
			label_x = label['x'] * r,
			label_y = label['y'] * r;

		if (label) {
			this.hideDefinition();

			var heading = element.select("H2")[0],
				content = element.select(".content-wrapper")[0].update();

			if (label["term"]) {
				heading.writeAttribute("className", "term").update(label['term']);
				content.insert(new Element('P')
					.addClassName('definition')
					.insert(label["definition"] || "<i>No definition available.</i>")
				);

				if (label['ontology_id'] && label['ontology_id'].substring(0,4) == 'ZFA:')
					content.insert(new Element('P').addClassName("zfin").insert('Learn more at <a href="http://zfin.org/action/ontology/term-detail/%s" target="zfin">ZFIN</a>.'.sprintf(label['ontology_id'])));

			} else {
				heading.writeAttribute("className", "annotation").update("Annotation");
			}

			if (label['annotation'])
				content.insert(new Element('P').addClassName('annotation').insert(label['annotation']));

			if (label['orig_author'])
				content.insert(new Element('P').addClassName("author").insert("Label added by " + label['orig_author']));

			target.addClassName("withDefinition");
			target.select(".label")[0].insert(element);

			// Move def into view, if necessary
			var def_width = element.offsetWidth,
				def_height = element.offsetHeight,
				offset = element.cumulativeOffset().relativeTo(this.viewer.container.cumulativeOffset()),
				moveBy = [0, 0];
			if (offset.left + def_width + margin.right > this.viewer.containerWidth)
				moveBy[0] = this.viewer.containerWidth - (offset.left + def_width + margin.right);
			if (offset.top + def_height + margin.bottom > this.viewer.containerHeight)
				moveBy[1] = this.viewer.containerHeight - (offset.top + def_height + margin.bottom);
			if (offset.left - margin.left < 0)
				moveBy[0] = -offset.left + margin.left;
			if (offset.top - margin.top < 0)
				moveBy[1] = -offset.top + margin.top;
			this.viewer.animatedMoveBy(moveBy, this, {duration: 0.5, transition: Effect.Transitions.easeOut });

		}
	} else {
		// this.viewer.down(event, clickCoords);
	}
};

// ----------------------------------------------------------------------------
zfatlas.widget.Labels.prototype.onAttach = function() {
// ----------------------------------------------------------------------------
	this.viewer.container.addClassName("vsLabelHover");
};

// ----------------------------------------------------------------------------
zfatlas.widget.Labels.prototype.onLoad = function() {
// ----------------------------------------------------------------------------
	vs.widget.Labels.prototype.onLoad.call(this);
};

// ----------------------------------------------------------------------------
/**
	@param	{number=} zf
*/
zfatlas.widget.Labels.prototype.onZoom  = function(zf) {
// ----------------------------------------------------------------------------
	this.hideDefinition();
	this.setLevelMaskMode(this.levelMaskMode);
	// vs.widget.Labels.prototype.onZoom.call(this, zf);
};

