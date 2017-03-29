"use strict";

app.views.GlobalView = Backbone.View.extend({

	oldViews		: [],
	currentView		: null,
	loader			: null,
	menuItems		: null,

	initialize: function() {
		this.loader = app.components.loader;
		this.menuItems = $('[data-head-menu-item]');
	},

	selectCurrentMenu: function(id) {
		if (id === undefined) id = 0;
		this.menuItems.removeClass('_active')
			.filter('[data-head-menu-item="'+id+'"]').addClass('_active');
	},

	show: function(View) {
		var self = this;
		View.render();
		self.currentView = View;
	},

	hide: function () {
		var self = this;
		app.once('View.goOutDefaultStart', function(){
			self.loader.show();
		});
		self.currentView.goOutDefault();
	},

	setTitle: function(title){
		$('title').html(title);
	}

});
