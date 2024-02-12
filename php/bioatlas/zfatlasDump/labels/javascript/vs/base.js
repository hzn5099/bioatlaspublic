// vs: virtualslide class + utilities

/** @define {boolean} */
var IN_DEVELOPMENT = true;

// ----------------------------------------------------------------------------
// Define vs.* namespaces, utilities, and environment properties.
// ----------------------------------------------------------------------------
/** @namespace */
var vs = {
	// ------------------------------------------------------------------------
	// Namespaces
	// ------------------------------------------------------------------------
	widget:	{},		// vs.widget.*		- vs.ViewerWidget subclasses
	Prototype:	{},	// vs.Prototype.*	- Extensions to the Prototype library
	// ------------------------------------------------------------------------
	util:	{		// vs.util.*		- Utility functions for the vs.* class.
		/**
		  @param	{Function} superclass
		  @param	{Function|Object=} subclass_constructor
		  @param	{...Object} additional_prototypes
		  @return	{Function}
		*/
		extend: function(superclass, subclass_constructor, additional_prototypes) {

			var subclass, i, n = arguments.length, p;

			if (typeof subclass_constructor != "function") {
				subclass = function(){return superclass.apply(this, arguments)};
				i = 0;
			} else {
				subclass = subclass_constructor;
				i = 1;
			}

			/** @constructor */
			function template(){}						// Define an empty constructor
			template.prototype = superclass.prototype;	// redefine the prototype
			subclass.prototype = new template;			// (this is the extend/inheritance step)

			// Extend prototype
			while (++i < n)
				for (p in arguments[i]) subclass.prototype[p] = arguments[i][p];

			// Return subclass
			return subclass.prototype.constructor = subclass;
		},
		/**
			vs.util.integerQuotient - returns a closure that generates integer quotients, spreading out remainder
			It's expected that you call the closure <n> times; the result will always add up to <m>
			I.e., (100,3) -> 33,33,34, or (200,9) -> 22,22,22,22,23,22,22,22,23
			Useful for when you can't trust cross-browser behavior with respect to table layouts based on percentages.

			Used in vs.widget.Scalebar
			Used in comparison.js

			@param	{number} m
			@param	{number} n
			@return	{Function}

		*/
		integerQuotient: function(m, n) {
			var r = 0, i = 0;
			return function () { // maybe this should accept a boolean that would return the value without advancing it
				var a, q = m/n;
				if (++i < n)
					r += q - (a = Math.floor(r + q));
				else if (i == n)
					a = Math.round(r + q);
				return a;
			}
		}
	},
// ----------------------------------------------------------------------------
	env: (function() {
// ----------------------------------------------------------------------------
/*
	vs.env.query
	vs.env.cookies

		vs.env contains two hashes that are created at run-time.  One is the query
		string for the current location; the other is cookies defined for the current
		domain/path.

		These hashes are pretty basic; for the query key/value pairs, multiple values
		will result in the last being overwritten, i.e., ?f=1&f=2 results in vs.env.query.f == 2.
		Cookies values are returned as strings.

		In the future, this might change.

	vs.env.build

		The build number is currently not implemented but will eventually be incremented
		on each "compile."


	How to handle multiple slides?

	s[]=1&s[]=2&s[]=3
	s=1&s=2&s=3
	s=1,2,3,4

	if (vs.query["s[]"]) // create an impromptu atlas

	It might be best to do it PHP-style, since we're using PHP as well.


*/
// ----------------------------------------------------------------------------
		return {
			cookies:		document.cookie.toQueryParams(/;\s*/),
			query:			window.location.search.toQueryParams(),
			// this identifies as touch device in Win8/IE10
			// isTouchDevice:	('ontouchstart' in window) || ('onmsgesturechange' in window)
			// courtesy of: http://blog.stevelydford.com/2012/03/detecting-touch-hardware-in-ie-10/
			isTouchDevice:	('ontouchstart' in window) || (window.navigator['msMaxTouchPoints'])
			// isTouchDevice:	window.navigator.userAgent.match(/iPad|iPhone/),
		};
	})()
};

// ----------------------------------------------------------------------------
// Extend Native JavaScript Classes
// ----------------------------------------------------------------------------
// Not used, but just here for reference
// Prototype already defines a delay method
// loops is optional
/*
Function.prototype.sleep = function(delay, loops) {

	var counter = 0, interval;
	return interval = loops
		? setInterval((function(code){
			return function() {
				code();
				if (++counter == loops) clearInterval(interval);
			}
		})(this), delay)
		: setTimeout(this, delay);
};
*/
// ----------------------------------------------------------------------------
/**
	@param	{number} ms
	@return	{Function}
*/
Function.prototype.debounce = function(ms) {
// ----------------------------------------------------------------------------
	var timer, method = this;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(method.curry.apply(method, arguments), ms);
	};
};
/**
	sprintf() - mostly compatible with the PHP version

	@param	{...} args
	@return	{string} */
