/**
	@param	{string} container_id
	@param	{Object} slide
	@param	{Object} series
	@return	{vs.Viewer}
*/
// ----------------------------------------------------------------------------
zfatlas.FullScreenViewer = function(container_id, slide, series) {
// ----------------------------------------------------------------------------

	var panel, iterator,
		touch = vs.env.isTouchDevice,
		viewer = touch ? new vs.TouchViewer : new vs.Viewer;

	Event.observe(document, 'dom:loaded', function() {
		var coords = vs.env.query['c'],
			startpos = coords && coords.match(/^\d+,\d+$/)
				? coords.split(",")
				: null;

		// Attach viewer to DOM and add common widgets
		viewer.attachTo($(container_id))
			.addWidget(vs.widget.Scalebar)
			.addWidget(zfatlas.widget.Iterator)
			.focus();

		// Add widgets specific to TouchViewer or regular Viewer
		if (touch) {

			viewer.addWidget(vs.widget.TouchZoom)
				.addWidget(vs.widget.Labels)
				.addWidget(vs.widget.SlideLabel, {cssClassName: "zf-widget vs-widget vsSlideLabel", minimized: true})
				.container.addClassName("vsTouch");

		} else {

			viewer.addWidget(vs.widget.ZoomControl)
				.addWidget(zfatlas.ui.SlidingPanel, {placement: "right"});

			// Add widgets to SlidingPanel
			panel = viewer.widgets['panel']
				.addWidget("<u>A</u>bout this slide", zfatlas.widget.SlideLabel)
				.addWidget("Lin<u>k</u> to this slide", zfatlas.widget.Hyperlink)
				.addWidget("Other slides in this <u>s</u>eries", zfatlas.widget.SeriesNavigator, {
					initialize: function() {
						/** @this {zfatlas.widget.SeriesNavigator} */
						function onload() {
							panel.updateTitle(this, null, this.slides && this.position() > -1 ? this.slides.length : 0);
						}

						zfatlas.widget.SeriesNavigator.prototype.initialize.call(this);
						this.viewer.onEvent("load", null, onload.bind(this));
					},
					renderList: function() {
						zfatlas.widget.SeriesNavigator.prototype.renderList.call(this);
						// add hover previews
						zfatlas.addPreviewThumbnails(this.element, /view\.php\?.*?\bs=\d+/);
					}
				},
				// iterator onOpen():
				/** @this {zfatlas.widget.SeriesNavigator} */
				function() {
					// scroll current slide into view, if necessary
					this.element.select('LI.active').each(function(li) { li.scrollIntoViewIfNecessary(Element.SCROLL_MIDDLE) });
				})
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
		}

		// Set timer to record slide view
		// is this too much, recording access on each "load"?  if I go back to a slide I've already looked at, it'll record it again.
		if (!IN_DEVELOPMENT) {
			viewer.onEvent("load", null, zfatlas.ajaxCountSlide.debounce(zfatlas.ajaxCountSlideTimeout));
		}

		// Sets resize listener, activates core key bindings, etc.
		vs.Viewer.init();

		// Add additional keyboard bindings for widgets we use
		vs.Viewer.keys.addGroup(vs.widget.Iterator.keyBindings);
		vs.Viewer.keys.addGroup(zfatlas.ui.keyBindings);

		iterator = viewer.widgets['iterator'].setSeries(series);

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

