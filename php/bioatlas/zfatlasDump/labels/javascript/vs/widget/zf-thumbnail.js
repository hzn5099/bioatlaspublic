/**
	@constructor
	@extends {vs.widget.Thumbnail}
*/
zfatlas.widget.Thumbnail = vs.util.extend(
// ============================================================================
// EXTENDS:
// ----------------------------------------------------------------------------
	vs.widget.Thumbnail,

	/** @lends {zfatlas.widget.Thumbnail.prototype} */ {
// ----------------------------------------------------------------------------
		initialize: function() {
// ----------------------------------------------------------------------------
			vs.widget.Thumbnail.prototype.initialize.call(this);

			var effect, center,
				hovering = false,
				thumbnail = this.thumbnail,
				minimized = { 'width': "100px", 'height':  "67px", 'borderWidth': "2px" },
				maximized = { 'width': "350px", 'height': "250px", 'borderWidth': "1px" },
				effectOptions = {
					'duration': 0.2,
					'afterSetup': function(){ center = thumbnail.getCenter() },
					'afterUpdate': function() {
						if (center) {
							// This doesn't work b/c element position is defined by offset, not center (although it should be center)
							// thumbnail.doEvent("resize");
							thumbnail.setContainerProperties().centerOn(center);
							thumbnail.widgets['roi'].update(); // doesn't update on "move" events
						}
					}
				},

				/**
					@param	{Effect.Base} effect
					@param	{number} delay
					@return	{number}
				*/
				setDelay = function(effect, delay) {
					if (effect) {
						if (effect.state != 'finished')
							delay = 0;
						effect.cancel();
					}
					return delay;
				},

				/**
					@param	{Event} event
				*/
				onMouseOut = (/** @this {Element} */ function(event) {
					hovering = false;
					if (thumbnail.dragging)
						return;
					effect = new Effect.Morph(this, Object.extend({'style': minimized, 'delay': setDelay(effect, 0.6)}, effectOptions));
				}).bind(this.element),

				/**
					@param	{Event} event
				*/
				onMouseOver = (/** @this {Element} */ function(event) {
					hovering = true;
					if (thumbnail.dragging)
						return;
					effect = new Effect.Morph(this, Object.extend({'style': maximized, 'delay': setDelay(effect, 0.2)}, effectOptions));
				}).bind(this.element);

			// Check for mouse state after releasing thumbnail
			thumbnail.onEvent("drop", this, function() {
				hovering || onMouseOut(null);
			});
			/*
			.onEvent("grab", this, function() {
				// end effect and display maximized state
				setDelay(effect, 0);
				this.element.setStyle(maximized);
				effectOptions['afterUpdate']();
			});
			*/

			// Choose slide level based on maximized thumbnail size
			/**
				@param	{vs.VirtualSlide} slide
				@param	{?number=} startzoom
				@param	{Array.<number>=} startpos
				@param	{?boolean=} absoluteCoords
				@param	{Object=} initiator
				@return	{vs.widget.Thumbnail.Viewer}
			*/
			this.thumbnail.load = function(slide, startzoom, startpos, absoluteCoords, initiator) {
			// ----------------------------------------------------------------------------
				startzoom = slide.getClosestLevel(parseInt(maximized.width, 10), parseInt(maximized.height, 10));
				return vs.Viewer.prototype.load.call(this, slide, startzoom, startpos, true, initiator);
			};

			// Minimize thumbnail when grabbing main viewer
			this.viewer.onEvent("grab", this, function() {
				effect && effect.cancel();
				this.element.setStyle(minimized);
				this.thumbnail.setContainerProperties();
				this.thumbnail.widgets['roi'].update();
				this.align();
			});

			// Initialize observers and element
			// (Prototype provides cross-platform enter/leave events)
			this.element.observe("mouseleave", onMouseOut).observe("mouseenter", onMouseOver);
			this.element.setStyle(minimized);
		}
	}
);