String.prototype.sprintf = function(args){var U,V=arguments,I=0;return this.replace(/%(?:(\d+)\$)?(\+?)(0| |'.)?(-)?(\d*)(?:\.(\d+))?([bcdeEfosuxX%])/g,function(x,n,s,_,l,w,p,t){t=1<<'sbeoxdXfcEu'.indexOf(t);if(t<1)return'%';x=V[n?n-1:I++];x=t&1?x==U?"":x+"":x===!0?1:(t&644?parseFloat(x):parseInt(x,10))||0;s=t&676&&x<0?'-':s;x=t>1&&x<0?t&346?x+4294967296:-x:x;if(t&256)return String.fromCharCode(x%t);p=t&10?t:t&80?16:t&645?p?p:t&1?x.length:6:0;x=t&1?x.slice(0,p):t&516?x.toExponential(p):t&90?x.toString(p):x.toFixed(p);(n=[,s,,t>32?x.toUpperCase():x])[_=="0"?2:l?4:0]=(_?_.slice(-1):" ").times(w-(s+x).length);return n.join("")})}
// ----------------------------------------------------------------------------
/**
	highlightHTML() - takes keywords and highlights them in text.

	The range array contains start-end offsets for keywords within the text.
	To allow a single array to contain this data while being able to tell
	them apart, start offsets are positive and end offsets are negative.
	Overlapping ranges are then consolidated.

	Prefix/suffix are typically '<span class="highlight">' and '</span>',
	respectively.

	@param  {string} prefix
	@param  {string} suffix
	@param  {Array} keywords
	@return {string}
*/
String.prototype.highlightHTML = function(prefix, suffix, keywords) {
	// ----------------------------------------------------------------------------
	var i, n, offset, length, pos, ranges = [], substrings = [],
		// replace HTML tags with spaces
		text = this.replace(/<.*?>/g, function(match) {
			return " ".times(match.length);
		}).toLowerCase();

	// Find start/end indices for all keywords
	for (i = 0, n = keywords.length; i < n; i++) {
		offset = 0;
		if (length = keywords[i].length)
			while (~(pos = text.indexOf(keywords[i], offset))) {
				ranges.push(pos);
				ranges.push(-(offset = pos + length));
			}
	}

	if (ranges.length == 0)
		return this + ""; // String-to-primitive conversion necessary to suppress Closure warning

	// sort by Math.abs(), negatives after positives
	ranges.sort(function(a, b) {
		var A = Math.abs(a), B = Math.abs(b);
		if (A == B)
			return a < b ?  1 : 0;
		else
			return A < B ? -1 : 1;
	});

	// now combine any overlapping ranges
	i = 0;
	while (i < ranges.length - 1) {
		if (ranges[i] < 0) {
			if (ranges[i + 1] < 0)
				ranges.splice(i, 1);
			else
				i++;
		} else if (ranges[i + 1] < 0)
			i++;
		else
			ranges.splice(i + 1, 1);
	}

	// Create substrings
	substrings.push(this.substring(0, ranges[0]));
	ranges.push(this.length);
	for (i = 0, n = ranges.length - 1; i < n; i += 2) {
		// prefix + substr(highlighted_text) + suffix + substr(normal)
		substrings.push(prefix);
		substrings.push(this.substring(ranges[i], -ranges[i + 1]));
		substrings.push(suffix);
		substrings.push(this.substring(-ranges[i + 1], ranges[i + 2]));
	}

	// Join and return resulting string
	return substrings.join('');
};

// ------------------------------------------------------------------------
/**
	@param	{number} v
	@param	{number} m
	@param	{number} M
	@return	{number}
*/
Math.bound = function(v,m,M) {
// ------------------------------------------------------------------------
/*
	(Number) Returns a value bounded by minimum & maximum.
	Used in vs.Viewer
	Used in vs.widget.Thumbnail

	Legible version:
	function(value,minimum,maximum) {
		return this.min(maximum,this.max(minimum,value));
	}

	Faster than Number prototype method (in FF)

	Shorter equivalent (performance is same):
*/
	return M>(v=m<v?v:m)?v:M
};
// ------------------------------------------------------------------------
/**
	@param	{number} floatVal
	@param	{number} decimalPlaces
	@return	{number}
*/
Math.truncate = function(floatVal, decimalPlaces) {
// ------------------------------------------------------------------------
// Removes decimal places to decimalPlaces.  Unlike Number.toFixed(), it doesn't add zeros.
// Used in vs.widget.Scalebar
// Used in vs.widget.ZoomControl
	return Math.round(floatVal * Math.pow(10, decimalPlaces))/Math.pow(10, decimalPlaces);
};
/**
	@param	{number} m
	@param	{number} M
	@return	{boolean}
*/
Number.prototype.between = function(m, M) {
	return this >= m && this <= M;
};

/**
	(Number) Returns the highest-order bit from a bit vector

	NOTE:  This is not sufficient for x == 0, and possibly negative numbers

	Used by vs.widget.Labels

	@return	{number}
*/
Number.prototype.highestOrderBit = function() {
	return 1 << Math.floor(Math.log(this)/Math.log(2));
};

// ------------------------------------------------------------------------
/**
	@param	{*} x
	@return	{boolean}
*/
Array.prototype.contains = function(x) {
// ------------------------------------------------------------------------
/*
	(Boolean) Returns true if x is equal (===) to an element in Array, false
	otherwise.
	(Could also use Prototype's Array.indexOf(); the difference here is that
	contains() returns a boolean value and uses the "===" operator rather than
	"==".)

	Used by vs.ViewerWidget.
*/
	for (var i = 0; i < this.length; i++) if (this[i] === x) return true;
	return false;
};
// ------------------------------------------------------------------------
/**
	@param	{number} r
	@return {Array}
*/
Array.prototype.multiplyBy = function(r) {
// ------------------------------------------------------------------------
/*
	(Array) Returns a copy of the array with each member multiplied by r.
	Obviously, this requires an array of numbers.
*/
	var a = this.concat(),
		i = a.length;
	while (i--) a[i] *= r;
	return a;
};
// ------------------------------------------------------------------------
/**
	@param	{number} val
	@return {number}
*/
Array.prototype.nearest = function(val) {
// ------------------------------------------------------------------------
/*
	(Number) Returns the element closest in value to val.
	Required by vs.widget.ScaleBar
*/
	var dist = Infinity, retval, i = this.length;
	while (i--)
		if (typeof this[i] == 'number' && Math.abs(this[i] - val) < dist) {
			dist = Math.abs(this[i] - val);
			retval = this[i];
		}
	return retval;
};
// ------------------------------------------------------------------------
/** @return {(number|undefined)} */
Array.prototype.maximum = function() { return this.length ? Math.max.apply(null, this) : void 0 };
/** @return {(number|undefined)} */
Array.prototype.minimum = function() { return this.length ? Math.min.apply(null, this) : void 0 };
// ------------------------------------------------------------------------
/*
	(Number) Returns minimum/maximum member of Array.  Faster than Prototype's version.
	Required by vs.widget.ScaleBar
*/

// ------------------------------------------------------------------------
/**
	makeUnique(); removes duplicates (also sorts the array); takes an optional
	callback of the same signature as array.sort() takes (a function that takes
	two parameters and returns -1, 0, or 1 if a < b, a == b, or a > b,
	respectively.  Since the array needs to be sorted in order to remove duplicates
	and equality can be determined from that function, it can be used in the
	duplicate removal as well.

	@param	{Function=} callback
	@return	{Array}
*/
Array.prototype.makeUnique = function(callback) {
// ------------------------------------------------------------------------
	var i = this.length - 1;

	this.sort(callback);

	callback = callback || function(a, b) { return a === b ? 0 : 1 };

	if (i > 0) {
		while (i--) {
			if (callback(this[i], this[i + 1]) === 0) {
				this.splice(i, 1);
			}
		}
	}

	return this;
};

// ------------------------------------------------------------------------
/**
	unique(); returns a unique copy of the array (WITHOUT sorting the original)

	@param	{Function=} callback
	@return	{Array}
*/
Array.prototype.unique = function(callback) {
// ------------------------------------------------------------------------
	return this.concat().makeUnique(callback);
};

// ------------------------------------------------------------------------
// Prototype Library Extensions
// ----------------------------------------------------------------------------

/** @type {boolean} */
Prototype.Browser.IE6 = (!!window.ActiveXObject && !window.XMLHttpRequest);

// ----------------------------------------------------------------------------
/**
	Used in zfatlas.widget.Labels

	@param	{number} n
	@return	{number}
*/
Effect.Transitions.easeOut = function(n) {
// ----------------------------------------------------------------------------
	return Math.pow(n, 0.25);
};

// ----------------------------------------------------------------------------
// Extensions to Element.addMethods
// ----------------------------------------------------------------------------

Element.addMethods( /** @lends {Element} */ {
	/** @const */	SCROLL_TOP:		1,
	/** @const */	SCROLL_MIDDLE:	2,
	/** @const */	SCROLL_BOTTOM:	3,
	/** @const */	SCROLL_NEAREST:	4,
	// ----------------------------------------------------------------------------
	/**
		@param  {Element} element
		@param  {boolean=} position
		@param  {boolean=} smooth
		@param  {Object=} effectOptions
		@return {Element}
	*/
	scrollIntoViewIfNecessary: function(element, position, smooth, effectOptions) {
	// ----------------------------------------------------------------------------
		element = $(element);
		var end, parent = element.getOffsetParent(),
			top = element.offsetTop,
			bottom = top - parent.offsetHeight + element.offsetHeight,
			smaller = parent.offsetHeight < element.offsetHeight;

		// only scroll if element is not completely in view
		if (parent.scrollTop > element.offsetTop || parent.scrollTop < bottom) {
			// set endpoint
			if (smaller || position == Element.SCROLL_TOP || typeof position == "undefined") {
				end = top;
			} else if (position == Element.SCROLL_BOTTOM) {
				end = bottom;
			} else if (position == Element.SCROLL_MIDDLE) {
				end = top - (parent.offsetHeight - element.offsetHeight >> 1);
			} else {
				end = parent.scrollTop < bottom ? bottom : top;
			}

			// scroll to endpoint
			if (smooth) {
				new Effect.Tween(parent, parent.scrollTop, end, Object.extend({
						duration:   0.15,
						transition: Effect.Transitions.sinoidal
					}, effectOptions || {}),
					'scrollTop');
			} else {
				parent.scrollTop = end;
			}
		}

		return element;
	}
});

// (these annotations are necessary for instance methods because their signature differs from the definition above)
/** @type {function(boolean=, boolean=):Element} */
Element.prototype.scrollIntoViewIfNecessary;


// ----------------------------------------------------------------------------
// Add onTimeout callback to Prototype Ajax
// ----------------------------------------------------------------------------
/*
	Defines two new properties on Ajax object, .timer, as returned by window.setTimeout and defaultTimeout
	Defines two new options: onTimeout() callback and timeout, in seconds.
*/

vs.Prototype.AjaxTimeoutResponders = {
	/** @param	{Ajax.Request} request */
	'onCreate': function(request) {
		request.timer = setTimeout(function() {
			// Just in case we've been delayed by intervening callbacks and the request completed in the meantime.
			if (request._complete) return;

			// Try new method
			request.cancel();

			// For compatibility w/ onFailure
			var response = new Ajax.Response(request);
/*
			// Need to account for onreadystatechange w/ readyState == 4
			// http://www.quirksmode.org/blog/archives/2005/09/xmlhttp_notes_a_1.html
			request.transport.onreadystatechange = Prototype.emptyFunction;
			request.transport.abort();
*/
			// Use same arguments as onFailure expects, so we can use it as a fallback.
			(request.options.onTimeout || request.options.onFailure || Prototype.emptyFunction)(response, response.headerJSON);
		}, request.options.timeout > 0 ? request.options.timeout*1000 : request.defaultTimeout);
	},
	/** @param	{Ajax.Request} request */
	'onComplete': function(request) {
		if (request.timer) clearTimeout(request.timer);
	}
};

vs.Prototype.AjaxRequestMethods = /** @lends {Ajax.Request.prototype} */ {
	defaultTimeout: /** @type {number}	*/	8000,
	/**
		@param	{Object} options
		@return	{Ajax.Request}
	*/
	resend: function(options) {
		return new this.constructor(this.url, Object.extend(this.options, options || {}));
	},
	cancel: function() {
		if (!this._complete) {
			this.transport.onreadystatechange = Prototype.emptyFunction;
			this.transport.abort();
			var response = new Ajax.Response(this);
			try {
				(this.options.onComplete || Prototype.emptyFunction)(response, response.headerJSON);
				Ajax.Responders.dispatch('onComplete', this, response, response.headerJSON);
			} catch(e) {
				this.dispatchException(e);
			}
		}
	}
};

// Ajax.Responders.register(vs.Prototype.AjaxTimeoutResponders);
// Ajax.Request.addMethods(vs.Prototype.AjaxRequestMethods);

/*

	Ajax Caching, affecting *all* Ajax.Request classes, opting out is default

	To opt in (use and set cache), set {use_cache: true} in Request options.
	To refresh cached item, set {refresh_cache: true}.

*/
// ----------------------------------------------------------------------------
vs.Prototype.AjaxCacheRequestMethods = (function() {
// ----------------------------------------------------------------------------
// Some prerequsites
// ----------------------------------------------------------------------------

	var $request = Ajax.Request.prototype.request,
		$respond = Ajax.Request.prototype.respondToReadyState;

// ----------------------------------------------------------------------------
// Ajax Cache
// ----------------------------------------------------------------------------
	var Cache, count, size;

	function reset_cache() {
		Cache = {};
		count = 0;
		size = 0;
	}

	/** @param	{Ajax.Request} request
		@return	{string} */
	function generate_hash(request) {

		// Separate url into url + query string
		// Put query string into GET parameters
		// Put method into POST parameters iff it's not GET
		// Sort and remove duplicate key=value pairs
		// Join the three strings with '|' and return

		var
			url			= request.url || "",
			method		= request.method,
			parameters	= request.options.parameters || {},
			qs		= url.indexOf('?'),
			base	= qs == -1 ? url : url.substring(0,qs),
			query	= qs == -1 ? ''  : url.substring(qs),
			get		= Object.toQueryString(Object.extend(query.toQueryParams(), method == 'get' ? parameters : {})).split('&').sort().uniq(true).join('&'),
			post	= Object.toQueryString(method == 'get' ? {} : Object.extend({_method: method}, parameters)).split('&').sort().uniq(true).join('&');

		return [base,get,post].join('|');
	}

	/** @param	{Ajax.Request} request
		@return	{boolean} */
	function cache_contains(request) {
		return generate_hash(request) in Cache;
	}
	/** @param	{Ajax.Request} request */
	function cache_store(request) {
		var contentLength = request.transport.responseText.length;
		size += contentLength;
		count++;
		Cache[generate_hash(request)] = {
			transport:		request.transport,
			hits:			0,
			created:		new Date,
			lastAccess:		new Date,
			contentLength:	contentLength
		};
	}
	/** @param	{Ajax.Request} request
		@return	{XMLHttpRequest} */
	function cache_fetch(request) {
		var hash = generate_hash(request);
		if (hash in Cache) {
			Cache[hash].hits++;
			Cache[hash].lastAccess = new Date;
			return Cache[hash].transport;
		} else {
			return request.transport;
		}
	}
	function cache_prune() {
		/* write me */
		if (count > 2000) reset_cache(); // simple, dumb cache cleaner
	}

// ----------------------------------------------------------------------------
	reset_cache();
	setInterval(cache_prune, 3*60*1000);
	return /** @lends {Ajax.Request.prototype} */ {
// ----------------------------------------------------------------------------
// Extentions to Ajax.Request
// ----------------------------------------------------------------------------
		/** @type {boolean} */
		use_cache:		false,
		/** @type {boolean} */
		refresh_cache:	false,
// ----------------------------------------------------------------------------
		request: function(url) {
// ----------------------------------------------------------------------------

			var response;

			this.url	= url;
			this.method	= this.options.method;

			// Use cache
			if (this.options.use_cache && !this.options.refresh_cache && cache_contains(this)) {
				try {
					this.transport = cache_fetch(this);
					response = new Ajax.Response(this);
					if (this.options.onCreate) this.options.onCreate(response);
					Ajax.Responders.dispatch('onCreate', this, response);
					this.respondToReadyState(4);
				} catch(e) {
					this.dispatchException(e);
				}
			// Act normally
			} else {
				$request.call(this,url);
			}
		},

// ----------------------------------------------------------------------------
		respondToReadyState: function(readyState) {
// ----------------------------------------------------------------------------

			$respond.call(this, readyState);

			if (this.options.use_cache && this._complete && this.success() && (this.options.refresh_cache || !cache_contains(this))) {
				cache_store(this);
			}
		}
	};
})();

Ajax.Request.addMethods(vs.Prototype.AjaxCacheRequestMethods);
Ajax.Request.addMethods(vs.Prototype.AjaxRequestMethods);


// Add console & console.log() stubs if they don't exist, so we don't get errors with non-Firebug browsers during development/testing.
if (IN_DEVELOPMENT) {
	if (!window.console) window.console = {
		log: function(){}, warn: function(){}, error: function(){}
	};
}
