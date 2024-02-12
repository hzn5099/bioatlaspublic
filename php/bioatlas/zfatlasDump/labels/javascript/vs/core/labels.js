
// Initialize vs.label namespace


	vs.label = {};


// ----------------------------------------------------------------------------
// Utilities
// ----------------------------------------------------------------------------

	// Universal label element id setter/getters
	// ------------------------------------------------------------------------
	/**
		@param	{Element} vslElement
		@return	string|undefined
	*/
	// ------------------------------------------------------------------------
	vs.label.getId = function(vslElement) {
		var m, id = vslElement.id || "";
		if (m = (id.match(/^vs\d+_(\d+)$/) || id.match(/^(temp_\d+)$/)))
			return m[1];

		return m;
	};

	// ------------------------------------------------------------------------
	/**
		@param	{vs.Viewer} viewer
		@param	{Object} vslObject
		@return	string
	*/
	vs.label.setId = function(viewer, vslObject) {
	// ------------------------------------------------------------------------
		var id;
		if (vslObject['id'])
			id = "vs%d_%d".sprintf(viewer.id, vslObject['id']);
		else if ('temp_id' in vslObject)
			id = vslObject['temp_id'];
		else do { // should this *really* set a property on vslObject?
			id = vslObject['temp_id'] = "temp_" + Math.floor(Math.random() * Math.pow(2,32));
		} while (document.getElementById(id));

		return id;
	};

// ----------------------------------------------------------------------------
// Label classes
// ----------------------------------------------------------------------------

	/** @type {Object.<string, vs.label.__prototype>} */
	vs.label.classes = {};

	// ------------------------------------------------------------------------
	/**
		defineClass(); creates a function extended from vs.label.__prototype
		and instantiates it, saving the reference on the vs.label.classes object.
		Extend first class prototype constructor or vs.label.__prototype if that
		does not exist add remaining classPrototypes (if any) and pass to
		vs.util.extend.

		- Calling defineClass with no classPrototypes will defined a class which
		inherits the default label class.

		- Any number of classPrototypes maybe specified; later properties will
		override earlier ones.

		@param	{string} className
		@param	{...Object} classPrototypes
	*/
	vs.label.defineClass = function(className, classPrototypes) {
	// ------------------------------------------------------------------------
		var baseClass = vs.label.__prototype,
			prototypes = $A(arguments).slice(1);

		if (arguments.length > 1 && arguments[1].constructor instanceof vs.label.__prototype)
			baseClass = prototypes.shift().constructor;

		prototypes.unshift(baseClass);
		prototypes.push({'className': className});

		/** @type {vs.label.__prototype} */
		vs.label.classes[className] = new (vs.util.extend.apply(null, prototypes));
	};


// ----------------------------------------------------------------------------
// Label class prototype
// ----------------------------------------------------------------------------

	// ------------------------------------------------------------------------
	/** @constructor */
	vs.label.__prototype = function() {};

	// ------------------------------------------------------------------------
	/** @type {string} */
	vs.label.__prototype.prototype.cssClassName = "vsLabel";

	// ------------------------------------------------------------------------
	/**
		@param	{vs.Viewer} viewer
		@param	{Array} vslObjects
		@return	{Array}

		NOTE!  (Yes, with an exclaimation point.)  If we assume that any class
		that has mixed in these methods has a 'viewer' property, we don't need
		to provide the argument.
	*/
	vs.label.__prototype.prototype.create = function (viewer, vslObjects) {
	// ------------------------------------------------------------------------

		var label,
			vslElements = [],
			n = vslObjects.length,
			r = viewer.slide.getRatio(viewer.z),
			prototypeLabel = new Element('DIV')
				.addClassName(this.cssClassName)
				.addClassName("level_" + viewer.z)
				.writeAttribute("vslabel")
				.insert(new Element('DIV').addClassName('pointer').insert(new Element('DIV').addClassName('pointer-fill')));

		// vslElements is an array in the same format expected by arguments
		// to vs.Viewer#addToSlide:  [ element, x, y, width, height ]
		while (n--) {
			label = vslObjects[n];
			vslElements.push([
				prototypeLabel
					.cloneNode(true)
					.insert(label['term'])
					.writeAttribute("id", vs.label.setId(viewer, label)),
				r * label['x'],
				r * label['y'],
				1,
				1
			]);

		}
		return vslElements;
	};

	// ------------------------------------------------------------------------
	/**
		@param	{Element} element
		@return	{Element}
	 */
	vs.label.__prototype.prototype.highlight = function (element) {
	// ------------------------------------------------------------------------
		return element.addClassName("highlighted");
	};

	// ------------------------------------------------------------------------
	/**
		@param	{Element} element
		@return	{Element}
	 */
	vs.label.__prototype.prototype.unhighlight = function (element) {
	// ------------------------------------------------------------------------
		return element.removeClassName("highlighted");
	};


// ----------------------------------------------------------------------------
// Create a default label class
// ----------------------------------------------------------------------------

	vs.label.defineClass("default");

