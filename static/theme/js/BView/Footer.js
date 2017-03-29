"use strict";

/**
 * class	app.views.Footer
 * @extends	Backbone.View
 */
app.views.Footer = Backbone.View.extend({

	el: '.footer',

	render: function() {
		app.views.Footer.__super__.render.apply(this, arguments);

		var self = this;
		console.log("Footer render");

		return this;
	}

});
