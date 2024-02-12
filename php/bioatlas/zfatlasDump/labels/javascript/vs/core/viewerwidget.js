/**
	vs.ViewerWidget - the base class for vs.Viewer widgets

	Widgets provide extra, modular functionality to the basic Viewer object
	and are added through the addWidget() method.

	ViewerWidget provides some automagic functionality for widget subclasses.

		- Automatic registration of on{Event} methods with parent Viewer
			(Where {Event} is one of:  Attach Click Dblclick Detach Drop Grab Load Move Resize Tile Unload Zoom)
		- Automatic registration of event listeners through the observers array.
		- Automatic execution of initialize() method on instantiation, if the method is defined.
		- Automatic execution of onDestroy() method on destroy(), if the method is defined.
		- If visible is false, hide() is automatically called on initialization.

	@constructor
	@param	{vs.Viewer} parent
	@param	{Object} options
*/
vs.ViewerWidget = function(parent, options) {
// ----------------------------------------------------------------------------
	var p, events = vs.ViewerWidget.events;

	if (IN_DEVELOPMENT) {
		if (this.constructor == vs.ViewerWidget)
			throw new Error("vs.ViewerWidget is an abstract class and should not be instantiated directly.");

		if (!(parent instanceof vs.Viewer))
		 	throw new Error("vs.ViewerWidget requires its first argument to be an instance of vs.Viewer.");
	}

	// Extend widget with options
	vs.env.PropertyMap(this, options);

	// Trade references with parent vs.Viewer
	this.viewer = parent;
	if (this.widgetHandle)
		parent.widgets[this.widgetHandle] = this;

	// Initialize observers array
	this.observers = [];

	// Call initialize(), if it exists
	this.initialize && this.initialize();

	// Automatically register this.on<Event> functions
	for (p in events) {
		if (p in this && typeof this[p] == "function") {
			parent.onEvent(events[p], this, this[p]);
		}
	}

	// Register "autodestruct" method
	if (this.destroy) this.viewer.onEvent("destroy", this, this.destroy);

	this._register();

	if (this.onAttach && parent.attached())
		this.onAttach(parent.container);

	if (this.onLoad && parent.loaded())
		this.onLoad(parent.slide, parent.z, parent.getCenter());
};

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string}		*/	vs.ViewerWidget.prototype.widgetHandle;
/** @type {vs.Viewer}	*/	vs.ViewerWidget.prototype.viewer;
/** @type {Array}		*/	vs.ViewerWidget.prototype.observers;
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
vs.ViewerWidget.prototype._register = function() {
// ----------------------------------------------------------------------------
	// Register observers using Prototype's Event.observe(element, event, function)
	var o, i = this.observers.length;
	while (i--) {
		o = this.observers[i];
		Event.observe(o[0], o[1], o[2]);
	}
};

// ----------------------------------------------------------------------------
vs.ViewerWidget.prototype._unregister = function() {
// ----------------------------------------------------------------------------
	// Automatically unregister observers
	var o, i = this.observers.length;
	while (i--) {
		o = this.observers[i];
		Event.stopObserving(o[0], o[1], o[2]);
	}
};

// ----------------------------------------------------------------------------
vs.ViewerWidget.prototype.destroy = function() {
// ----------------------------------------------------------------------------
	// Unregister event observers
	this._unregister();

	// Remove ourselves from all events
	this.viewer.unEvent(this);

	// Call class-specific destroy method, if it exists.
	this.onDestroy && this.onDestroy();

	// Remove reference from parent
	if (this.widgetHandle && this.viewer.widgets[this.widgetHandle])
		delete this.viewer.widgets[this.widgetHandle];

	// Remove parent Viewer reference
	delete this.viewer;
};

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Note the absence of "Destroy" in the events list; it actually gets wrapped in
// the ViewerWidget method destroy().
/** @type {Object} */ vs.ViewerWidget.events = Object.clone(vs.Viewer.events);
delete vs.ViewerWidget.events.onDestroy;


// ----------------------------------------------------------------------------
/**
	@constructor
	@extends {vs.ViewerWidget}
*/
// ----------------------------------------------------------------------------
vs.ElementWidget = vs.util.extend(vs.ViewerWidget, /** @lends {vs.ElementWidget.prototype} */ {
// ----------------------------------------------------------------------------
	/** @type {Element} */
	element:		null,
	/** @type {Element} */
	container:		null,
	cssClassName:	"",
	minimized:		false,
	noPropagation: function(event) {
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
	},
	/**
		@return	{vs.ElementWidget}
	*/
	show: function() {
		this.minimized && this.toggle();
		return this;
	},
	/**
		@return	{vs.ElementWidget}
	*/
	hide: function() {
		this.minimized || this.toggle();
		return this;
	},
	/**
		@return	{vs.ElementWidget}
	*/
	toggle: function() {
		this.minimized = !this.minimized;
		this.element.toggleClassName("minimized");
		return this;
	},
	/** @param {Element} container */
	onAttach: function(container) {
		if (this.minimized) this.hide();
		$(this.container || container).appendChild(this.element);
	},
	onDetach: function() {
		if (this.element.parentNode)
			this.element.parentNode.removeChild(this.element);
	},
	/**
		@param	{vs.VirtualSlide=} slide
		@param	{number=} startzoom
		@param	{Array=} startpos
	*/
	onLoad: function(slide, startzoom, startpos) {
		if (this.visible)
			this.element.show();
	},
	onUnload: function() {
		if (this.visible)
			this.element.hide();
	},
	destroy: function() {
		vs.ViewerWidget.prototype.destroy.call(this);
		vs.ElementWidget.prototype.onDetach.call(this);

		// Remove element reference
		this.element = null;
	}
});

