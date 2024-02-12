/*
	Initialization code for recognizing ComparisonWindow role:

		- does location.query['s[]'] exist?  (then we've been called directly)
		- does sessionStorage.loaded exist?  (then we've been reloaded)
		- does window.opener.Comparison exist?  (then we're new and need to register with our opener)

		This should only be executed in the context of being a comparison, not calling one.
*/

zfatlas.Comparison = function() {

	document.observe('dom:loaded', function() {

		var slide_params = vs.env.query['s[]'],
			opener = window.opener,
			register = opener
				&& !opener.closed
				&& opener.Comparison
				&& opener.Comparison.getComparison(window.name, "").registerComparison,
			// IE8 dies here (see documentation for explanation), so we use the try/catch below instead
			// loaded = window.sessionStorage && window.JSON && JSON.parse(sessionStorage.getItem("loaded"));
			loaded;

		try {
			loaded = /** @type {Array} */(window.JSON.parse("" + window.sessionStorage.getItem("loaded")));
		} catch(e) {
			loaded = null;
		}

		function toInt(i) {
			return parseInt(i, 10);
		}

		// -----------------------------------------------------------------------
		// direct, non-subordinate comparison, i.e., http://zfatlas/compare.php?s[]=500&s[]=501
		// -----------------------------------------------------------------------
		if (slide_params) {

			// slide_params will only be an array if there are two 's[]' query parameters
			if (!Object.isArray(slide_params))
				slide_params = [slide_params];

			// set static layout, if specified
			switch (vs.env.query['layout']) {

				case 'horizontal':
				case 'row':
					Comparison.getLayout = function(n) { var layout = []; while (n--) layout[n] = 1; return layout };
					break;

				case 'vertical':
				case 'column':
					Comparison.getLayout = function(n) { return [n] };
					break;

				default:
			}

			// define widgets
			Comparison.widgets.push(
				vs.widget.Scalebar,
				Comparison.linkWidget,
				Comparison.zoomWidget,
				Comparison.titleWidget
			);
			Comparison.linkWidget.prototype.autolink = true;

			// strictly speaking, negative coords are allowed, but would mean centering on non-slide, so don't worry about it
			var slides = slide_params
				.filter(RegExp.prototype.test, /\d+(?:,\d+){0,3}/)
				.map(function(s) {
					/*
					 * There are four possibilities:
					 * 	s=1
					 * 		slide id with no initial position
					 * 	s=1,0
					 * 		slide id with startzoom = 0
					 * 	s=1,100,200
					 * 		slide id with startpos = [100,200]
					 * 	s=1,0,100,200
					 * 		slide id with startzoom = 0 and startpos = [100,200]
					 */

					var params = s.split(",").map(toInt),
						n = params.length;

					return [params[0], {
						startpos:  n > 2 ? params.splice(n - 2, 2) : null,
						startzoom: n > 1 ? params[1] : null
					}];
			});

			Comparison.initialize(slides);

		} else {

			Comparison.widgets.push(
				vs.widget.Scalebar,
				Comparison.linkWidget,
				Comparison.zoomWidget,
				Comparison.closeWidget,
				Comparison.titleWidget
			);

		// -----------------------------------------------------------------------
		// window has been reloaded; re-initialize previously loaded slides
		// -----------------------------------------------------------------------
			if (loaded && loaded.length) {

				Comparison.initialize(loaded);

		// -----------------------------------------------------------------------
		// window seems to be new, subordinate comparison
		// -----------------------------------------------------------------------
			} else if (register) {

				register(Comparison);

			}
		}
	});
};

