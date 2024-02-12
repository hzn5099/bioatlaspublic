/**
	@constructor
	@extends {vs.widget.Labels}
*/
zfatlas.widget.LabelSearch = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget,
	vs.widget.Labels.prototype,

	/** @lends {zfatlas.widget.LabelSearch.prototype} */ {
// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
		/** @type {string}	*/	cssClassName: "vs-widget zf-widget-label-search",
		/** @type {string}	*/	lastText: "",
		/** @type {number}	*/	minimumMatchLength: 2,
// ----------------------------------------------------------------------------
		/** @type {Object}	*/	keyBindings: {
// ----------------------------------------------------------------------------
			/** @this	{zfatlas.widget.LabelSearch}
				@param	{Event} event */
			// (clear/blur INPUT)
			'Esc: 27': function(event) {
				// get INPUT (which will be focused)
				var input = this.element.select('INPUT').first();
				event.stop();
				// if INPUT contains text (or this.lastText), clear it; otherwise blur it
				if (input.value) {
					this.clearInput().generateList();
				} else {
					input.blur();
				}
			}
		},
// ----------------------------------------------------------------------------
		/** @type {Object} */	effectOptions: { // for highlight effect onClick
// ----------------------------------------------------------------------------
			'startcolor':	"#99ccff",
			'endcolor':		"#eeeeee",
			'duration':		2
		},
// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
		initialize: function() {
// ----------------------------------------------------------------------------
			var key, keyContext,
				keyBindings = {},
				input = new Element('INPUT', {'type': "text", 'placeholder': "Search labels"}),
				terms = new Element('DIV').addClassName("terms"),
				clear = new Element('DIV', {'title': "Clear search [Esc]"}).addClassName("control"),
				focused = false;

			// define event handlers ('focused' is necessary to avoid a Chromium bug that fires
			// these events multiple times when the window focuses or blurs)
			/**
				@param	{Event} event
			*/
			function onFocus(event) {
				if (!focused) {
					focused = true;
					vs.Keys.pushContext(keyContext);
				}
			}

			/**
				@param	{Event} event
			*/
			function onBlur(event) {
				if (focused) {
					focused = false;
					vs.Keys.popContext();
				}
			}

			/**
				@this	{zfatlas.widget.LabelSearch}
				@param	{Event} event
			*/
			function onType(event) {
				var text = input.value;

				if (text !== this.lastText) {
					this.generateList(this.searchBySubstring((this.lastText = text || ""), true));
				}
			}

			// when clicking in the element (specifically on DIV.terms)
			function onClick(event) {
				var target = event.findElement('DT'),
					labels, labelsOnThisLevel;

				if (target) {
					labels = this.searchBy('term', target.innerHTML.stripTags());

					if (labels.length) {
						// prefer current level, prefer nearest
						labelsOnThisLevel = this.searchByLevel(this.viewer.z, labels);
						if (labelsOnThisLevel.length)
							labels = labelsOnThisLevel;

						this.centerOn(this.sortByDistance(this.viewer.getCenter(true), labels)[0], true);
						// thumbnail bug hack:
						this.viewer.widgets['thumbnail'] && this.viewer.widgets['thumbnail'].align();
					}
				}
			}

			function clearInput(event) {
				event.stop();
				this.clearInput().generateList();
			}

			// create key context for this instance
			for (key in this.keyBindings) {
				keyBindings[key] = this.keyBindings[key].bind(this);
			}
			keyContext = new vs.KeyContext(new vs.KeyBindingGroup(keyBindings));

			// create elements
			this.element = new Element('DIV').addClassName(this.cssClassName)
				.insert(new Element('DIV').addClassName("input-100-wrapper").insert(input).insert(clear))
				.insert(terms);

			// set observers
			this.observers.push(
				[input, "focus", onFocus]
				, [input, "blur", onBlur]
				, [input, "keyup", onType.bindAsEventListener(this).debounce(150)]
				, [terms, "click", onClick.bindAsEventListener(this)]
				, [clear, "click", clearInput.bindAsEventListener(this)]
				//, [this.element, "mousedown", function(event) { event.stopPropagation() }]
			);

			// call superclass method
			vs.widget.Labels.prototype.initialize.call(this);
		},

// ----------------------------------------------------------------------------
/**
	@return	{zfatlas.widget.LabelSearch}
*/
		clearInput: function() {
// ----------------------------------------------------------------------------
			this.element.select('INPUT').first().value = this.lastText = "";
			return this;
		},

// ----------------------------------------------------------------------------
		/**
			@param	{Event} event
		*/

		onClick: function(event) {
// ----------------------------------------------------------------------------
			var labelElement = this.findElementFromEvent(event),
				label, dt, dl;

			if (labelElement && (label = this.searchByElement(labelElement))) {
				// clear INPUT, if necessary
				// generateList() should probably be conditional on if lastText != ""
				this.clearInput().generateList();
				// look up label in sidebar and scroll to it/highlight it
				dt = this.element
					.select('DT')
					.find(function(dt){ return dt.innerHTML == label['term'] });

				if (dt) {
					dl = dt.up('DL');
					if (dl) {
						dl.scrollIntoViewIfNecessary(Element.SCROLL_MIDDLE, true).highlight(this.effectOptions);
					}
				}
			}
		},

// ----------------------------------------------------------------------------
/**
	@param	{Ajax.Response} response
	@param	{Array|Object} headerJSON
*/

		ajaxSuccess: function(response, headerJSON) {
// ----------------------------------------------------------------------------
			// call superclass method
			vs.widget.Labels.prototype.ajaxSuccess.apply(this, arguments);

			// generate list
			this.generateList();
		},

// ----------------------------------------------------------------------------
/**
	@param	{Array=} labels
*/

		generateList: function(labels) {
// ----------------------------------------------------------------------------
			var term_list = this.element.select("DIV.terms").first(),
				label, dls = [];

			labels = labels || this.labels || [];

			// remove duplicate labels and sort by term
			labels = this.sortByTerm(
				labels.unique(function(a, b) {
					return a['term_id'] - b['term_id'];
				})
			);

			if (this.labels.length) {
				if (labels.length) {
					// generate list
					for (var i = 0, n = labels.length; i < n; i++) {
						label = labels[i];
						dls.push("<DL><DT>", label['term'], "</DT>");
						if (label['definition'])
							dls.push("<DD>", label['definition'], "</DD>");
						dls.push("</DL>");
					}
					term_list.update(this.lastText
						? dls.join('').highlightHTML('<span class="highlight">', '</span>', this.lastText.split(/\s+/))
						: dls.join('')
					);
				} else {
					// no matching label text
					term_list.update(new Element('P').addClassName("no-content").insert("No matches"));
				}
			} else {
				// no labels on this slide
				term_list.update(new Element('P').addClassName("no-content").insert("No labels present on this slide"));
			}
			return this;
		}
	}
);

