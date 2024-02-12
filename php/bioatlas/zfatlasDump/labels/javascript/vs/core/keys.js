/**
	Key events in the vs.* applications

	Instead of having individual key event listeners, there are now three classes that
	handle key events.  A key binding group consists of a collection of key definitions
	consisting of numeric string:callback pairs.  A key context is the set of key events
	currently being listened for and consists of one or more key binding groups.  Only
	one context is active at a time.  vs.Keys is the "singleton" object that handles
	context switching.  It is basically a context stack.

	Advantages to this approach are the ability to put key listeners "on hold"
	when a text INPUT/AREA is focused and reset them without having to know
	which keys listeners exist.  Additionally, keys can be added to and removed
	from key binding groups by using the appropriate methods on the group.

	Use vs.Keys.start()/.stop() to toggle the global key listener.

	---------------------------------------------------------------------------

	KeyBindingGroup

	@constructor
	@param	{Object.<string, function(Event, number)>} keys

	keys is an object with numeric keys that correspond to Event.keyCode values.
	Object values are callbacks that are executed in reponse to those keydown events.
	The callback receives the Event as the first argument and a mask of the modifier
	keys as the second (see vs.Keys constants).

	Multiple keyCodes can be combined in a single key string, e.g., "43 61 107 187".
	Additionally, a comment can be optionally included; it should end in a colon,
	e.g., "spacebar: 32".  Any non-digit characters can be used to separate key codes,
	except for colons; they don't have to be the same, e.g., "43, 61, 107 / 187".
*/
vs.KeyBindingGroup = function(keys) {
// ----------------------------------------------------------------------------
	function modifiers(event) {
		return 0 |
			(event.shiftKey && vs.Keys.SHIFT) |
			(event.ctrlKey && vs.Keys.CTRL) |
			(event.altKey && vs.Keys.ALT) |
			(event.metaKey && vs.Keys.META);
	}

	function getMethod(p) {
		var method = keys[p];
		return function(event) {
			return method(event, modifiers(event));
		}
	}

	var k, method, group = {};

	for (k in keys) {
		method = getMethod(k);
		// parse string matching: "[optional comment:] <numbers>"
		k.replace(/^.*:\D+/, "") // strip optional comment
			.split(/\D+/) // split on non-digit characters
			.filter(Number) // filter out empty elements
			.each(function(e) { group[e] = method }); // assign method to each keyCode in string
	}

	this.keys = group;
};
/** @type {Object.<string, function(Event, number)>}	*/	vs.KeyBindingGroup.prototype.keys;

// ----------------------------------------------------------------------------
/**
	KeyContext

	@constructor
	@param	{...vs.KeyBindingGroup} groups
*/
vs.KeyContext = function(groups) {
// ----------------------------------------------------------------------------
	this.groups = [];
	for (var i = 0; i < arguments.length; i++)
		this.addGroup(arguments[i]);
};
/** @type {Array.<vs.KeyBindingGroup>}	*/	vs.KeyContext.prototype.groups;
// ----------------------------------------------------------------------------
/**
	@param	{vs.KeyBindingGroup} group
	@return	{vs.KeyContext}
*/
vs.KeyContext.prototype.addGroup = function(group) {
// ----------------------------------------------------------------------------
	if (IN_DEVELOPMENT) {
		// check groups for existing definitions
		var key, i, n = this.groups.length;
		for (key in group.keys) {
			for (i = 0; i < n; i++) {
				if (key in this.groups[i].keys) {
					console.warn("[vs.KeyContext] Overriding existing definition for %s", key);
					break;
				}
			}
		}
	}

	this.groups.unshift(group);
	return this;
};

// ----------------------------------------------------------------------------
/**
	@param	{vs.KeyBindingGroup} group
	@return	{vs.KeyContext}
*/
vs.KeyContext.prototype.removeGroup = function(group) {
// ----------------------------------------------------------------------------
	this.groups = this.groups.without(group);
	return this;
};

// ----------------------------------------------------------------------------
vs.Keys = new /** @constructor */ function() {
// ----------------------------------------------------------------------------
	var contextStack = [];

	/**
		@param {Event} event
	*/
	function onKeyDown(event) {
		var key = event.keyCode,
			context = contextStack[contextStack.length - 1] || new vs.KeyContext(),
			keygroups = context.groups,
			i = 0,
			n = keygroups ? keygroups.length : 0;

		while (i < n) {
			if (key in keygroups[i].keys) {
				keygroups[i].keys[key](event);
				break;
			}
			i++;
		}
	}

	/** @type {boolean} */
	this.keepLastContext = true;

	/**
		@param	{vs.KeyContext} context
		@return	{vs.Keys}
	*/
	this.pushContext = function(context) {
		contextStack.push(context);
		return this;
	};

	/**
		@param	{vs.KeyContext=} context
		@return	{vs.Keys}
	*/
	this.popContext = function(context) {
		var currentContext,
			last = this.keepLastContext ? 1 : 0;
		do {
			currentContext = contextStack.pop();
		} while (contextStack.length > last && context != currentContext);

		return this;
	};

	/**
		@return	{vs.Keys}
	*/
	this.start = function() {
		Event.observe(window, 'keydown', onKeyDown);
		return this;
	};

	/**
		@return	{vs.Keys}
	*/
	this.stop = function() {
		Event.stopObserving(window, 'keydown', onKeyDown);
		return this;
	};

	/**
		@return	{vs.Keys}
	*/
	this.clear = function() {
		contextStack = [];
		return this;
	};
};

/** @const */ vs.Keys.SHIFT	= 1;
/** @const */ vs.Keys.CTRL	= 2;
/** @const */ vs.Keys.ALT	= 4;
/** @const */ vs.Keys.META	= 8;

