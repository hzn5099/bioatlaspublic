/**
	vs.env.PropertyMap - maps the original names of properties to the ones Closure chooses

	This is necessary for objects fetched via server-side in order to be used in compiled
	JavaScript code.

	IMPORTANT:  for properties on objects from incoming Ajax.Requests to work within
	JavaScript, their properties need to be added to the list below.

	Objects coming in from server via Ajax.Request:
		- vs.Virtualslide
		- series {id:"", name:"", description:"", plane:"", slides:""}
		- vs.label (but these properties are always referenced using string syntax anyway)

	NOTE:  Actually Closure doesn't always rename every property.  Common ones are often
	left alone.  The following don't actually have to be in the list:  id, title, description,
	source, bgColor, url, name.

	@param	{Object} destination
	@param	{Object} source
	@return	{Object}
*/
// ----------------------------------------------------------------------------
vs.env.PropertyMap = function(destination, source) {
// ----------------------------------------------------------------------------
	for (var p in source) {
		switch (p) {
			// Virtualslide, others
			case 'id':			destination.id			= source[p]; break;
			case 'title':		destination.title		= source[p]; break;
			case 'description':	destination.description	= source[p]; break;
			case 'source':		destination.source		= source[p]; break;
			case 'bgColor':		destination.bgColor		= source[p]; break;
			case 'power':		destination.power		= source[p]; break;
			case 'url':			destination.url			= source[p]; break;
			case 'levels':		destination.levels		= source[p]; break;
			// Iterator
			case 'series':		destination.series		= source[p]; break;
			case 'name':		destination.name		= source[p]; break;
			case 'plane':		destination.plane		= source[p]; break;
			case 'slides':		destination.slides		= source[p]; break;

			default:			destination[p]			= source[p];
		}
	}

	// for convenience, return object; using the return value is not
	// necessary since object is passed and modified by reference anyway.
	return destination;
};
