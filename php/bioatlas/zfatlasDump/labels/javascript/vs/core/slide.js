/**

	vs.VirtualSlide - the slide object used by vs.Viewer


	function for finding arbitrary level without calculating intermediate levels:

	function (original_dimension, level) {
		return original_dimension >> level + (( original_dimension % Math.pow(2,level) ) ? 1 : 0);
	}

	@constructor
	@param	{Object=} params
*/
// ----------------------------------------------------------------------------
vs.VirtualSlide = function(params) {
// ----------------------------------------------------------------------------

	// Do this anyway to handle possible extensions
	vs.env.PropertyMap(this, params || {});

	// if .url is a string, make it a function that returns that string
	if (typeof this.url == 'string')
		this.url = /** @type {function(this:vs.VirtualSlide, number, number, number, number)} */ (Prototype.K.curry(this.url));

	// make sure levels are correctly sorted
	this.levels.sort(this.levelSort);

	if (IN_DEVELOPMENT) {
		if (this.power < 0)
			console.error("[vs.VirtualSlide] power cannot be less than zero");

		if (!(this.levels instanceof Array) || this.levels.length == 0)
			console.error("[vs.VirtualSlide] levels must exist and have at least one element.");
	}
};

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {number}	*/	vs.VirtualSlide.prototype.id;
/** @type {Array}	*/	vs.VirtualSlide.prototype.levels;
/** @type {number}	*/	vs.VirtualSlide.prototype.power			= 1;
/** @type {string}	*/	vs.VirtualSlide.prototype.title			= "";
/** @type {string}	*/	vs.VirtualSlide.prototype.description	= "";
/** @type {string}	*/	vs.VirtualSlide.prototype.source		= "";
/** @type {string}	*/	vs.VirtualSlide.prototype.baseURL		= "";
/** @type {string}	*/	vs.VirtualSlide.prototype.bgColor		= "transparent";
// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
/**
	@param	{number} x
	@param	{number} y
	@param	{number} z
	@param	{number} i
	@return	{string}
*/
vs.VirtualSlide.prototype.url = function(x, y, z, i) {
// ----------------------------------------------------------------------------
	return [
		this.baseURL,
		"?s=", this.id,
		"&x=", x,
		"&y=", y,
		"&z=", z,
		"&i=", i
	].join("");
};

// ----------------------------------------------------------------------------
/**
	@private
	@param	{Array} a
	@param	{Array} b
	@return	{number}
*/
vs.VirtualSlide.prototype.levelSort = function(a, b) {
// ----------------------------------------------------------------------------
	return b[0] - a[0];
};

// ----------------------------------------------------------------------------
/**
	@param	{number} z
	@return	{Array.<number>}
*/
vs.VirtualSlide.prototype.getCenter = function(z) {
// ----------------------------------------------------------------------------
	z = z || 0;
	return [
		this.levels[z][0]/2,
		this.levels[z][1]/2
	];
};

// ----------------------------------------------------------------------------
/**
	@param	{number} level
	@return	{number|undefined}
*/
vs.VirtualSlide.prototype.getPower = function(level) {
	return this.isValidLevel(level = level || 0)
		? this.power * this.getRatio(level)
		: void(0);
};

// ----------------------------------------------------------------------------
/**
	@return	{number}
*/
vs.VirtualSlide.prototype.getLowestLevel = function() {
// ----------------------------------------------------------------------------
	return this.levels.length - 1;
};

// ----------------------------------------------------------------------------
/**
	@param	{number} a
	@param	{number=} b
	@return	{number}
*/
vs.VirtualSlide.prototype.getRatio = function(a, b) {
// ----------------------------------------------------------------------------
	return this.levels[a][0] / this.levels[b || 0][0]; // getRatio(1) == getRatio(1,0)
};

// ----------------------------------------------------------------------------
/**
	@param	{Array|undefined} absoluteCoords
	@param	{number} level
	@return	{Array}
*/
vs.VirtualSlide.prototype.getCoordsFromAbs = function(absoluteCoords, level) {
// ----------------------------------------------------------------------------
	return [
		absoluteCoords[0] * this.getRatio(level),
		absoluteCoords[1] * this.getRatio(level)
	];
};

// ----------------------------------------------------------------------------
/**
	@param	{number} width
	@param	{number} height
	@return	{number}
*/
vs.VirtualSlide.prototype.getContainingLevel = function(width, height) {
// ----------------------------------------------------------------------------
	for (var i = 0, n = this.levels.length - 1; i < n; i++ )
		if (this.levels[i][0] < width && this.levels[i][1] < height)
			break;
	return i;
};

// ----------------------------------------------------------------------------
/**
	@param	{number} width
	@param	{number} height
	@return	{number}
*/
vs.VirtualSlide.prototype.getClosestLevel = function(width, height) {
// ----------------------------------------------------------------------------
	// calculate areas, return smallest difference
	var area = width * height,
		areas = [],
		levels = this.levels,
		n = levels.length;

	// calculate area differences
	while (n--) {
		areas[n] = Math.abs(area - levels[n][0] * levels[n][0]);
	}

	// find smallest difference & return level
	return areas.indexOf(areas.minimum());
};

// ----------------------------------------------------------------------------
/**
	@param	{?number=} level
	@return	{boolean}
*/
vs.VirtualSlide.prototype.isValidLevel = function(level) {
// ----------------------------------------------------------------------------
	return level >= 0					// Positive...
		&& level == Math.floor(level)	// integer...
		&& level < this.levels.length;	// within levels.
};

// ----------------------------------------------------------------------------
/**
	@param	{number} power
	@return	{number}
*/
vs.VirtualSlide.prototype.getNearestLevelByPower = function(power) {
// ----------------------------------------------------------------------------
	var smallestDifference = Infinity,
		closestLevel,
		diff,
		i = 0;

	for ( ; i < this.levels.length; i++) {
		if ((diff = Math.abs(this.getPower(i) - power)) < smallestDifference) {
			smallestDifference = diff;
			closestLevel = i;
		}
	}

	return closestLevel;
};

