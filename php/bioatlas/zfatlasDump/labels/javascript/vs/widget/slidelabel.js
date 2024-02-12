/**
	vs.widget.SlideLabel - Displays text describing the current slide

	To do:

		- Determine best design for easy subclassing
		- Could consider adding a toString or toText method for widget subclasses
		  and having this widget iterate over them, concatentating results.  Or
		  taking a list of widgets to check.  At any rate, to??? would be a
		  standard method.
		- Some kind of templating system with pre-defined/auto-defined values
		  might work nicely.
		- Could rename this to (Slide)Metadata if it sounds too similar to the other
		  kind of slide label.

		  <div class="vsSlideLabel">
		  	<div class="title"><a>slide.title</a></div>
		  	<div class="description">slide.description</div>
		  </div>

	@constructor
	@extends {vs.ElementWidget}
*/
vs.widget.SlideLabel = vs.util.extend(
// ============================================================================
// EXTENDS:
	vs.ElementWidget);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}	*/	vs.widget.SlideLabel.prototype.widgetHandle		= "slidelabel";
/** @type {string}	*/	vs.widget.SlideLabel.prototype.cssClassName		= "vs-widget vsSlideLabel";
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.widget.SlideLabel.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.element = new Element('DIV')
		.addClassName(this.cssClassName)
		.observe('mousedown',this.noPropagation)
		.observe('dblclick', this.noPropagation)
		.insert(new Element('DIV').addClassName("vs-control title").insert(
			this.slideTitle = new Element('A', {title: "Click to toggle slide description"})))
		.insert(
			this.slideDetail = new Element('DIV').addClassName("description"))

	this.observers.push(
		vs.env.isTouchDevice
		? [this.element, "touchstart", this.toggle.bindAsEventListener(this)]
		: [this.slideTitle, "click", this.toggle.bindAsEventListener(this)]
	);

	if (this.minimized) {
		this.minimized = false;
		this.toggle();
	}
};

// ----------------------------------------------------------------------------
vs.widget.SlideLabel.prototype.onLoad = function(slide) {
// ----------------------------------------------------------------------------
	this.slideTitle.update(slide.title
		|| '<i style="font-size:smaller">(Untitled slide)</i>');
	this.slideDetail.update(slide.description
		|| '<i style="font-size:smaller">(No description)</i>');
	vs.ElementWidget.prototype.onLoad.call(this);
};

