/*

	Example:  Launching a comparison

		var comparison = Comparison.getComparison("compare", "/compare.php");
		comparison.add(slide_id);


	Example:  Comparison via query string

		Comparison.initialize();
		Comparison.add(slide_id);


	About Comparison

		Comparison is intended to provide a separate window/tab for maintaining a comparison (grid of possibly linked slides) to
		which slides can be added/removed as a user navigates the site.

		Comparison is written as a global, non-instantiable class for several reasons:  comparisons are intended by design to be
		separate windows, (2) comparisons should be accessible even if the opener has navigated to another page, so windows must
		be looked up by windowName, (3) in order to facilitate window-to-window communication, a global object is the most reliable
		method.

	Issues with window-window communication

		Getting a reference to an already-opened window

			window.open(url, windowName, windowOptions)
			window.open("", windowName, windowOptions)

			Calling window.open() will open a new window and load the URL provided, returning a reference to the newly-created
			window.  When we open a window, we store this reference (or a reference to some global object, such as its Comparison
			object) and re-use it when we want to add a slide.  However, once we've navigated to another page on the site and want
			to add a slide to the existing comparison window, we need to get a reference to it.  Re-calling window.open() with the
			intended URL will cause the page to navigate to that URL, destroying the comparison.  However, if URL is the empty
			string (""), if a window by windowName exists, a reference to it will be returned without affecting its state.

		Determining window reference state

			Since we've used an empty URL in window.open(), we now need to determine if the resulting window reference was
			pre-existing or a newly-opened window on which we need to set the location.  Checking the value of window.location is
			not a reliable test; although "about:blank" is common for new windows, it's not standard and can't be trusted.  We
			can't check if it's the URL we've supplied since the browser may have changed it for a number of reasons, e.g.,
			relative to absolute URL: "/compare.php" to "http://zfatlas.psu.edu/compare.php".

			It also turns out history.length is an unreliable check because different browsers initialize the value differently.
			Webkit thinks an empty history has a length of 1.  Firefox, 0.

			What we use to determine if the window has loaded is the same global object we defined:  windowReference.Comparison.
			If this exists, the window is loaded and ready; if not, we set location.href.  Of course, there is a delay between when
			we set location.href and when windowReference.Comparison exists (time to fetch page + time to initialize), but the
			fake Comparison explained in the next section will prevent this check from being performed twice.

		Avoid opening multiple windows

			When window.open() must spawn a new window, especially in Firefox, the process may take an appreciable amount of time
			during which the function may be entered again.  I.e., if I create a button that adds a slide to a comparison window,
			and I hit it three times in very quick succession before the first call returns, I'll get three windows.
			window.open() doesn't return a reference to an existing window until it exists, and while window.open() is out to
			lunch, and we request a window by windowName, it'll start opening another one, and we end up with multiple windows of
			the same name.

			What we need to do is define some variable before running window.open for the first time and check for that before
			running window.open().  In the case of Comparison, we have an object with cached window references.  If a reference
			exists, we return it without calling window.open() again.  If it doesn't exist, we create a fake one containing a
			minimal Comparison object with only the methods we'll need to bootstrap a comparison.  We do this before calling
			window.open() so that subsequent calls to getComparison() will return this fake/interim object instead of opening
			duplicate windows.

			The fake Comparison object has an add() method that will queue slides until the comparison window is ready to load them.

		Connecting windows

			A window created with window.open() has a reference to its opener at window.opener.  Once a comparison window has
			opened, it needs to retrieve queued slides and load them.  Originally, I wanted to use windowReference.onload to
			initiate connecting the comparison window with its opener, and it worked in Firefox.  Unfortunately, it didn't work in
			other browsers, so I added a registerComparison() method on the fake Comparison that will set the correct references
			and initialize the comparison window with the queued slides.

		Handling the reload event in comparison windows

			Reloading a comparison window would result in an empty window because the fake registerComparison() no longer exists
			(and the default one always returns false).  As long as the comparison window initialize()s itself, an opener can
			retrieve a reference to it, but this requires user interaction.  What we need to do is to store state somewhere that
			will survive a window.* environment reset.  We could save it in the opener, but if the user navigates to another page,
			we face the same problem.  The easiest solution to this is HTML5's sessionStorage object.  This is a key-value store
			that persists as long as the window/tab is open.  It's available in IE8+ and all the decent browsers, and since this
			is something of a corner case (reload is likely to be an accident), we'll just throw the IE6-7 users under the bus,
			where they belong.

			To store state, we maintain a local variable, 'loaded', an array of arrays that contains the arguments passed to add()
			-- slide_id and options.  Each time a slide (viewer, really) is added/removed, 'loaded' is appropriately modified,
			then serialized (to JSON) and sessionStorage['loaded'] is set to the resulting string.

		IE8 JSON.stringify cross-window bug (aka Array != window.opener.Array)

			My initial relief that IE8 "supported" sessionStorage and JSON turned into a several hour, hair-tearing debugging
			session culminating in the discovery that IE8 can't convert objects (like arrays) created in one window environment to
			JSON in another window environment.  That is, if you pass in an array from the originating window to its subordinate,
			you can use the array as much as you want, but an attempt to serialize it with JSON.stringify will result in the
			string "undefined".  So we can't create the queue array in our initiator window and pass it to our subordindate window
			and expect it to be able to use JSON.stringify on it.

	Compatibility

		- sessionStorage and JSON are not available before IE8, so reloading the comparison window will result in
		  a blank page.  Other than that, this should work in IE6+.

		- In IE8 JSON.stringify will return "undefined" for objects created in another context (like window.opener); sessionStorage will
		  then throw an error on that string, so I've wrapped it in a try/catch block rather than completely refactor Comparison
		  to bypass this issue.

	States:

		SlideBrowser exists; ComparisonWindow never existed
			- open window; return stubbed object while window opens
		SlideBrowser exists; ComparisonWindow has been closed
			- re-open window
		SlideBrowser exists; ComparisonWindow exists
		SlideBrowser exists; ComparisonWindow is loading/initializing
		SlideBrowser exists; ComparisonWindow is reloaded
			- same situation as when SlideBrowser does not exist, except now the
			  problem is to reconnect SlideBrowser with ComparisonWindow
			- the object SlideBrowser.Comparison.getComparison() is returning is the correct comparison,
			  except that it has not initialized; initialize it
		SlideBrowser has navigated to a new page; ComparisonWindow exists
		SlideBrowser does not exist; ComparisonWindow is reloaded
			- in order to provide meaningful context when a reload event occurs,
			  we should store [slide_id, options] in sessionStorage so ComparisonWindow
			  can reset itself in the absence of a parent SlideBrowser

	Initialization code for recognizing ComparisonWindow role:

		- does location.query['s[]'] exist?  (then we've been called directly)
		- does sessionStorage.loaded exist?  (then we've been reloaded)
		- does window.opener.Comparison exist?  (then we're new and need to register with our opener)

	To do today:

		[~] Solve "adding viewers to viewerlink when containers are resized" problem
		- workaround: don't link viewers by default (allow user to load them up before engaging linking behavior)
			- ViewerLink has no onResize event
			- Sequence of events:
				"First Viewer is added":
					[Viewer0] "attach"
					[Viewer0] "load"
				"Second Viewer is added":
					[Viewer0] "resize" -> Viewer0
					[Viewer0] "move" -> viewerlink
					[Viewer1] "attach"
					[Viewer1] "load"
				"Third Viewer is added":
					[Viewer1] "resize" -> Viewer1
					[Viewer1] "move" -> viewerlink
					  [Viewer0] "move"
					[Viewer0] "resize" -> Viewer0
					[Viewer0] "move" -> viewerlink
					  [Viewer1] "move"
					[Viewer2] "attach"
					[Viewer2] "load"

			- perspective:  containers should resize around the pixel in their center
			- should viewerlink suspend link on resize event?  Or should Viewer resize callback bypass move*?
			  Right now, all resize() does is setContainerProperties() and updateTiles(), however, in order to keep
			  Viewer centered during container resize (which we are prototyping in Comparison), we'd need to move
			  the slide element wrt its container; this would change the offsetX/Y values, which is the definition
			  of a move event.

			  We could recenter the element without sending a move event; this would violate the current idea of
			  what a move event is -- we'd have to move the element during the resize event.  Reappropriate the
			  drag event?  No, that iterates over the moveEvents.

			  What if instead of divorcing movement of offsets from element, we reversed it, or at least put the
			  movement of the element outside of the sending of a move event.  This would fit with the idea of
			  putting the offset* setting in the drop/mouseup function.

			  What _is_ the definition of a move event?  Is it when offsets are changed (not counting during load)?

			  Currently, ViewerLink is the only component that supplies an onEvent("move") listener.  The "move"
			  event receives a [dx,dy] array, but if it needs absolute coords (offset*), then the offsets would
			  need to be updated during each move.  I could define getters for viewer/slide position that would
			  calculate position only when requested.

				  dx = (container.width - viewer.containerWidth)/2

			  Assuming we sweep offset changes under the rug during a resize, instead using the center as a frame
			  of reference, then we'd need to issue a move event iff the change in dimensions is an odd number. If
			  we round it, it will always round up; if we floor it, it will always go down.  Could we use some kind
			  of random or mod operation to split the two?

				dx = Math[container.width % 2 ? 'floor' : 'ceil']((container.width - viewer.containerWidth)/2);
				dy = Math[container.height % 2 ? 'floor' : 'ceil']((container.height - viewer.containerHeight)/2);

				if container height is reduced by 1px, difference is 0.5px, if container height is 301px, this becomes Math.floor(0.5) == 0
				if container height is reduced by 1px, difference is 0.5px, if container height is 300px, this becomes Math.ceil(0.5) == 1
				if container height is reduced by 2px, difference is 1.0px, we move the element -1px, and no "move" event is necessary

			  Would doing this further reduce the number of move events per resize events (to 25%)?  I think so, roughly
			  although it will depend on the speed of the resize and browser/computer performance (lower speed + high sample rate
			  == more 1px resizes).

		[~] create controls/widgets for general-purpose comparison window
			- slide label overflows (due to height set on container) when too big to fit
			- zoom widget doesn't inform user of available powers
			- add "disabled" state to ZoomWidget
			- why is first slide so small (in Chrome, at least)?
			- global controls?
				- link/unlink ALL, link movement/zoom only?
				- "link to this comparison"
					- "link to this" that returns link to comparison with all slides in current state?  +linkage?
			- for slide label, instead of a description/source, there could be a menu of actions; e.g., open full screen
		[ ] fix slide label css height   it should be able to grow w/o overflowing
			- min-height instead?  doesn't seem to work
		[ ] write code for use in pages with slides ("Add to comparison window" control)
			- will need to know which slides are in comparison in order to mark them
		[ ] compare.php

	- a timer set in getComparison for new windows would be useful to retry loading the URL when the server is taking too long to respond
	- move document.onload code out of Comparison (should only run for compare.php)

	- "chrome"
		~ fade containers in/out
		~ provide handle for dragging; ghost viewer and swap when dragged to another container
			ghost thumbnail?!
		- create style for linked viewers to show they are linked; hide+appear for linking viewers?  glow?

	- viewer is not being focused on click
*/

