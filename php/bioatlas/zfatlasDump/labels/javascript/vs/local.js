// ----------------------------------------------------------------------------
// Local vs.* definitions for http://zfatlas.psu.edu/
// ----------------------------------------------------------------------------

// Create zfatlas.* namespace
var zfatlas = {
	ui: {},
	app: {},
	widget: {}
};

// ----------------------------------------------------------------------------
/** @type {number} */
zfatlas.ajaxCountSlideTimeout	= 5000;

// ----------------------------------------------------------------------------
zfatlas.ajaxCountSlide = function() {
	var viewer = vs.Viewer.instances[0];
	if (viewer) new Ajax.Request("access.ajax.php", {
		'parameters': {
			'clientWidth':	viewer.containerWidth,
			'clientHeight':	viewer.containerHeight,
			'slide':		viewer.slide.id
		}
	});
};

// ----------------------------------------------------------------------------
// vs.VirtualSlide
// ----------------------------------------------------------------------------

	vs.VirtualSlide.prototype.baseURL	= "tile.jpeg.php";
	vs.VirtualSlide.prototype.bgColor	= "#FFF";
	vs.VirtualSlide.prototype.power		= 40;

	vs.VirtualSlide.prototype.url = function(x, y, z, i) {
		return [
			this.baseURL,
			"?s=", this.id,
			"&z=", z,
			"&i=", i
		].join('');
	};

// ----------------------------------------------------------------------------
// vs.Viewer
// ----------------------------------------------------------------------------

	vs.Viewer.prototype.fetchURL		= "slide.ajax.php";

	vs.Viewer.prototype.ajaxFailure = function(response) {
		new zfatlas.ui.InsetServerError();
	};

	vs.Viewer.prototype.ajaxTimeout = function(response) {
		new zfatlas.ui.InsetServerError();
	};

// ----------------------------------------------------------------------------
// ZFAtlas label class definitions
// ----------------------------------------------------------------------------

	// ----------------------------------------------------------------------------
	vs.label.defineClass("default", /** @lends {vs.label.__prototype.prototype} */ {
	// ----------------------------------------------------------------------------
		cssClassName: "",

		/**
			@this {vs.label.__prototype}
			@param	{vs.Viewer} viewer
			@return	{Element}
		*/
		getPrototypeLabel: function(viewer) {
			return new Element('DIV')
				.addClassName("vsLabel " + this.className)
				.addClassName("level_" + viewer.z)
				.writeAttribute("vslabel")
				.insert(new Element('DIV').addClassName("label")
					.insert(new Element('DIV').addClassName("content"))
					)
				.insert(new Element('DIV').addClassName("pointer").insert(new Element('DIV').addClassName("pointer-fill")));
		},

		/** @this {vs.label.__prototype} */
		update: function(element, label) {
			element.firstChild.firstChild.insert(label["annotation"] && !label["term"]
				? new Element('DIV').addClassName("annotation-icon")
				: label["term"]);
			return element;
		},

		/** @this {vs.label.__prototype} */
		create: function(viewer, vslObjects) {

			var label,
				element,
				vslElements = [],
				n = vslObjects.length,
				r = viewer.slide.getRatio(viewer.z),
				prototypeLabel = this.getPrototypeLabel(viewer);

			// vslElements is an array in the same format expected by arguments
			// to viewer.addToSlide():  [ element, x, y, width, height ]
			var z = Math.pow(2, viewer.z);
			while (n--) {
				label = vslObjects[n];
				element = prototypeLabel.cloneNode(true).writeAttribute("id", vs.label.setId(viewer, label));
				if (!(label['z'] & z))
					element.addClassName(label['z'] < z ? "below" : "above");
				vslElements.push([
					// this.update(prototypeLabel.cloneNode(true).writeAttribute("id", vs.label.setId(viewer, label)), label),
					this.update(element, label),
					Math.round(r * label['x']),
					Math.round(r * label['y']),
					1,
					1
				]);
			}

			return this.measure(viewer, vslElements);
		},
		/**
			@param	{vs.Viewer} viewer
			@param	{Array} vslElements
			@return {Array}
		*/
		measure: function(viewer, vslElements){ return vslElements }
	});

	// ----------------------------------------------------------------------------
	vs.label.defineClass("centered", vs.label.classes["default"], {
	// ----------------------------------------------------------------------------
		center:	true,
		middle:	true,
		// ----------------------------------------------------------------------------
		/**
			@this {vs.label.__prototype}
			@param	{vs.Viewer} viewer
			@param	{Array} vslElements
			@return {Array}
		*/
		measure: function (viewer, vslElements) {
		// ----------------------------------------------------------------------------

			var n, w, h, label,
				container = viewer.createElement().remove().setStyle({visibility:"hidden"});

			// Add label elements to container
			n = vslElements.length;
			while (n--)
				container.appendChild(vslElements[n][0]);

			// Add container to DOM
			viewer.container.appendChild(container);

			// Measure label dimensions
			n = vslElements.length;
			while (n--) {
				label = vslElements[n][0];
				if (this.center) label.firstChild.style.marginLeft = -(label.firstChild.offsetWidth  >> 1) + "px";
				if (this.middle) label.firstChild.style.marginTop  = -(label.firstChild.offsetHeight >> 1) + "px";
			}

			// Remove container
			container.remove();

			return vslElements;
		}

	});
	// ----------------------------------------------------------------------------
	// Center-aligned classes
	// ----------------------------------------------------------------------------
	vs.label.defineClass("top-center", vs.label.classes["centered"], { middle: false });
	vs.label.defineClass("bottom-center", vs.label.classes["top-center"]);
	// ----------------------------------------------------------------------------
	// Middle-aligned classes
	// ----------------------------------------------------------------------------
	vs.label.defineClass("left-middle", vs.label.classes["centered"], { center: false });
	vs.label.defineClass("right-middle", vs.label.classes["left-middle"]);
	// ----------------------------------------------------------------------------
	// Left/right-aligned classes
	// ----------------------------------------------------------------------------
	vs.label.defineClass("top-left2", vs.label.classes["default"]);
	vs.label.defineClass("top-right2", vs.label.classes["default"]);
	vs.label.defineClass("bottom-left2", vs.label.classes["default"]);
	vs.label.defineClass("bottom-right2", vs.label.classes["default"]);
	vs.label.defineClass("left-top", vs.label.classes["default"]);
	vs.label.defineClass("right-top", vs.label.classes["default"]);
	// ----------------------------------------------------------------------------

