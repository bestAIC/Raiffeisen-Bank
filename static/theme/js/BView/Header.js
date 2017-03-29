"use strict";

app.views.Header = Backbone.View.extend({

	el			: '.header',
	subView		: {},


	initialize: function() {

	},

	render: function() {
		app.views.Header.__super__.render.apply(this, arguments);

		var
			self = this
		;

		console.log("Header render");
	}
});