/**
	Comparison - manages windows, viewer containers, and viewers for comparison window

		Requires:
			- Scriptaculous effects
			- vs.ViewerLink

*/
var Comparison = {

	cssClassName:	"comparisonViewerContainer",
	widgets: [],
	limit: 0,

	/**
		@param	{Object} comparison
		@return	{boolean}
	*/
	registerComparison: function(comparison) { return false },

	// -----------------------------------------------------------------------
	/**
		Comparison.getComparison() - use this when spawning a comparison

		@return	{Function}
	*/
	// -----------------------------------------------------------------------
	getComparison: (function () {
	// -----------------------------------------------------------------------

		/** @type {Object.<string,Window|Object>} */
		var _windows = {};

		return function(windowName, url) {

			var comparison,
				queue,
				win = _windows[windowName];

			if (!win || win.closed) {

				queue = [];

				/* since this function may be called again while the window.open call
				 * is in progress, create a dummy window.Comparison so slides can be added
				 * while the window is opening/loading/initializing */

				_windows[windowName] = {
					Comparison: {

						add: function(slide_id, options) {
							queue.push([slide_id, options]);
						},

						registerComparison: function(comparison) {
							if (comparison != win.Comparison)
								return false;

							_windows[windowName] = win;
							comparison.initialize(queue); // we need to fix this for IE
							return true;
						}
					}
				};

				// this may return null in IE due to popup-blocker
				win = window.open("", windowName, "resizable=yes" + ",width=200,height=200,left=2200,top=1300");

				// if win is null/undefined, this indicates probably popup-blocker activity (IE returns null)
				if (win) {

					// pre-existing comparison window
					if (win.Comparison)
						_windows[windowName] = win;

					// assume new window
					else
						win.location.href = url;

						/* originally was checking for history.length here, but it
						 * turns out some browsers set it to '1' on a new, empty
						 * window.  Checking for .Comparison should be sufficient
						 * as the case we're attempting to identify is when we're
						 * trying to reconnect to our comparison window when we've
						 * navigation off the originating page.  Thus win shouldn't
						 * be initializing/loading by then.  */
				}
			}

			return _windows[windowName].Comparison;
		}
	})(),


	// -----------------------------------------------------------------------
	/**
		Comparison.initialize() - use this when being a comparison

			The 'slides' argument is an array of arrays -- arguments to the add() function.
			Containers for these slides get created before the viewers are initialized so
			their startzoom will be as expected.

			'parentContainer' defaults to document.body.

		@this	{Object}
		@param	{Array.<Array.<number,Object>>=} slides
		@param	{Element|string=} parentContainer
	*/
	// -----------------------------------------------------------------------
	initialize: function(slides, parentContainer) {
	// -----------------------------------------------------------------------

		var self = this,
			Viewer = vs.env.isTouchDevice ? vs.TouchViewer : vs.Viewer,
			viewers = [],
			containers = [],
			viewerMarginWidth	= 0,
			viewerMarginHeight	= 0,
			viewerBorderWidth	= 0,
			viewerBorderHeight	= 0;

		slides = slides || [];
		parentContainer = $(parentContainer || document.body);

		/**
			@return	{Element}
		*/
		function createContainer() {

			var container = parentContainer.appendChild(new Element('DIV')
					.addClassName(self.cssClassName)
					.hide()
				);

			if (containers.push(container) == 1)
				setContainerProperties(container);
			positionContainers();

			return container.appear({'duration': 0.25});
		};

		/**
			@param	{Node} element
		*/
		function setContainerProperties(element) {

			viewerMarginWidth = parseInt(element.getStyle('marginLeft'), 10) || 0;
			viewerMarginHeight = parseInt(element.getStyle('marginTop'), 10) || 0;
			viewerBorderWidth = parseInt(element.getStyle('borderLeftWidth'), 10) || 0;
			viewerBorderHeight = parseInt(element.getStyle('borderTopWidth'), 10) || 0;

		};

		function positionContainers() {

			var i = 0, n = containers.length,
				rows, col, cells = 0,
				parent = parentContainer.getDimensions(),
				width, height, offset_x, offset_y,
				width_counter, height_counter,
				layout = self.getLayout(n),
				cols = layout.length;

			offset_x		= 0;
			width_counter	= vs.util.integerQuotient(parent.width - (cols + 1)*viewerMarginWidth - 2*cols*viewerBorderWidth, cols);

			for (col = 0; col < layout.length; col++) {

				rows			= layout[col];
				width			= width_counter();
				offset_y		= 0;
				height_counter	= vs.util.integerQuotient(parent.height - (rows + 1)*viewerMarginHeight - 2*rows*viewerBorderHeight, rows);

				while (rows--) {

					height = height_counter();
					containers[cells++].setStyle({
						'width':	width + "px",
						'height':	height + "px",
						'left':		offset_x + "px",
						'top':		offset_y + "px"
					});
					offset_y += height + viewerMarginHeight + 2*viewerBorderHeight;

				}
				offset_x += width + viewerMarginWidth + 2*viewerBorderWidth;
			}

			resizeViewers();
		};

		// this isn't being called in Chrome (when debounce is applied)
		// debounce seems to work in Chrome otherwise
		function resizeViewers() {
			var n = viewers.length,
				viewer, container, dx, dy;

			while (n--)
				// (viewer = viewers[n]).attached() && viewer.doEvent("resize", null, viewer.container.getDimensions());
				if ((viewer = viewers[n]).attached()) {
					container = viewer.container.getDimensions();
					dx = container.width - viewer.containerWidth >> 1;
					dy = container.height - viewer.containerHeight >> 1;
					viewer.doEvent("resize", null, container);
					// this works to ensure slide is within bounds
					// this might not work well w/ViewerLink
					if (viewer.loaded())
						viewer.moveBy([dx, dy], viewer);
				}
		}

		// this is used to restore comparison if the window.reload event is triggered;
		// only available in browsers w/ sessionStorage + JSON support
		function store() {
			if (window.sessionStorage)
				window.sessionStorage.setItem("loaded", window.JSON.stringify(slides));
			self.length = viewers.length;
		}

		/**
			@param	{number} slide_id
			@param	{Object=} options
		*/
		this.add = function(slide_id, options) {

			if (this.limit && viewers.length >= this.limit)
				return;

			var viewer = new Viewer()
				.attachTo(createContainer());

			// widgets should probably be either ViewerWidget or array(ViewerWidget, optionsObject)
			this.widgets.each(viewer.addWidget, viewer);

			viewers.push(viewer.fetch(slide_id, options));

			slides.push([slide_id, options]);
			store();
		};

		/**
			@param	{Element} container
		*/
		this.remove = function(container) {

			var n = viewers.length;

			while (n--) {
				if (viewers[n].container == container) {
					viewers[n].destroy();
					viewers.splice(n, 1);
					containers[n].remove();
					containers.splice(n, 1);
					slides.splice(n, 1);
					positionContainers();
					if (viewers.length == 0)
						this.close();
					else
						store();
				}
			}
		};

		this.close = function() {
			window.close();
		};

		function swap(array, a, b) {
			var tmp = array[a];
			array[a] = array[b];
			array[b] = tmp;
		}

		this.swap = function(a, b) {
			if (a < viewers.length && b < viewers.length && a != b) {
				swap(viewers, a, b);
				swap(containers, a, b);
				positionContainers();
				store();
			}
		};

		// set up event listeners (resize, mousedown)
		Event.observe(parentContainer, "mousedown", function(event) { event.stop() });
		Event.observe(window, "resize", positionContainers);

		vs.Viewer.init();
		// <Esc> toggles widget visibility
		// TODO: add one-time message on first use to notify use that ESC returns widgets
		vs.Viewer.keys.addGroup(new vs.KeyBindingGroup({
			'Esc: 27': function(event) {
				parentContainer.toggleClassName("vs-hide-widgets");
			}
		}));

		// create initial slides, if any
		(function() {
			var viewer, i, n = slides.length;

			for (i = 0; i < n; i++)
				createContainer();

			for (i = 0; i < n; i++) {
				viewer = new Viewer().attachTo(containers[i]);
				self.widgets.each(viewer.addWidget, viewer);
				viewers.push(viewer.fetch(slides[i][0], slides[i][1]));
			}
			if (n)
				viewers[0].focus();
			store();
		})();
	},

	// ----------------------------------------------------------------------
	/**
		getLayout() - returns an array describing the proscribed layout for the comparison grid

		@param	{number} n
		@return	{Array.<number>
	*/

	// -----------------------------------------------------------------------
	getLayout: function(n) {
	// -----------------------------------------------------------------------

		var i = 0,
			x = Math.floor(Math.sqrt(n - 1)) + 1,
			base = Math.floor(n/x),
			layout = [];

		// populate layout
		while (i < x)
			layout[i++] = base + (i <= n % x);

		// I'd like this to be smarter than using reverse, but I can't get the comparison right...
		return layout.reverse();
	}
};

