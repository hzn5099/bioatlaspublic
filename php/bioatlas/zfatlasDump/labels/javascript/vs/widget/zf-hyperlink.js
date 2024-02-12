/**
	@constructor
	@extends {vs.widget.Hyperlink}
*/
zfatlas.widget.Hyperlink = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
// ----------------------------------------------------------------------------
	vs.ElementWidget,
	vs.widget.Hyperlink.prototype,

	/** @lends {zfatlas.widget.Hyperlink.prototype} */ {
// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
		/** @type {string}	*/	cssClassName:	"vs-widget zfHyperlink",
// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
		initialize: function() {
// ----------------------------------------------------------------------------
			function onClick(event) {
				this.select();
			}

			this.element = new Element('FORM').addClassName(this.cssClassName)
				.insert(new Element('P').insert("To this slide"))
				.insert(new Element('DIV').addClassName("input-100-wrapper").insert(new Element('INPUT', {'type': "text", "readonly": true}).observe("click", onClick)))
				.insert(new Element('P').insert("To this view"))
				.insert(new Element('DIV').addClassName("input-100-wrapper").insert(new Element('INPUT', {'type': "text", "readonly": true}).observe("click", onClick)));
		},

// ----------------------------------------------------------------------------
		update: function() {
// ----------------------------------------------------------------------------
			var location = window.location,
				inputs = this.element.select("INPUT"),
				viewer = this.viewer;

			// link to this slide
			inputs[0].value = this.getURL(viewer.slide.id);
			// link to this view
			inputs[1].value = this.getURL(viewer.slide.id, viewer.z, viewer.getCenter(true));
		},

// ----------------------------------------------------------------------------
/**
	@param	{vs.VirtualSlide} slide
	@param	{number=} startzoom
	@param	{Array=} startpos
*/

		onLoad: function(slide, startzoom, startpos) {
// ----------------------------------------------------------------------------
			vs.widget.Hyperlink.prototype.onLoad.apply(this, arguments);
		},

// ----------------------------------------------------------------------------
/**
	@param	{number} id
	@param	{?number=} z
	@param	{Array=} coords
	@return	{string}
*/

		getURL: function(id, z, coords) {
// ----------------------------------------------------------------------------
			var iterator = this.viewer.widgets['iterator'],
				location = window.location,
				url = ["http://", location.host, location.pathname, "?s=", id];

			if (iterator && iterator.id)
				url.push("&atlas=", iterator.id);

			if (null != z)
				url.push("&z=", z);

			if (coords)
				url.push("&c=", coords.join());

			return url.join("");
		}
	}
);

