/**
	vs.widget.ZoomControl:  A widget providing an interface to the zoom methods of vs.Viewer

	options {
		minimal:		Boolean; creates a pull-down zoom control (size = 1)
		maxSize:		Number (> 1); sets the maximum size of the select box
			Default is 6.
		cssClassName:	String; sets className on FORM wrapper
	}

	A minimal zoom control implies a size of 1 and a different className (cssClassName + "Mini").

	@constructor
	@extends	{vs.ElementWidget}
*/
vs.widget.ZoomControl = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}	*/	vs.widget.ZoomControl.prototype.widgetHandle	= "zoom";
/** @type {string}	*/	vs.widget.ZoomControl.prototype.cssClassName	= "vs-widget vsWidgetZoomControl";
/** @type {number}	*/	vs.widget.ZoomControl.prototype.maxSize			= 6;
/** @type {Element}	*/	vs.widget.ZoomControl.prototype.selectElement;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
//vs.widget.ZoomControl.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	// Create a FORM + SELECT elements
/*
	this.element = new Element('FORM')
		.addClassName(this.cssClassName)
		.insert(this.selectElement = new Element('SELECT', {
			'multiple':	false,
			'disabled':	true
		})).insert(this.fitButton = new Element('BUTTON', {
			'type':		"button",
			'title':	"Click to fit slide in window",
			'disabled':	true
		}).addClassName("vs-control").update("Fit"));

	this.observers.push(
		[ this.selectElement, 'change',    this.onchange.bind(this) ],
		[ this.element,       'mousedown', this.noPropagation       ],
		[ this.element,       'dblclick',  this.noPropagation       ],
		[ this.fitButton,     'click',     this.fit.bind(this)      ]
	);

	if (this.minimized) {
		this.minimized = false;
		this.toggle();
	}
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.toggle = function() {
// ----------------------------------------------------------------------------
	vs.ElementWidget.prototype.toggle.call(this);
	this.viewer.loaded() && this.onLoad();
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
vs.widget.ZoomControl.prototype.fit = function(event) {
// ----------------------------------------------------------------------------
	// Find slide level that fits, switch and center.
	var v = this.viewer,
		s = v.slide,
		zi = v.z,
		c = s.getCenter(zi);

	this.fitButton.blur();
	v.zoomTo(s.getContainingLevel(v.containerWidth, v.containerHeight), c);
	if (v.z == zi)
		v.centerOn(c);
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onchange = function() {
// ----------------------------------------------------------------------------
	 this.selectElement.blur(); // remove focus so accidently hitting up/dn keys doesn't change zoom
	 this.viewer.zoomTo(this.selectElement.selectedIndex, null, this);
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onLoad = function() {
// ----------------------------------------------------------------------------
	// Create the SELECT OPTIONs
	var i,
		slide = this.viewer.slide,
		n = slide.levels.length;

	this.selectElement.size		= this.minimized ? 1 : Math.bound(n, 0, this.maxSize);
	this.selectElement.disabled	= this.fitButton.disabled = !(n > 1);
	this.selectElement.length	= 0; // Truncate options

	// Create new options for each level
	// new Option(text, value, isDefaultSelected, isSelected)
	for (i = 0; i < n; i++)
		this.selectElement.options[i] = new Option(
			Math.truncate(slide.getPower(i), 1) + 'x',
			i, false, i == this.viewer.z
		);
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onUnload =	function() {
	this.selectElement.disabled = true;
	this.fitButton.disabled = true;
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onZoom = function() { this.selectElement.selectedIndex = this.viewer.z };

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onDestroy =	function() { this.selectElement = null };