/**
	@constructor
	@extends	{vs.ElementWidget}
*/
// --------------------------------------------------------------
Comparison.closeWidget = vs.util.extend(vs.ElementWidget, /** @lends {Comparison.closeWidget.prototype} */ {
// --------------------------------------------------------------

	cssClassName:	"vs-widget comparison-widget button close",

	initialize: function() {
		this.element = new Element('DIV', {'title': "Remove from comparison"}).addClassName(this.cssClassName);
		this.observers.push(
			[this.element, "mousedown", Event.stop],
			[this.element, "dblclick", Event.stop],
			[this.element, "click", this.close.bind(this)]
		);
	},

	close: function() {
		Comparison.remove(this.viewer.container);
	}
});
/*
// --------------------------------------------------------------
Comparison.swapWidget = vs.util.extend(vs.ElementWidget, {
// --------------------------------------------------------------

	cssClassName:	"comparison-widget button swap",
	initialize: function() {
		this.element = new Element('DIV').addClassName(this.cssClassName);
		this.observers.push([this.element, "mousedown", this.mousedown.bindAsEventListener(this)]);
		this.observers.push([this.element, "dblclick", Event.stop]);
	},

	mousedown: function(event) {
		event.stop();
		var thumbnail = new Element('IMG', {'src': "/thumbnails/preview/%010d.jpg".sprintf(this.viewer.slide.id)})
			.setStyle({
				'position':		"absolute",
				'left':			event.clientX + "px",
				'top':			event.clientY + "px",
				'zIndex':		"9999"
			})
			.setOpacity(0.5);

		$(document.body)
			.observe("mousemove", function(event) {
				thumbnail.setStyle({
					'left':			event.clientX + "px",
					'top':			event.clientY + "px",
				});
			})
			.observe("mouseup", function() {
				// now need some way to identify viewer dropped into (if any)
				thumbnail.remove();
				document.body.stopObserving("mouseup", arguments.callee);
			})
			.insert(thumbnail);
	}
});
// --------------------------------------------------------------
*/
/**
	@constructor
	@extends	{vs.ElementWidget}
*/
// --------------------------------------------------------------
Comparison.linkWidget = vs.util.extend(vs.ElementWidget, /** @lends {Comparison.linkWidget.prototype} */ {

	cssClassName:	"vs-widget comparison-widget button link",
	autolink:		false,
	viewerlink:		new vs.ViewerLink,
	viewers:		[],

	initialize: function() {
		this.element = new Element('DIV', {'title': "Toggle link; Ctrl+click affects all viewers"}).addClassName(this.cssClassName);

		this.observers.push(
			[this.element, "click", this.toggleLink.bindAsEventListener(this)],
			[this.element, "mousedown", Event.stop],
			[this.element, "dblclick", Event.stop]
		);

		// save original
		this._ajaxSuccess = this.viewer._ajaxSuccess;
		this.viewer._ajaxSuccess = this.viewer._ajaxSuccess.wrap(this.ajaxSuccess).bind(this);

	},

	/**
		@param	{Function} original
		@param	{Ajax.Response} response
		@param	{?(Array|Object)} headerJSON
	*/
	ajaxSuccess: function(original, response, headerJSON) {

		var slide,
			opts = response.request.options,
			// viewers = this.viewerlink.getViewers(),
			viewers = this.viewers,
			n = 0,
			sum = 0;

		try {
			if (!opts.startzoom && opts.startzoom !== 0) {
				slide = new vs.VirtualSlide(/** @type {Object} */(eval("(" + response.responseText + ")")));
				viewers.each(function(v){ if (v.loaded()) { n++; sum += v.slide.getPower(v.z)} });
				opts.startzoom = slide.getNearestLevelByPower(sum/n);
			}
		} catch (e) {
			// console.error(e.message);
		} finally {
			original(response, headerJSON);
		}
	},

	onDestroy: function() {
		this.onDetach();
		this.viewer._ajaxSuccess = this._ajaxSuccess;
	},

	onAttach: function(container) {
		$(this.container || container).insert(this.element);
		this.viewers.push(this.viewer);
		if (this.autolink)
			this.link();
	},

	onDetach: function() {
		var container = this.element.parentNode;
		if (container)
			container.removeChild(this.element);
		if (this.viewerlink.includes(this.viewer))
			this.unlink();
		this.viewers.splice(this.viewers.indexOf(this.viewer), 1);
	},

	link: function() {
		// when there are only two viewers, and one is linked, link the other automatically
		var viewers = this.viewers.length == 2 ? this.viewers : [this.viewer],
			viewerlink = this.viewerlink;

		viewers.each(function(viewer) {
			viewer.container.addClassName("linked");
			viewerlink.add(viewer);
		});
	},

	unlink: function(){
		// when there are only two links left in viewerlink, break them both
		var viewerlink = this.viewerlink,
			viewers = viewerlink.getViewers().length == 2 ? this.viewers : [this.viewer];

		viewers.each(function(viewer) {
			viewer.container.removeClassName("linked");
			viewerlink.remove(viewer);
		});
	},

	linkAll: function() {
		this.viewerlink.add(this.viewers.each(function(v){ v.container.addClassName("linked") }));
	},

	unlinkAll: function() {
		this.viewerlink.remove(this.viewers.each(function(v){ v.container.removeClassName("linked") }));
	},

	toggleLink: function(event) {
		var linked = this.viewerlink.includes(this.viewer);
		event.stop();
		event.ctrlKey
			? linked
				? this.unlinkAll()
				: this.linkAll()
			: linked
				? this.unlink()
				: this.link();
	}
});

