(function() {
// ----------------------------------------------------------------------------
	/**
		@param	{Element} element
		@param	{function(Event)} onMouseOver
		@param	{function(Event)} onMouseOut
		@param	{function(Element):Element=} initialize
		@return	{Element}
	*/
	// this sets the observers on the list of elements
	function Hover(element, onMouseOver, onMouseOut, initialize) {
// ----------------------------------------------------------------------------
		(initialize || Prototype.K)(element);
		return element.observe("mouseenter", onMouseOver).observe("mouseleave", onMouseOut);
	};

// ----------------------------------------------------------------------------
	zfatlas.addPreviewThumbnails = (function() {
// ----------------------------------------------------------------------------

		var loading = new Element('IMG', {'src': "images/loading-preview-im.gif"}),
			previewImage = new Element('DIV').addClassName("vs-hover-preview").insert(loading);

		/**
			@param	{string} href
			@return	{boolean|string}
		*/
		function getSrc(href) {
			// parse href for slide id
			var match = href.match(/[?&]s=(\d+)/);

			return match
				? "thumbnails/preview/%010d.jpg".sprintf(match[1])
				: false;
		}

		/** @this {Image} */
		// http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Closures#Closures
		function onload() {
			previewImage.update(this);
			this.onload = null;
		}

		/** @param	{Event} event */
		function onmouseover(event) {
			var link = event.findElement('A'),
				body = document.body,
				img = document.createElement('IMG'),
				src = getSrc(link['href']),
				clickX = event.pointerX(),
				clickY = event.pointerY(),
				viewport = document.viewport.getDimensions(),
				position = {'left': "auto", 'top': "auto", 'right': "auto", 'bottom': "auto"};

			if (clickX > body.scrollLeft + viewport['width']/2) {
				position['right'] = body.offsetWidth - clickX + "px";
			} else {
				position['left'] = clickX + "px";
			}

			if (clickY > body.scrollTop + viewport['height']/2) {
				position['bottom'] = body.offsetHeight - clickY + "px";
			} else {
				position['top'] = clickY + "px";
			}

			if (src !== false) {
				previewImage.setStyle(position).update(loading).show();
				img.onload = onload;
				img.src = src;
			}
		}

		/** @param	{Event} event */
		function onmouseout(event) {
			previewImage.hide();
		}

		/**
			@param	{Element} element
			@return	{Element}
		*/
		function addObservers(element) {
			return Hover(element, onmouseover, onmouseout);
		}

		// Example of using addPreviewThumbnails()
		// zfatlas.addPreviewThumbnails(document.body, /view\.php\?.*?\bs=\d+/);

		/**
			zfatlas.addPreviewThumbnails(); takes a top element and searches it
			for A elements with a href property matching the regular expression
			matchingHref.

			@param	{Element} target
			@param	{RegExp} matchingHref
		*/
		return function(target, matchingHref) {
			$(document.body).insert(previewImage.hide());
			target.select('A')
				.findAll(function(a) {
					return matchingHref.test(a['href']);
				})
				.map(addObservers);
		};

	})();
})();
