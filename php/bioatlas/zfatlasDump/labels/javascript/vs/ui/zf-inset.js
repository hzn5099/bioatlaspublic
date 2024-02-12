/**
	@constructor
*/
zfatlas.ui.Inset = function () {
// ----------------------------------------------------------------------------
	var buttonBar, button, closeInset, effectOptions = {'duration': 0.25, 'queue': 'end'};

	if (this.allowEsc) {
		closeInset = function(event) {
			button.stopObserving('click', arguments.callee);
			$("blackout").fade(effectOptions).update();
			vs.Keys.popContext();
			button = buttonBar = null;
		};

		// observe button click event
		buttonBar = new Element('DIV')
			.addClassName("close-bar")
			.insert(button = new Element('BUTTON', {'type': "button"}).insert("Dismiss").observe('click', closeInset));

		// observe ESC key event
		vs.Keys.pushContext(new vs.KeyContext(new vs.KeyBindingGroup({
			'Esc: 27': closeInset
		})));

	} else {
		vs.Keys.stop();
	}

	$("blackout").appear(effectOptions).update(this.toElement().insert({'top': buttonBar}));
};
// ----------------------------------------------------------------------------
/** @type	{boolean} */
zfatlas.ui.Inset.prototype.allowEsc = true;
// ----------------------------------------------------------------------------
/** @return	{Element} */
zfatlas.ui.Inset.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	return new Element('DIV').addClassName("blackout-content");
};


// ----------------------------------------------------------------------------
/**
	@constructor
	@extends {zfatlas.ui.Inset}
*/
zfatlas.ui.Inset404 = vs.util.extend(zfatlas.ui.Inset);
// ----------------------------------------------------------------------------
zfatlas.ui.Inset404.prototype.allowEsc = false;
// ----------------------------------------------------------------------------
zfatlas.ui.Inset404.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	return new Element('DIV').addClassName("blackout-content").insert('\
		<div class="shadow-box"><h1>Slide Not Found</h1> \
			<p>Sorry, but we couldn\'t find that slide.  Maybe you\'d like to go somewhere else?</p> \
			<ul> \
				<li><a href="index.php">Zebrafish Atlas home page</a></li> \
				<li><a href="progress.php">Zebrafish Atlas overview chart</a></li> \
				<li><a href="search.php">Search slides</a></li> \
				<li><a href="contact.php">Contact us</a></li> \
			</ul> \
		</div> \
	');
};


// ----------------------------------------------------------------------------
/**
	@constructor
	@extends {zfatlas.ui.Inset}
*/
zfatlas.ui.InsetServerError = vs.util.extend(zfatlas.ui.Inset);
// ----------------------------------------------------------------------------
zfatlas.ui.InsetServerError.prototype.toElement = function() {
// ----------------------------------------------------------------------------
	return new Element('DIV').addClassName("blackout-content").insert('\
		<div class="shadow-box"><h1>Server Unavailable</h1> \
		<p>Sorry, but the server is taking too long to respond.  This may be a temporary condition; you can try again.</p> \
	');
};

