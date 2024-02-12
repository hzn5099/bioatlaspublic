Event.observe(document, "dom:loaded", function() {

	var form = $("search-form");

	form.select("BUTTON[type='reset']").each(function(reset) {
		reset.observe("click", function(event) {
			event.preventDefault();
			// Text inputs
			form["q"].value = "";
			form["age_fr"].value = "";
			form["age_to"].value = "";
			// Selects
			form["age_fr_units"].options[0].selected = true;
			form["age_to_units"].options[0].selected = true;
			// Multiple selects
			form["organism[]"].selectedIndex = 0; // ANY
			form["sex[]"].selectedIndex = 0;
			// form["atlas[]"].selectedIndex = 0;

			form["q"].focus();
		});
	});

	if (!location.search)
		form["q"].focus();

});

