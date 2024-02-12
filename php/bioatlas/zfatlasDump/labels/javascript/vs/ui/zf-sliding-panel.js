/**
	zfatlas.ui.SlidingPanel

		An ElementWidget that holds a list of ElementWidgets and slides
		out of view to free up more area for the slide content.

	---------------------------------------------------------------------------

	<div class="zf-ui-sliding-panel right">
		<div class="control"></div>
		<div class="content-wrapper">
			<div class="content">
				<div class="zf-ui-panel-widget">
					<div class="title"><!-- CONTROL BAR TITLE HERE --></div>
					<div class="wrapper"><!-- WIDGET ELEMENT HERE --></div>
				</div>
			</div>
		</div>
	</div>

	---------------------------------------------------------------------------

	@constructor
	@extends {vs.ElementWidget}
*/
// ----------------------------------------------------------------------------
zfatlas.ui.SlidingPanel = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
// ----------------------------------------------------------------------------
	vs.ElementWidget);
// ----------------------------------------------------------------------------
// PROPERTIES:
// ----------------------------------------------------------------------------
/** @type {string}	*/	zfatlas.ui.SlidingPanel.prototype.cssClassName = "zf-ui-sliding-panel";
/** @type {string}	*/	zfatlas.ui.SlidingPanel.prototype.placement = "right";
/** @type {string}	*/	zfatlas.ui.SlidingPanel.prototype.widgetHandle = 'panel';
/** @type {Array}	*/	zfatlas.ui.SlidingPanel.prototype.widgets;
/** @type {Element}	*/	zfatlas.ui.SlidingPanel.prototype.content;
/** @type {Element|undefined}	*/	zfatlas.ui.SlidingPanel.prototype.activePanel;
/** @type {Object}	*/	zfatlas.ui.SlidingPanel.prototype.effectOptions = {
	'duration':		0.2,
	'transition':	Effect.Transitions.sinoidal,
	'queue':		{'position': "end", 'scope': "sliding-panel"}
};
// ----------------------------------------------------------------------------
// METHODS:
// ----------------------------------------------------------------------------
zfatlas.ui.SlidingPanel.prototype.initialize = function() {
// ----------------------------------------------------------------------------
	this.widgets = [];
	this.element = new Element('DIV').addClassName(this.cssClassName).addClassName(this.placement)
		.observe("dblclick", this.noPropagation)
		.observe("mousedown", this.noPropagation)
		.insert(new Element('DIV', {'title': "Click to toggle panel visibility [spacebar]"})
			.addClassName("control")
			.observe("click", this.toggle.bind(this)))
		.insert(new Element('DIV').addClassName("content-wrapper")
			.insert(this.content = new Element('DIV').addClassName("content"))
		);
	this.element.observe("click", function(event) {
		var target = event.findElement('A');
		if (target) {
			event.stop();
			window.open(target.href, "zfatlas");
		}
	});
};

// ----------------------------------------------------------------------------
/**
	@this	{Element}
*/
zfatlas.ui.SlidingPanel.prototype.onScroll = function() {
// ----------------------------------------------------------------------------
	this.scrollTop = this.scrollLeft = 0;
};

// ----------------------------------------------------------------------------
zfatlas.ui.SlidingPanel.prototype.onAttach = function(container) {
// ----------------------------------------------------------------------------
	vs.ElementWidget.prototype.onAttach.apply(this, arguments);
	container.observe("scroll", this.onScroll);
};

// ----------------------------------------------------------------------------
zfatlas.ui.SlidingPanel.prototype.onDetach = function(container) {
// ----------------------------------------------------------------------------
	vs.ElementWidget.prototype.onDetach.apply(this, arguments);
	container.stopObserving("scroll", this.onScroll);
};

