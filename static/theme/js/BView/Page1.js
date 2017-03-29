app.views.Page1 = app.views.Default.extend({

	events: {
	},

	initialize: function() {
		app.views.Page1.__super__.initialize.apply(this, arguments);
	},

	remove: function() {
		app.views.Page1.__super__.remove.apply(this, arguments);
	},

	render: function() {
		app.views.Page1.__super__.render.apply(this, arguments);

		var self = this;

		app.views.Page1.__super__.afterRender.apply(this, arguments);
	}
});
