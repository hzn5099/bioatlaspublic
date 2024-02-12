/**
	@constructor
	@extends {vs.widget.SlideLabel}
*/
zfatlas.widget.SlideLabel = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.widget.SlideLabel);
// ----------------------------------------------------------------------------
/** @type {string} */
zfatlas.widget.SlideLabel.prototype.cssClassName = "vs-widget vsSlideLabel";

// ----------------------------------------------------------------------------
zfatlas.widget.SlideLabel.prototype.initilaize = function() {
// ----------------------------------------------------------------------------
	this.element = new Element('DIV').addClassName(this.cssClassName);
	this.onUnload();
};

// ----------------------------------------------------------------------------
zfatlas.widget.SlideLabel.prototype.onLoad = function(slide) {
// ----------------------------------------------------------------------------
	var iterator = this.viewer.widgets['iterator'],
		position = iterator ? iterator.position() : -1,
		f = this.element.update(),
		title = slide.title,
		titleElement = new Element('H1').addClassName("title");

	// slide title
	f.insert(title
		? titleElement.insert(title)
		: titleElement.addClassName("untitled").insert("(Untitled slide)")
	);

	// series information and link
	if (iterator && position > -1) {
		f.insert(new Element('DIV').addClassName("series")
			.insert(new Element('A', {'href': "/search.php?atlas=%d&thumbnails=1#results".sprintf(iterator.id)}).observe("click", function(event){this.blur()}).insert(iterator.name))
			.insert(new Element('DIV').insert("Slide %d of %d".sprintf(position + 1, iterator.slides.length)))
		);
	}

	// slide description
	if (slide.description)
		f.insert(new Element('DIV').addClassName("description").insert(slide.description));

	// slide citation
	if (slide.source)
		f.insert(new Element('CITE').insert(slide.source));
};

// ----------------------------------------------------------------------------
zfatlas.widget.SlideLabel.prototype.onUnload = function() {
// ----------------------------------------------------------------------------
	this.element.update(new Element('P').addClassName("no-content").insert("No slide"));
};

