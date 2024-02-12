// ----------------------------------------------------------------------------
/**
	@constructor
	@extends {vs.ElementWidget}
*/
vs.widget.TouchZoom = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}		*/	vs.widget.TouchZoom.prototype.cssClassName	= "vsWidgetTouchZoom";
/** @type {Effect.Fade}	*/	vs.widget.TouchZoom.prototype.fadeEffect;
/** @type {Element}		*/	vs.widget.TouchZoom.prototype.notification;

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.TouchZoom.prototype.initialize = function() {
// ----------------------------------------------------------------------------

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
		[zoom_in,  "touchstart", this.zoomIn.bindAsEventListener(this) ],
		[zoom_out, "touchstart", this.zoomOut.bindAsEventListener(this)]
	);
};

// I think the semi-redundant code was intended to display the current power
// regardless of whether or not the zoom actually occured.
// ----------------------------------------------------------------------------
vs.widget.TouchZoom.prototype.onLoad =
vs.widget.TouchZoom.prototype.onZoom = function() {
// ----------------------------------------------------------------------------
	if (this.fadeEffect)
		this.fadeEffect.cancel();
	this.notification
		.update("%.3fx".sprintf(this.viewer.slide.getPower(this.viewer.z)).replace(/\.?0+(?=x)/, ""))
		.setOpacity(1)
		.show();
	this.fadeEffect = new Effect.Fade(this.notification, {'delay': 1.5, 'duration': 0.5});
};

// ----------------------------------------------------------------------------
vs.widget.TouchZoom.prototype.zoomIn = function() {
// ----------------------------------------------------------------------------
	this.viewer.zoomIn();
};

// ----------------------------------------------------------------------------
vs.widget.TouchZoom.prototype.zoomOut = function() {
// ----------------------------------------------------------------------------
	this.viewer.zoomOut();
};

