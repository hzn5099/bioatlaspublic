/**
	@param	{string} container_id
	@param	{Object} slide
	@param	{Object} series
	@return	{vs.Viewer}
*/
// ----------------------------------------------------------------------------
zfatlas.FullScreenViewer = function(container_id, slide, series) {
// ----------------------------------------------------------------------------

	var viewer = new vs.Viewer;

	Event.observe(document, 'dom:loaded', function() {
		var panel, iterator,
			zfSliderContainer = $("zfSliderContainer"),
			coords = vs.env.query['c'],
			startpos = coords && coords.match(/^\d+,\d+$/)
				? coords.split(",")
				: null;

		// Attach viewer to DOM and add widgets
		viewer.attachTo($(container_id))
			.addWidget(vs.widget.ZoomControl, {container: zfSliderContainer})
			.addWidget(vs.widget.Scalebar)
			.addWidget(zfatlas.widget.Iterator)
			.addWidget(zfatlas.widget.Iterator, {series: series})
			.addWidget(zfatlas.widget.Slider, {container: zfSliderContainer, widgetHandle: "slider", series: series})
			.addWidget(zfatlas.ui.SlidingPanel, {placement: "right"})
			.focus();

		// Add widgets to SlidingPanel
		panel = viewer.widgets['panel']
			.addWidget("<u>A</u>bout this slide", zfatlas.widget.SlideLabel)
			.addWidget("Lin<u>k</u> to this slide", zfatlas.widget.Hyperlink)
			.addWidget("<u>L</u>abels on this slide", zfatlas.widget.LabelSearch, {
				/** @this {zfatlas.widget.LabelSearch} */
				ajaxSuccess: function() {
					zfatlas.widget.LabelSearch.prototype.ajaxSuccess.apply(this, arguments);
					panel.updateTitle(this, null, this.labels.length);
				},
				/** @this {zfatlas.widget.LabelSearch} */
				onClick: function(event) {
					if (this.findElementFromEvent(event)) {
						panel.selectWidget(this, zfatlas.widget.LabelSearch.prototype.onClick.bind(this, event));
					}
				}
			})
			.addWidget("Viewer <u>h</u>elp", zfatlas.ui.FullScreenHelp)
			// make "About this slide" the active panel
			.selectWidget(viewer.widgets['slidelabel']);

		// Add thumbnail
		viewer.addWidget(zfatlas.widget.Thumbnail, {container: panel.element});

		// Sets resize listener, activates core key bindings, etc.
		vs.Viewer.init();

		// Add additional keyboard bindings for widgets we use
		vs.Viewer.keys.addGroup(vs.widget.Iterator.keyBindings);
		vs.Viewer.keys.addGroup(zfatlas.ui.keyBindings);

		iterator = viewer.widgets['iterator'];

		// Load slide into viewer
		if (slide.id > 0) {
			viewer.load(new vs.VirtualSlide(slide), vs.env.query['z'], startpos, true);

		} else if (series['slides'] && series['slides'].length) {
			iterator.first();

		} else { // slide not found
			new zfatlas.ui.Inset404();
		}
	});

	return viewer;
};

// ----------------------------------------------------------------------------
// exports
// ----------------------------------------------------------------------------
if (!IN_DEVELOPMENT) {
	window['zfatlas'] = {};
	window['zfatlas']['FullScreenViewer'] = zfatlas.FullScreenViewer;
}

