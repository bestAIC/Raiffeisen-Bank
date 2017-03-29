app.views.Home = app.views.Default.extend({

	events: {
	},

	initialize: function() {
		app.views.Home.__super__.initialize.apply(this, arguments);
	},

	remove: function() {
		app.views.Home.__super__.remove.apply(this, arguments);
	},

	render: function() {
		app.views.Home.__super__.render.apply(this, arguments);

		var self = this;

		app.views.Home.__super__.afterRender.apply(this, arguments);
	}

});
