/**
	TODO:
		x function to center #reference-wrapper vertically
		x set some max-width on #reference-wrapper
		x set term text in #reference-term
		x add close button/functionality to #reference-wrapper to reset #blackout
		x fix #reference-wrapper to be centered
		x set term/hierarchy when loaded from URL hash
		~ add slide label
		- improve widget styles

	@return	{vs.Viewer}
*/
// ----------------------------------------------------------------------------
zfatlas.Reference = function() {
// ----------------------------------------------------------------------------
	var viewer = new vs.Viewer;

	Event.observe(document, 'dom:loaded', function () {

		var container = $("reference-vs"),
			blackout = $("blackout"),
			wrapper = $("reference-wrapper"),
			term = $("reference-term"),
			description = $("reference-desc"),
			references = $("reference-refs"),
			citation = [
				"Merriam-Webster",
				"ZFIN",
				"TheFreeDictionary Medical Dictionary",
				"Kimmel, et al.",
				"Dorland's Medical Dictionary for Health Consumers",
				"Whitfield",
				"Isogai, et al.",
				"Wallace, et al.",
				"Finney, et al.",
				"The American Heritage Medical Dictionary",
				"Saunders Comprehensive Veterinary Dictionary",
				"Drummond",
				"Hu, et al.",
				"Wehman, et al.",
				"Wingert, 2007"
			],
			hash = window.location.hash.match(/ref-\d+$/);

		// ------------------------------------------------------------------------
		/**
			@this	{vs.Viewer}
			@param	{Ajax.Response} response
		*/
		function ajaxSuccess(response) {
		// ------------------------------------------------------------------------
			var slide = new vs.VirtualSlide(/** @type {Object} */(eval("(" + response.responseText + ")")));

			if ('startzoom' in slide)
				slide.startzoom = slide['startzoom'];
			if ('startpos' in slide)
				slide.startpos = slide['startpos'];

			this.load(slide,
				slide.startzoom,
				slide.startpos,
				true
			);

			// Set description
			description.update(slide.description);

			references.update();
			// Display citations, if applicable
			if (slide.source) {
				var ol = new Element('OL');
				for (var i = 0; i < citation.length; i++)
					if (slide.source & 1 << i)
						ol.insert(new Element('LI').insert(citation[i]));
				references
					.insert(new Element('P').insert("References:"))
					.insert(ol);
			}

			// Add ZFIN reference, if applicable
			if (slide.zfin_ref)
				references.insert('<p>ZFIN ID: <a href="http://zfin.org/action/anatomy/term-detail?anatomyItem.zdbID=%s">%1$s</a></p>'.sprintf(slide.zfin_ref));

			// Set full screen link
			$("reference-fullscreen").href = "/view.php?s=%d&z=%d&c=%s".sprintf(slide.id, slide.startzoom, slide.startpos.toString());

			recenter();
		}

		// ------------------------------------------------------------------------
		/** param {Element} li */
		function getHierarchy(li) {
		// ------------------------------------------------------------------------
			var ancestors = [];
			do {
				ancestors.push(li.select('SPAN.term').first().innerHTML);
			} while (li = li.up('LI'));
			return ancestors;
		}

		// ------------------------------------------------------------------------
		function recenter() {
		// ------------------------------------------------------------------------
			var innerHeight = wrapper.offsetHeight,
				outerHeight = document.viewport.getHeight();
			wrapper.style.top = (outerHeight - innerHeight >> 1) + "px";
		}

		// ------------------------------------------------------------------------
		/** @param	{string} id */
		function load(id) {
		// ------------------------------------------------------------------------
			var target = $(id);
			// Set term
			term.update(target.innerHTML);
			// Set term hierarchy
			$("reference-hierarchy").update(getHierarchy(target.up('LI')).reverse().join(" > "));
			blackout.show();
			vs.Keys.start();
			// set up viewer
			viewer.setContainerProperties().fetch(parseInt(id.replace("ref-", ""), 10));
		}

		// ------------------------------------------------------------------------
		/** @param	{Event} event */
		function reload(event) {
		// ------------------------------------------------------------------------
			if (event)
				event.stop();

			var slide = viewer.slide;
			viewer.load(slide, slide.startzoom, slide.startpos, true);
		}

		// ------------------------------------------------------------------------
		/** @param	{Event} event */
		function onClick(event) {
		// ------------------------------------------------------------------------
			var target = event.element().up('A');

			if (target && /^ref-\d+$/.test(target.id))
				load(target.id);
		}

		// ------------------------------------------------------------------------
		function close() {
		// ------------------------------------------------------------------------
			blackout.hide();
			vs.Keys.stop();
		}

		// ------------------------------------------------------------------------

		// Override some viewer properties
		viewer.fetchURL = "reference.php";
		viewer._ajaxSuccess = ajaxSuccess.bind(viewer);

		// Setup viewer
		viewer.attachTo(container)
			.focus()
			.addWidget(vs.widget.Scalebar)
			.addWidget(vs.widget.SlideLabel)
			.addWidget(vs.widget.ZoomControl, {minimized: true});

		// Check for hash ref (#ref-%d) and fire load() if set
		if (hash)
			load(hash[0]);

		// Set click handler
		$("reference-terms").observe("click", onClick);
		$("reference-center").observe("click", reload);
		$("reference-close").observe("click", function(event) {
			event.preventDefault();
			close();
		});
		Event.observe(window, "resize", recenter);
		vs.Viewer.keys.addGroup(new vs.KeyBindingGroup({
			'Esc: 27': close
		}));
	});

	vs.Viewer.init();

	return viewer;
};

