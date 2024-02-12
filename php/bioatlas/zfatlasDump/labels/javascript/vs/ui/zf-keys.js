// ----------------------------------------------------------------------------
// Key bindings
// ----------------------------------------------------------------------------
// This should be for view.php only aka FullScreenViewer
zfatlas.ui.keyBindings = (function(){
// ----------------------------------------------------------------------------

	function getViewer() {
		return vs.Viewer.instances[0];
	}
	function getWidgets() {
		var viewer = getViewer();
		return viewer ? viewer.widgets : void(0);
	}
	function getPanel() {
		var widgets = getWidgets();
		return widgets ? widgets['panel'] : void(0);
	}
	/**
		@param	{string} widgetHandle
		@param	{Function=} callback
	*/
	function selectPanelWidget(widgetHandle, callback) {
		getPanel().selectWidget(getWidgets()[widgetHandle], callback);
	}
	function focusSearchInput() {
		getWidgets()['labels'].element.select('INPUT').first().focus();
	}
	/**
		@param	{number} modMask
		@return	{number}
	*/
	function ctrlOrMeta(modMask) {
		return modMask & (vs.Keys.CTRL | vs.Keys.META);
	}

	return new vs.KeyBindingGroup({
		// toggle sliding panel (event.stop here since it may scroll the open panel)
		'spacebar: 32': function(event) { event.stop(); getPanel().toggle() },

		// hide sliding panel
		'Esc: 27': function() { getPanel().closeWidget().hide() },

		// display "About this slide"
		'a: 65': function(event, modMask){ ctrlOrMeta(modMask) || selectPanelWidget("slidelabel") },

		// display "Link to this slide"
		'k: 75': function(event, modMask){ ctrlOrMeta(modMask) || selectPanelWidget("hyperlink") },

		// display series
		's: 83': function(event, modMask){ ctrlOrMeta(modMask) || selectPanelWidget("iterator") },

		// display "Labels on this slide"
		'l: 76': function(event, modMask){ ctrlOrMeta(modMask) || selectPanelWidget("labels") },

		// display "Labels on this slide" and focus search INPUT
		'f: 70': function(event, modMask) {
			if (!ctrlOrMeta(modMask)) {
				event.stop();
				selectPanelWidget("labels", focusSearchInput)
			}
		},

		// display help screen
		'h,?: 72 191': function(event, modMask){ ctrlOrMeta(modMask) || selectPanelWidget("help") },

		// toggle zfatlas.widget.Ruler (a modified scalebar)
		'R: 82': function(event, modMask) {
			var ws = getWidgets();
			if (ws && modMask == vs.Keys.SHIFT) {
				//if ('vruler' in ws) {
                                        //ws['vruler'].destroy();
                                        //ws['ruler'].destroy();
                                if ('square' in ws) {
                                        ws['square'].destroy();
				} else if ('ruler' in ws) {
					ws['ruler'].destroy();
					getViewer().addWidget(zfatlas.widget.Square);
				} else {
					getViewer().addWidget(zfatlas.widget.Ruler);
				}
			}
		}
	});
})();

