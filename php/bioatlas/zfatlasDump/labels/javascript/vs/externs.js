/** @const */ Event.KEY_LEFT	= 37;
/** @const */ Event.KEY_RIGHT	= 39;
/** @const */ Event.KEY_ESC		= 27;
/** @const */ Event.KEY_TAB		= 9;
/** @const */ Event.KEY_RETURN	= 13;
/** @const */ Event.KEY_UP		= 38;
/** @const */ Event.KEY_DOWN	= 40;

// ----------------------------------------------------------------------------
// Firebug, et al., declarations
// ----------------------------------------------------------------------------

	var console = {};
	/** @type {function(...)} */
	console.log = function(){};
	/** @type {function(...)} */
	console.warn = function(){};
	/** @type {function(...)} */
	console.error = function(){};
	/** @type {function(...)} */
	console.trace = function(){};

// ----------------------------------------------------------------------------
// Prototype extern declarations
// ----------------------------------------------------------------------------

	var Prototype = {};
	Prototype.Browser = {};
	/** @type {boolean} */
	Prototype.Browser.Opera;
	/** @type {boolean} */
	Prototype.Browser.IE;
	/** @type {boolean} */
	Prototype.Browser.WebKit;
	Prototype.emptyFunction = function(){};
	/** @param	{*} x
		@return	{*} */
	Prototype.K = function(x){};

	/** @param	{string|Element} element
		@return {Element} */
	function $(element){};

	/** @param	{Array|Arguments} iterable
		@return {Array} */
	function $A(iterable){};

	/** @param	{string} str
		@return	{Array.<string>} */
	function $w(str){};

	var Ajax = {};
	/** @constructor */
	Ajax.Base = function(){};
	// NOTE: to avoid a warning, this must be defined as a
	// record type due to a possible bug (#1164) in Closure
	/** @type {{
		asynchronous: boolean,
		contentType: string,
		encoding: string,
		parameters: Object,
		postBody: string,
		requestHeaders: Object,
		evalJS: boolean,
		evalJSON: boolean,
		sanitizeJSON: boolean,
		onCreate: function(Ajax.Request, Ajax.Response),
		onSuccess: function(Ajax.Response, Object),
		onFailure: function(Ajax.Response, Object),
		onComplete: function(Ajax.Request, Ajax.Response),
		onException: function(Ajax.Request, Error),

		onTimeout: function(Ajax.Response, Object),
		startpos: Array.<number>,
		startzoom: number,
		absCoords: boolean,
		initiator: Object

	}} */
	Ajax.Base.prototype.options;

	/** @constructor
		@extends {Ajax.Base}
		@param	{string} url
		@param	{Object=} options
	*/
	Ajax.Request = function(url, options){};
	/** @param	{string} url */
	Ajax.Request.prototype.request = function(url){};
	/** @param {number} readyState */
	Ajax.Request.prototype.respondToReadyState = function(readyState){};
	/** @param {Error} exception */
	Ajax.Request.prototype.dispatchException = function(exception){};
	/** @return {boolean} */
	Ajax.Request.prototype.success = function(){};
	/** @type {boolean} */
	Ajax.Request.prototype._complete;
	/** @type {XMLHttpRequest} */
	Ajax.Request.prototype.transport;

	/** @constructor
		@param {Ajax.Request} request
	*/
	Ajax.Response = function(request){};
	/** @type {number} */
	Ajax.Response.prototype.status;
	/** @type {string} */
	Ajax.Response.prototype.statusText;
	/** @type {number} */
	Ajax.Response.prototype.readyState;
	/** @type {string} */
	Ajax.Response.prototype.responseText;
	/** @type {(Array|Object)} */
	Ajax.Response.prototype.responseXML;
	/** @type {(Array|Object)} */
	Ajax.Response.prototype.responseJSON;
	/** @type {(Array|Object)} */
	Ajax.Response.prototype.headerJSON;
	/** @type {Ajax.Request} */
	Ajax.Response.prototype.request;
	/** @type {XMLHttpRequest} */
	Ajax.Response.prototype.transport;
	/** @constructor
		@extends {Ajax.Request}
		@param	{Element} container
		@param	{string} url
		@param	{Object=} options
	*/
	Ajax.Updater = function(container, url, options){};
	Ajax.Responders = {};
	/** @param {Object} responder */
	Ajax.Responders.register = function(responder){};
	/** @param {Object} responder */
	Ajax.Responders.unregister = function(responder){};
	/**
		@param	{string} callback
		@param	{Ajax.Request} request
		@param	{Ajax.Response} transport
		@param	{Object=} json
	*/
	Ajax.Responders.dispatch = function(callback, request, transport, json){};

	var Class = {};
	/** @type {function((Function|Object), ...[Object])} */
	Class.create = function(){};

	/** @type {Object} */
	document.viewport;
	/** @return {Object.<string, number>} */
	document.viewport.getScrollOffsets = function() {};
	/** @return	{number} */
	document.viewport.getHeight = function() {};

	/** @param	{Node|Window} element
		@param	{string} eventName
		@param	{Function} handler
	*/
	Event.observe = function(element, eventName, handler){};
	/** @param	{Node|Window} element
		@param	{string} eventName
		@param	{Function} handler
	*/
	Event.stopObserving = function(element, eventName, handler){};
	/** @param {Event} event */
	Event.stop = function(event){};
	/** @return {boolean} */
	Event.prototype.isLeftClick = function(){};
	Event.prototype.stop = function(){};
	/** @return {Element} */
	Event.prototype.element = function(){};
	/**	@param	{Event} event
		@param	{string=} expression
		@return	{Element}
	*/
	Event.findElement = function(event, expression){};
	/** @type {function(string=):Element} */
	Event.prototype.findElement;
	/** @return	{number} */
	Event.prototype.pointerX = function(){};
	/** @return	{number} */
	Event.prototype.pointerY = function(){};
	/** @type Array */
	Event.prototype.touches;
	/** @type Array */
	Event.prototype.changedTouches;
	/** @type Array */
	Event.prototype.targetTouches;

	/**
		@constructor
		@extends {Node}
		@param {string} tagName
		@param {Object=} attributes
	*/
	function Element(tagName, attributes){};

	/**	@param	{string} className
		@param	{Element} element
		@return {Element} */
	Element.addClassName = function(element, className){};

	/**	@param	{string} className
		@param	{Element} element
		@return {Element} */
	Element.removeClassName = function(element, className){};

	/**	@param	{string} className
		@return {Element} */
	Element.prototype.addClassName = function(className){};

	/** @return {Array} */
	Element.prototype.ancestors = function(){};

	/**	@param	{Object=} options
		@return {Element} */
	Element.prototype.appear = function(options){};

	/** @return {Element.Offset} */
	Element.prototype.cumulativeOffset = function(){};

	/** @param	{Element|string} element
		@return	{boolean}
	*/
	Element.prototype.descendantOf = function(element){};

	/**	@param	{Object=} options
		@return {Element} */
	Element.prototype.fade = function(options){};

	/** @return {Object} */
	Element.prototype.getDimensions = function(){};

	/** @return	{Element} */
	Element.prototype.getOffsetParent = function(){};
	/** @param	{string} style
		@return	{string|number} */
	Element.prototype.getStyle = function(style){};

	/**	@param	{string} className
		@return {Element} */
	Element.prototype.hasClassName = function(className){};

	/** @return {Element} */
	Element.prototype.hide = function(){};

	/** @return {Element} */
	Element.prototype.highlight = function(){};

	/**	@param {Element|string} content
		@return {Element} */
	Element.prototype.insert = function(content){};

	/** @param	{string} attribute
		@return {string} */
	Element.prototype.readAttribute = function(attribute){};

	/** @return {Element} */
	Element.prototype.remove = function(){};

	/**	@param	{string} className
		@return {Element} */
	Element.prototype.removeClassName = function(className){};

	/** @param	{string=} cssRule
		@param	{number=} index
		@return	{Array} */
	Element.prototype.select = function(cssRule, index){};

	/**	@param {Object} styles
		@return {Element} */
	Element.prototype.setStyle = function(styles){};

	/**	@param	{number} value
		@return {Element} */
	Element.prototype.setOpacity = function(value){};

	/** @return {Element} */
	Element.prototype.show = function(){};

	/** @return {Element} */
	Element.prototype.toggle = function(){};

	/**	@param	{string} className
		@return {Element} */
	Element.prototype.toggleClassName = function(className){};

	/** @param	{string=} cssRule
		@param	{number=} index
		@return	{Array} */
	Element.prototype.up = function(cssRule, index){};

	/**	@param {Element|string=} content
		@return {Element} */
	Element.prototype.update = function(content){};

	/** @return {boolean} */
	Element.prototype.visible = function(){};

	/** @param	{string} attribute
		@param	{*=} value
		@return {Element} */
	Element.prototype.writeAttribute = function(attribute, value){};

	/** @constructor */
	Element.Offset = function(){};
	/** @param	{Element.Offset} offset
		@return	{Element.Offset} */
	Element.Offset.prototype.relativeTo = function(offset){};
	/** @type {number} */
	Element.Offset.prototype.left;
	/** @type {number} */
	Element.Offset.prototype.top;
	/** @type {number} */
	Element.Offset.prototype['0'];
	/** @type {number} */
	Element.Offset.prototype['1'];

	/** @param	{string} eventName
		@param	{Function} handler
		@return {Element} */
	Node.prototype.observe = function(eventName, handler){};

	/** @param	{string} eventName
		@param	{Function} handler
		@return {Element} */
	Node.prototype.stopObserving = function(eventName, handler){};

	/** @param	{Object} source */
	Function.prototype.addMethods = function(source){};
	/** @param	{Object} context
		@return	{Function} */
	Function.prototype.bindAsEventListener = function(context){};
	/** @param	{...} args
		@return {Function} */
	Function.prototype.curry = function(args){};
	/** @param	{...} args
		@return {number} */
	Function.prototype.defer = function(args){};
	/** @param	{...} args
		@return {number} */
	Function.prototype.delay = function(args){};
	/**	@param	{Function} wrapper
		@return	{Function} */
	Function.prototype.wrap = function(wrapper){};

	/** @param	{Function} iterator
		@param	{Object=} context
		@return {Array} */
	Array.prototype.each = function(iterator, context){};
	/** @param	{Function} iterator
		@param	{Object=} context
		@return {boolean} */
	Array.prototype.any = function(iterator, context){};
	/** @param	{Function} iterator
		@return {*} */
	Array.prototype.find = function(iterator){};
	/** @param	{Function} iterator
		@return {Array} */
	Array.prototype.findAll = function(iterator){};
	/**	@param	{...} args
		@return {Array} */
	Array.prototype.without = function(args){};
	/** @return {Array} */
	Array.prototype.flatten = function(){};
	/** @param	{string} method
		@param	{...} args
		@return	{Array} */
	Array.prototype.invoke = function(method, args){};
	/** @param	{string} property
		@return	{Array} */
	Array.prototype.pluck = function(property){};
	/** @return {Array} */
	Array.prototype.uniq = function(){};
	/** @param {*} obj
		@return {boolean} */
	Array.prototype.include = function(obj){};
	/** @return {number} */
	Array.prototype.min = function(){};
	/** @return {number} */
	Array.prototype.max = function(){};
	/** @return	{*} */
	Array.prototype.first = function(){};
	/** @return	{*} */
	Array.prototype.last = function(){};

	/** @param	{number} n
	 	@return	{string} */
	String.prototype.times = function(n){};

	/** @param	{RegExp|string=} separator
		@return {Object} */
	String.prototype.toQueryParams = function(separator){};


	String.prototype.stripTags = function(){};

	/** @param	{Object} destination
		@param	{Object} source
		@return {Object} */
	Object.extend = function(destination, source){};
	/** @param	{Object=} obj
		@return {Object} */
	Object.clone = function(obj){};

	/** @param {*} obj
		@return {boolean} */
	Object.isArray = function(obj){};

	/** @param {Object} obj
		@return {string} */
	Object.toQueryString = function(obj){};

	/** @return {Element|string} */
	Object.prototype.toElement = function(){};



// ----------------------------------------------------------------------------
// Scriptaculous extern declarations
// ----------------------------------------------------------------------------

	var Effect = {};
	/** @constructor */
	Effect.Base = function(){};
	/** @type {number} */
	Effect.Base.prototype.state;
	Effect.Base.prototype.cancel = function(){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string} element
		@param	{Object=} options
	*/
	Effect.Appear = function(element, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string} element
		@param	{Object=} options
	*/
	Effect.BlindDown = function(element, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string} element
		@param	{Object=} options
	*/
	Effect.BlindUp = function(element, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string} element
		@param	{Object=} options
	*/
	Effect.Fade = function(element, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string} element
		@param	{Object=} options
	*/
	Effect.Morph = function(element, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Array} effects
		@param	{Object=} options
	*/
	Effect.Parallel = function(effects, options){};
	/**
		@constructor
		@extends {Effect.Base}
		@param	{Element|string|Object} element
		@param	{number|string} startVal
		@param	{number|string} endVal
		@param	{Object} options
		@param	{string|Function} propertyNameOrCallback
	*/
	Effect.Tween = function(element, startVal, endVal, options, propertyNameOrCallback){};

	Effect.Transitions = {};
	/** @type {Function} */
	Effect.Transitions.sinoidal = function(){};

