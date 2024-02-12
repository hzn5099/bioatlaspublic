/**
	@constructor
	@extends {vs.widget.AjaxIterator}
*/
// ----------------------------------------------------------------------------
zfatlas.widget.SeriesNavigator = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
// ----------------------------------------------------------------------------
	zfatlas.widget.Iterator,

	/** @lends {zfatlas.widget.SeriesNavigator.prototype} */ {
// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
		/** @type {string}	*/	cssClassName: "vs-widget zf-widget-series-navigator",
		/** @type {string}	*/	baseURL: "/atlas.ajax.php",
		/** @type {Ajax.Request}	*/	request: null,
		/** @type {Array}	*/	list: null,
// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
		/**
			@param	{number} series_id
			@return	{string}
		*/
// ----------------------------------------------------------------------------
		url: function(series_id) {
// ----------------------------------------------------------------------------
			return [this.baseURL, '?atlas_list=', series_id].join("");
		},

// ----------------------------------------------------------------------------
		initialize: function() {
// ----------------------------------------------------------------------------
			this.element = new Element('DIV').addClassName(this.cssClassName);
			this.observers.push([this.element, "click", this.clickHandler.bindAsEventListener(this)]);
			this._ajaxCreate = this.ajaxCreate.bind(this);
			this._ajaxSuccess = this.ajaxSuccess.bind(this);
			this._ajaxFailure = this.ajaxFailure.bind(this);
			this._ajaxTimeout = this.ajaxTimeout.bind(this);

			this.viewer.onEvent("load", null, this.setActiveLI.bind(this));

			// Note:  this calls setSeries()
			zfatlas.widget.Iterator.prototype.initialize.call(this);
		},

// ----------------------------------------------------------------------------
		/**
			@param	{string} content
		*/

		update: function(content) {
// ----------------------------------------------------------------------------
			this.element.update(new Element('P').addClassName("no-content").insert(content));
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Object} series
			@return	{zfatlas.widget.SeriesNavigator}
		*/

		setSeries: function(series) {
// ----------------------------------------------------------------------------
			vs.widget.AjaxIterator.prototype.setSeries.call(this, series);

			this.update("Loading...");

			// send Ajax.Request for slide titles
			// (don't bother sending request if series/series.id is not set)
			if (this.id) {
				new Ajax.Request(this.url(this.id), {
					'onCreate': this._ajaxCreate,
					'onFailure': this._ajaxFailure,
					'onTimeout': this._ajaxTimeout,
					'onSuccess': this._ajaxSuccess
				});
			} else {
				this.ajaxFailure();
			}

			return this;
		},

// ----------------------------------------------------------------------------
		// (for attachment to container)
		onAttach: vs.ElementWidget.prototype.onAttach,
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
		setActiveLI: function() {
// ----------------------------------------------------------------------------
			var li, i = this.position();

			this.element.select('LI.active').invoke('removeClassName', "active");

			if (i > -1) {
				li = this.element.select('LI').find(function(li){ return li.value == i + 1 });
				// toggle current slide, scrollintoviewifnecessary
				if (li) {
					li.addClassName("active").scrollIntoViewIfNecessary(Element.SCROLL_NEAREST);
				}
			} else {
				this.ajaxFailure();
			}
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Event} event
			@return	{boolean} false
		*/

		clickHandler: function(event) {
// ----------------------------------------------------------------------------
			var li, target = event.findElement('A');

			if (target) {
				event.stop();
				target.blur();
				li = target.up('LI');
				if (!li.hasClassName("active")) {
					this.loadSlide(li.readAttribute('value') - 1);
				}

				return false;
			}
		},

// ----------------------------------------------------------------------------
/**
	This method needs to be optimized to perform well with long lists which is
	why none of the Prototype element methods are used in the LI loop (compare
	~3000 ms vs ~170ms for 1,025 list items).

	@return	{zfatlas.widget.SeriesNavigator}
*/

		renderList: function() {
// ----------------------------------------------------------------------------
			var i, n, li, a, list = this.list,
				ol = new Element('OL'),
				d = document,
				LI = d.createElement('LI'),
				A = d.createElement('A'),
				f = d.createDocumentFragment();

			// Set name/description
			this.element.update(new Element('H1').addClassName("title").insert(this.name));
			if (this.description)
				this.element.insert(new Element('DIV').addClassName("description").insert(this.description));

			for (i = 0, n = list.length; i < n; i++) {
				a = A.cloneNode(false);
				a['href'] = "/view.php?s=" + list[i]['id'] + "&atlas=" + this.id;
				a['innerHTML'] = list[i]['title'] || "Untitled slide";
				li = LI.cloneNode(false);
				li['value'] = i + 1;
				li.appendChild(a);
				f.appendChild(li);
			}

			ol.appendChild(f);
			this.element.insert(ol);

			// calling onLoad() without a slide will overwrite the list
			this.viewer.loaded() && this.setActiveLI();

			return this;
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Ajax.Response} response
			@param	{Object} headerJSON
		*/
		ajaxSuccess: function(response, headerJSON) {
// ----------------------------------------------------------------------------
			// add each slide as a LI
			var slides;

			try {
				slides = /** @type {Array} */ (eval("(" + response.responseText + ")"));
			} catch(e) {
				console.log("[zfatlas.widget.SeriesNavigator]:  ajaxSuccess(); error eval'ing response; %s", e.message);
			}

			this.list = slides || [];
			this.renderList();
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Ajax.Response} response
		*/
		ajaxCreate: function(response) {
// ----------------------------------------------------------------------------
			this.update("Loading . . .");
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Ajax.Response} response
			@param	{Object|Array} headerJSON
		*/
		ajaxFailure: function(response, headerJSON) {
// ----------------------------------------------------------------------------
			this.update("No other slides in this series.");
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Ajax.Response} response
			@param	{Object|Array} headerJSON
		*/
		ajaxTimeout: function(response, headerJSON) {
// ----------------------------------------------------------------------------
			this.update("Server timed out.");
		}
	}
);

