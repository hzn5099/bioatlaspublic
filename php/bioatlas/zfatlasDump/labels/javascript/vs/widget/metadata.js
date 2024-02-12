
vs.widget.Metadata = vs.util.extend(vs.ViewerWidget, {

	initialize: function() {
		this.metadata = {};
	},

	render: function() {

	},

	// this needs to be at the END of the widgets... unless we add a delay
	onLoad: function() {

		var w, widgets = this.viewer.widgets;

		for (w in widgets)
			if (w.toString && typeof w.toString == "function")
				this.metadata[w] = w.toString();

		this.render();
	}

});

vs.widget.SlideLabel = vs.util.extend(vs.widget.Metadata, vs.ElementWidget, {
	cssClassName: "",
	initialize: function() {
		vs.widget.Metadata.initialize.call(this);
		this.element = new Element('DIV').addClassName(this.cssClassName);
	}
	render: function() {
		this.element.innerHTML = "%s".sprintf(
			this.viewer.slide.title || "untitled"
		);
	}
});

