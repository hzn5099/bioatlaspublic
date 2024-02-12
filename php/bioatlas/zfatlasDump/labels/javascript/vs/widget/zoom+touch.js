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
/** @type {string}	*/	vs.widget.ZoomControl.prototype.cssClassName	= vs.env.isTouchDevice ? "vsWidgetZoomTouch" : "vsWidgetZoomControl";
/** @type {boolean}	*/	vs.widget.ZoomControl.prototype.minimal			= false;
/** @type {number}	*/	vs.widget.ZoomControl.prototype.maxSize			= 6;
/** @type {Element}	*/	vs.widget.ZoomControl.prototype.selectElement;
// For touch version:
/** @type {Effect.Fade}	*/	vs.widget.ZoomControl.prototype.fadeEffect;
/** @type {Element}		*/	vs.widget.ZoomControl.prototype.notification;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.initialize = function() {
// ----------------------------------------------------------------------------

	// ------------------------------------------------------------------------
	if (vs.env.isTouchDevice) {
	// ------------------------------------------------------------------------
		var zoom_in  = new Element('DIV').addClassName("plus" ).insert(new Element('SPAN').addClassName("text").insert("+")),
			zoom_out = new Element('DIV').addClassName("minus").insert(new Element('SPAN').addClassName("text").insert("&minus;"));

		this.notification = new Element('DIV').addClassName("notification").hide();

		this.element = new Element('DIV')
			.addClassName(this.cssClassName)
			.insert(new Element('DIV').addClassName("wrapper")
				.insert(new Element('DIV').addClassName("buttons") // &minus; is different than "-"; it should be the same width/vertical alignment as "+"
					.insert(zoom_in)
					.insert(zoom_out))
				.insert(this.notification)
			);

		this.observers.push(
			[zoom_in,  "touchstart", this.zoomIn.bindAsEventListener(this)],
			[zoom_out, "touchstart", this.zoomOut.bindAsEventListener(this)]
		);

	// ------------------------------------------------------------------------
	} else {
	// ------------------------------------------------------------------------
		// Create a FORM + SELECT elements
		this.element = new Element('FORM')
			.addClassName(this.cssClassName + (this.minimal ? "Mini" : ""))
			.insert(this.selectElement = new Element('SELECT', {
				'multiple':	false,
				'disabled':	true
			})).insert(this.fitButton = new Element('BUTTON', {
				'type':		"button",
				'title':	"Click to fit slide in window",
				'disabled':	true
			}).update("Fit"));

		this.observers.push(
			[this.selectElement, 'change',    this.onchange.bind(this)],
			[this.element,       'mousedown', this.noPropagation      ],
			[this.element,       'dblclick',  this.noPropagation      ],
			[this.fitButton,     'click',     this.fit.bind(this)     ]
		);
	}
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.minimize = function() {
// ----------------------------------------------------------------------------
	this.element.className = this.cssClassName + "Mini";
	this.minimal = true;
	this.viewer.loaded() && this.onLoad();
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.maximize = function() {
// ----------------------------------------------------------------------------
	this.element.className = this.cssClassName;
	this.minimal = false;
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
	if (vs.env.isTouchDevice) {

		this.showCurrentPower();

	} else {
		// Create the SELECT OPTIONs
		var i,
			select = this.selectElement,
			slide = this.viewer.slide,
			n = slide.levels.length;

		select.size		= this.minimal ? 1 : Math.bound(n, 0, this.maxSize);
		select.disabled	= this.fitButton.disabled = !(n > 1);
		select.length	= 0; // Truncate options

		// Create new options for each level
		// new Option(text, value, isDefaultSelected, isSelected)
		for (i = 0; i < n; i++)
			select.options[i] = new Option(
				Math.truncate(slide.getPower(i),1) + 'x',
				i, false, i == this.viewer.z
			);
	}
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.zoomIn = function() {
// ----------------------------------------------------------------------------
	this.viewer.zoomIn(null, this);
	this.showCurrentPower();
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.zoomOut = function() {
// ----------------------------------------------------------------------------
	this.viewer.zoomOut(null, this);
	this.showCurrentPower();
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.showCurrentPower = function() {
// ----------------------------------------------------------------------------
	if (this.fadeEffect)
		this.fadeEffect.cancel();

	this.notification
		.update("%.3fx".sprintf(this.viewer.slide.getPower(this.viewer.z)).replace(/\.?0+(?=x)/,""))
		.setOpacity(1)
		.show();
	this.fadeEffect = new Effect.Fade(this.notification, {'delay': 1.5,'duration': 0.5});
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onUnload =	function() {
// ----------------------------------------------------------------------------
	if (!vs.env.isTouchDevice)
		this.selectElement.disabled = this.fitButton.disabled = true;
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onZoom = function() {
// ----------------------------------------------------------------------------
	if (vs.env.isTouchDevice)
		this.showCurrentPower();
	else
		this.selectElement.selectedIndex = this.viewer.z;
};

// ----------------------------------------------------------------------------
vs.widget.ZoomControl.prototype.onDestroy =	function() { this.selectElement = null };