/**
	@constructor
	@extends	{vs.ElementWidget}
*/
Comparison.zoomWidget = vs.util.extend(vs.ElementWidget, /** @lends {Comparison.zoomWidget.prototype} */ {
	cssClassName: "vs-widget comparison-widget zoom",
	initialize: function() {
		var plus, minus;
		this.element = new Element('DIV').addClassName(this.cssClassName)
		// IE8 is being a wad with text in the buttons; it highlights them and wants you to search for the highlighted text
			.insert(plus = new Element('DIV', {'title': "Zoom in; Shift+click for maxiumum zoom"}).addClassName("button plus"))
			.insert(minus = new Element('DIV', {'title': "Zoom out; Shift+click for best fit"}).addClassName("button minus"))
			.insert(this.power = new Element('DIV'));

		this.observers.push(
			[this.element, "dblclick", Event.stop],
			[this.element, "mousedown", Event.stop],
			[plus, "click", this.zoomIn.bindAsEventListener(this)],
			[minus, "click", this.zoomOut.bindAsEventListener(this)]
		);
	},

	zoomIn: function(event) {
		var viewer = this.viewer;
		event.shiftKey ? viewer.zoomTo(0) : viewer.zoomIn();
	},
	zoomOut: function(event) {
		var viewer = this.viewer,
			slide = viewer.slide;

		event.shiftKey ? viewer.zoomTo(slide.getContainingLevel(viewer.containerWidth, viewer.containerHeight)) : viewer.zoomOut();
	},
	onLoad: function() {
		this.onZoom();
	},
	onZoom: function() {
		var viewer = this.viewer;
		this.power.update(Math.truncate(viewer.slide.getPower(viewer.z), 2) + "x");
		// also disable controls where necessary
	}
});

/**
	@constructor
	@extends	{vs.ElementWidget}
*/
Comparison.titleWidget = vs.util.extend(vs.ElementWidget, /** @lends {Comparison.titleWidget.prototype} */ {
	cssClassName: "vs-widget comparison-widget title",
	initialize: function() {
		this.element = new Element('DIV').addClassName(this.cssClassName);
		this.observers.push(
			[this.element, "mousedown", Event.stop],
			[this.element, "dblclick", Event.stop]
		);
	},

	onLoad: function(slide) {
		this.element.innerHTML = slide.title;
		vs.ElementWidget.prototype.onLoad.call(this);
	}
});
// --------------------------------------------------------------

