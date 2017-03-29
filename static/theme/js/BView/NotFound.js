"use strict";

/**
 * @class	app.views.NotFound
 * @extends	app.views.Default
 */
app.views.NotFound = app.views.Default.extend({


	remove: function() {
		app.views.NotFound.__super__.remove.apply(this, arguments);
	},


	render: function() {
		app.views.NotFound.__super__.render.apply(this, arguments);
	}

});