// ----------------------------------------------------------------------------
/**
	@param	{string} title
	@param	{Function} Widget
	@param	{Object=} widgetOptions
	@param	{Function=} onOpen
	@param	{Function=} onClose
	@return	{zfatlas.ui.SlidingPanel}
*/
zfatlas.ui.SlidingPanel.prototype.addWidget = function(title, Widget, widgetOptions, onOpen, onClose) {
// ----------------------------------------------------------------------------
	var widget,
		emptyFunction = Prototype.emptyFunction,
		wrapper = new Element('DIV').addClassName("wrapper").setStyle({'display': "none"}),
		subpanel = new Element('DIV').addClassName("zf-ui-panel-widget");

	try {
		widget = new Widget(this.viewer, Object.extend({container: wrapper}, Object.clone(widgetOptions)));
	} catch(e) {
		console.error("[zfatlas.ui.SlidingPanel] addWidget(); failed to create widget: %s", e.message);
	}

	if (widget) {
		this.widgets.push({
			widget: widget,
			onOpen: onOpen ? onOpen.bind(widget, this) : emptyFunction,
			onClose: onClose ? onClose.bind(widget, this) : emptyFunction
		});

		this.content.insert(subpanel.insert(new Element('DIV').addClassName("title")
				.insert(title)
				.insert(new Element('DIV').addClassName("status"))
				.observe("click", this.clickHandler.bind(this)))
			.insert(wrapper)
		);
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{Element|Object} target
	@param	{?string} title
	@param	{string=} status
	@return	{zfatlas.ui.SlidingPanel}
*/
zfatlas.ui.SlidingPanel.prototype.updateTitle = function(target, title, status) {
// ----------------------------------------------------------------------------
	target = target instanceof Element ? target : target.element;

	var panel = target && target.up(".zf-ui-panel-widget"),
		titleElement = panel && panel.select(".title").first(),
		statusElement = titleElement && titleElement.select(".status").first();

	if (null !== title)
		titleElement.update(title).insert(statusElement);

	if (null !== status)
		statusElement.update(status);

	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{Element=} panel
	@return	{Element|undefined}
*/
zfatlas.ui.SlidingPanel.prototype.setActivePanel = function(panel) {
// ----------------------------------------------------------------------------
	var activePanel = this.activePanel;
	if (activePanel)
		activePanel.removeClassName("active");
	if (panel)
		panel.addClassName("active")
	return (this.activePanel = panel);
};

// ----------------------------------------------------------------------------
/**
	@param	{Element} target
	@return	{Element|undefined}
*/
zfatlas.ui.SlidingPanel.prototype.getWidgetPanel = function(target) {
// ----------------------------------------------------------------------------
	var container = target && target.up(".zf-ui-panel-widget");

	return container
		? container.select(".wrapper").first()
		: container;
};

// ----------------------------------------------------------------------------
/**
	@return	{zfatlas.ui.SlidingPanel}
*/
zfatlas.ui.SlidingPanel.prototype.closeWidget = function() {
// ----------------------------------------------------------------------------
	var activePanel = this.activePanel;
	if (activePanel) {
		// close panel
		new Effect.BlindUp(activePanel, this.effectOptions);
		// remove active class name
		this.setActivePanel();
	}

	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
zfatlas.ui.SlidingPanel.prototype.clickHandler = function(event) {
// ----------------------------------------------------------------------------
	var targetPanel = this.getWidgetPanel(Event.findElement(event));
	if (targetPanel == this.activePanel) {
		// close
		this.closeWidget();
	} else {
		// open
		this.selectWidget(targetPanel);
	}
};

// ----------------------------------------------------------------------------
/**
	@param	{Element} target
	@return	{Object|undefined}
*/
zfatlas.ui.SlidingPanel.prototype.getWidget = function(target) {
// ----------------------------------------------------------------------------
	return this.widgets.find(function(w) { return w.widget.container == target });
};

// ----------------------------------------------------------------------------
/**
	@param	{Element|Object} target
	@param	{Function=} callback
	@return	{zfatlas.ui.SlidingPanel}
*/
zfatlas.ui.SlidingPanel.prototype.selectWidget = function(target, callback) {
// ----------------------------------------------------------------------------
	var targetPanel = this.getWidgetPanel(target instanceof Element ? target : target.element),
		activePanel = this.activePanel,
		widget = this.getWidget(targetPanel),
		effects = [],
		sync = {'sync': true};

	// make sure the main panel itself is visible
	this.show();

	if (!targetPanel || targetPanel == activePanel) {
		callback && callback();
		return;
	}

	if (activePanel)
		effects.push(new Effect.BlindUp(activePanel, sync));

	effects.push(new Effect.BlindDown(this.setActivePanel(targetPanel), Object.extend({
		'afterFinish': widget ? (callback || widget.onOpen) : Prototype.emptyFunction
	}, sync)));

	new Effect.Parallel(effects, this.effectOptions);

	return this;
};

// ----------------------------------------------------------------------------
/**
	@return	{zfatlas.ui.SlidingPanel}
*/
zfatlas.ui.SlidingPanel.prototype.toggle = function() {
// ----------------------------------------------------------------------------
	var dimension = (this.placement == "top" || this.placement == "bottom")
		? "height" : "width",
		direction = (this.minimized = !this.minimized) ? "-" + this.element.getStyle(dimension) : "0px",
		options = {};

	// make sure no INPUTs are focused, yet hidden
	if (this.minimized && document.activeElement && document.activeElement.descendantOf(this.element))
		document.activeElement.blur();

	Object.extend(options, this.effectOptions);
	options.style = this.placement + ":" + direction;
	new Effect.Morph(this.element, options);

	return this;
};

