"use strict";

/**
 * class	app.views.Default
 * @extends	Backbone.View
 */
app.views.Default = Backbone.View.extend({

	loader				: null,
	popup				: null,
	html				: null,
	needGoIn			: false,
	className			: null,
	pageHolder			: null,
	subView				: {},
	$bigGallery: null,

	defLoadAllImages	: null,
	defGoIn				: null,
	defLoaderHide		: null,
	defaultLoaderHide	: true,

	initialize: function() {
		this.loader = app.components.loader;
		//this.popup = app.components.PopUp;

		app.on('checkGetParams', this.checkGetParams, this);
	},


	/**
	 * Во вьюху пришел html
	 * @param {String}		html
	 * @param {String}		className
	 */
	setProps: function(html, className ) {
		this.html = html;
		this.className = className;
	},


	render: function() {
		var self = this;
		self.loader.hide();

		app.dom.$window.scrollTop(0);

		if(self.html) {
			app.GlobalView.$el.append(self.html);
			self.setElement(app.GlobalView.$el.find('[data-view="'+self.className+'"]'));

			app.trigger('dom.append');
			if(self.needGoIn){
				self.goIn();
			}
		}else{
			self.goIn();
		}
	},

	afterRender: function(){
		this.checkGetParams();
	},

	checkGetParams: function(){
		if(!app.utils.getData){
			app.utils.getData = app.utils.parseUrlQuery(window.location.search);
		}

		if(app.utils.getData['goto']){
			var $target = $(app.utils.getData['goto']);
			if($target.length){
				if(!app.Router._pageCounter){
					$(window).load(_helper);
				}else{
					_helper();
				}
			}
		}else{
			$target = $('body');
			_helper();
		}

		function _helper(){
			var index = -1;
			var section = window.location.pathname.split('/')[1];

			if (app.utils.getData['goto'] == 'guarantee') index = 5;
				else if (section == 'information') index = 4;

			if (index > -1) app.GlobalView.selectCurrentMenu(index);

			setTimeout(function(){
				$('html, body').stop(true, true).animate({'scrollTop': $target.offset().top}, 500);
			}, 310);
		}
	},

	goOutDefault: function(){
		var self = this;
		app.trigger('View.goOutDefaultStart');
		//self.$el.fadeOut(600, function(){
		setTimeout(function () {
			self.remove();
			app.trigger('View.goOutDefaultEnd');
		}, 300);

		//});
	},

	goIn: function(){
		var self = this;
		self.$el.css({'display':'none'});
		self.$el.fadeIn(600);
		app.trigger('View.goIn');
	},


	remove: function(){
		var self = this;
		self.trigger('remove');
		self.off();
		app.off(null, null, self);
		_.each(self.subView, function(item, key){
			app.off(null, null, item);
			item.remove();
			delete(self.subView[key]);
		});
		self.subView = null;
		app.views.Default.__super__.remove.apply(self, arguments);
	},

	initGoto: function() {
		this.$el.on('click', '[data-goto]', function(e){
			e.preventDefault();
			$('html, body').animate({'scrollTop': $($(this).data('goto')).offset().top - app.Header.$el.find('[data-head-top]').height()}, 500);
		});
	}

});
