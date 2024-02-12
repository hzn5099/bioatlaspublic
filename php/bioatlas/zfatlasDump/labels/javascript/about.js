Event.observe(document, 'dom:loaded', function() {
	var hash, div;

	// if hash in URL
	if (hash = window.location.hash.match(/#(.+)/)) {
		div = $(hash[1]);
		if (div)
			new Effect.Highlight(div, {'duration': 2});
	}
});

