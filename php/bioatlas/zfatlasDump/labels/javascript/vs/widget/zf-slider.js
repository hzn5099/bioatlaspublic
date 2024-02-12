/**
	zfatlas.widget.Slider - a tickless slide navigator especially for lots of slides

	The slider track is essentially split into both N and N - 1 sections.  N sections for
	clicking on; N - 1 for displaying the current pointer.  This is so that the pointer
	for the last slide will always be at the end of the track.  This is especially important
	for series with few slides.

	But for N, it's not exactly split evenly; same distances for N-1, except that range is offset by 1/2.

	options:

		Same for zfatlas.widget.Iterator plus:
		align:
		url:

	DOM structure:

		<div class="vs-widget-slider">
			<div class="slider-track">
				<div class="current-pointer"></div>
				<div class="slider">
					<div class="pointer"></div>
					<div class="preview">
						<img>
						<p></p>
					</div>
				</div>
			</div>
		</div>


	@constructor
	@extends {zfatlas.widget.Iterator}
*/
zfatlas.widget.Slider = vs.util.extend(
// ----------------------------------------------------------------------------
	// EXTENDS:
	zfatlas.widget.Iterator);

// ----------------------------------------------------------------------------
// PROPERTIES
// ----------------------------------------------------------------------------
/** @type {string} */	zfatlas.widget.Slider.prototype.cssClassName	= "vs-widget zf-widget vs-widget-slider";
/** @type {string} */	zfatlas.widget.Slider.prototype.align			= "top-left2";
/** @type {string} */	zfatlas.widget.Slider.prototype.url				= "thumbnails/preview/%010d.jpg";
/** @type {number} */	zfatlas.widget.Slider.prototype.currentPosition	= -1;
/** @type {Element} */	zfatlas.widget.Slider.prototype.track;
/** @type {Element} */	zfatlas.widget.Slider.prototype.slider;
/** @type {Element} */	zfatlas.widget.Slider.prototype.content;
/** @type {Array} */	zfatlas.widget.Slider.prototype.cache; // indexed like this.slides

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------
zfatlas.widget.Slider.prototype.initialize = function () {
// ----------------------------------------------------------------------------
	zfatlas.widget.Iterator.prototype.initialize.call(this);

	this.cache = [];

	this.element = new Element('DIV').addClassName(this.cssClassName).addClassName(this.align)
		.insert(this.track = new Element('DIV').addClassName("slider-track")
			.insert(new Element('DIV').addClassName("current-pointer"))
			.insert(this.slider = new Element('DIV').addClassName("slider")
				.hide()
				.insert(new Element('DIV').addClassName("pointer")
					.insert(new Element('DIV').addClassName("pointer-fill")))
				.insert(this.content = new Element('DIV').addClassName("preview")
					.insert(new Element('IMG'))
					.insert(new Element('P')))
		));

	// do this manually to avoid "filtration"
	// this could be fixed for now by setting up two iterators -- one is filtered out because it's listening
	// to the keys, but the slider is not.
	this.viewer.onEvent("load", null, vs.ElementWidget.prototype.onLoad.bind(this));

	this.observers.push(
		[this.element, 'mouseout',  this.onMouseOut.bindAsEventListener(this) ],
		[this.element, 'mouseover', this.onMouseOver.bindAsEventListener(this)],
		[this.element, 'mousemove', this.onMouseMove.bindAsEventListener(this)],
		[this.element, 'mousedown', this.onMouseDown.bindAsEventListener(this)],
		[this.element, 'dblclick',  this.noPropagation.bind(this)             ]
	);
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
zfatlas.widget.Slider.prototype.onMouseOver = function (event) {
// ----------------------------------------------------------------------------
	this.slider.show();
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
zfatlas.widget.Slider.prototype.onMouseOut = function (event) {
// ----------------------------------------------------------------------------
	this.slider.hide();
};

// ----------------------------------------------------------------------------
/**
	slider.getOffsetX - returns mouse position along track regardless of target element

	@param	{Event} event
	@return	{number}
*/
zfatlas.widget.Slider.prototype.getOffsetX = function(event) {
// ----------------------------------------------------------------------------
	var track = this.track;

	// this is off in IE8; current-pointer appears several px ahead of click position
	// appears to be ~1px ahead in Chrome
	// works in Opera, Firefox
	return Math.bound(event.clientX - track.cumulativeOffset()['left'], 0, track.offsetWidth);
};

// ----------------------------------------------------------------------------
/**
	@param	{number} offsetX
	@return	{number}
*/
zfatlas.widget.Slider.prototype.getSlidePositionByOffset = function(offsetX) {
// ----------------------------------------------------------------------------
	var t_width = this.track.offsetWidth,
		n = this.slides.length - 1;

	return Math.floor(n*(offsetX - t_width/(2*n))/t_width) + 1;
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
zfatlas.widget.Slider.prototype.onMouseMove = function(event) {
// ----------------------------------------------------------------------------
	var offsetX = this.getOffsetX(event),
		position = this.getSlidePositionByOffset(offsetX);

	// move slider
	this.slider.style.left = offsetX + "px";
	if (position != this.currentPosition) {
		// update content
		this.content.select('P')[0].update("%d / %d".sprintf(position + 1, this.slides.length));
		this.content.select('IMG')[0].replace(this.getThumbnail(offsetX));
		this.currentPosition = position;
	}
};

// ----------------------------------------------------------------------------
/**
	@param	{number} offsetX
*/
zfatlas.widget.Slider.prototype.updateCurrentPointer = function(offsetX) {
// ----------------------------------------------------------------------------
	this.element.select(".current-pointer")[0].style.left = offsetX + "px";
};

// ----------------------------------------------------------------------------
/**
	@param	{Event} event
*/
zfatlas.widget.Slider.prototype.onMouseDown = function(event) {
// ----------------------------------------------------------------------------
	var offsetX = this.getOffsetX(event);

	event.stop();
	this.updateCurrentPointer(offsetX);
	this.loadSlide(this.getSlidePositionByOffset(offsetX));
};

// ----------------------------------------------------------------------------
/**
	@param	{number} offsetX
	@return	{Element}
*/
zfatlas.widget.Slider.prototype.getThumbnail = function(offsetX) {
// ----------------------------------------------------------------------------
// Could probably re-factor this to use contiguous numbering, although not critical
	var cache = this.cache,
		i = this.getSlidePositionByOffset(offsetX);

	if (!cache[i])
		cache[i] = new Element('IMG', {'src': this.url.sprintf(this.slides[i])});

	return cache[i];
};

// ----------------------------------------------------------------------------
zfatlas.widget.Slider.prototype.onLoad = function() {
// ----------------------------------------------------------------------------
	vs.ElementWidget.prototype.onLoad.apply(this, arguments);

	var n = this.slides.length - 1,
		i = this.position(),
		t_width = this.track.offsetWidth;

	this.updateCurrentPointer(i ? Math.floor(t_width * i / n) : 0);
};

// ----------------------------------------------------------------------------
zfatlas.widget.Slider.prototype.preCache = function() {
// ----------------------------------------------------------------------------
	for (var i = 0, n = this.track.offsetWidth + 1; i < n; i++)
		this.getThumbnail(i);
};

zfatlas.widget.Slider.prototype.onAttach = vs.ElementWidget.prototype.onAttach;
zfatlas.widget.Slider.prototype.noPropagation = vs.ElementWidget.prototype.noPropagation;


// make markers to visualize positions
if (IN_DEVELOPMENT)
	zfatlas.widget.Slider.prototype.makeMarkers = function() {
		var marker_bottom = new Element('DIV')
				.setStyle({
					'position':		"absolute",
					'width':		"0px",
					'height':		"0px"
				})
				// pointer
				.insert(new Element('DIV').setStyle({
					'position':		"absolute",
					'marginTop':	"1px",
					'marginLeft':	"-4px",
					'width':		"0px",
					'height':		"0px",
					'borderBottom':	"4px solid #c00",
					'borderLeft':	"4px solid transparent",
					'borderRight':	"4px solid transparent"
				})),
			marker_top = new Element('DIV')
				.setStyle({
					'position':		"absolute",
					'width':		"0px",
					'height':		"0px"
				})
				// pointer
				.insert(new Element('DIV').setStyle({
					'position':		"absolute",
					'marginTop':	"-3px",
					'marginLeft':	"-3px",
					'width':		"0px",
					'height':		"0px",
					'borderTop':	"3px solid #09f",
					'borderLeft':	"3px solid transparent",
					'borderRight':	"3px solid transparent"
				})),
			marker_copy,
			n = this.slides.length - 1,
			t_width = this.track.offsetWidth,
			q = vs.util.integerQuotient(t_width, n),
			i = 0,
			qq = 0;

		// slide markers
		do {
			qq += i;
			marker_copy = marker_bottom.cloneNode(true);
			console.log(marker_copy.style.left = qq + "px");
			this.track.insert(marker_copy);
		} while (i = q());

		// division markers
		q = vs.util.integerQuotient(t_width, n);
		qq = 0;
		i = t_width/n >> 1;
		while (!isNaN(qq += q())) {
			marker_copy = marker_top.cloneNode(true);
			console.log(marker_copy.style.left = (qq - i) + "px");
			this.track.insert(marker_copy);
		}
	};

