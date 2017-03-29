var app = (function(){

	'use strict';

	var Application = {

		root: '', // папки в base path

		base: '', // base path

		// DOM
		dom: {
			$window		: $(window),
			$document	: $(document)
		},

		// утилиты
		utils: {},

		// компоненты
		components: {},

		// модули
		modules: {},

		// вьюхи
		views: {},

		// инициализация
		initialize: function() {

			this.base = $('base').attr('href');
			this.root = this.base.substr(8).substr( this.base.substr(8).indexOf('/') );

			this._initGlobal();
			this._initHistory();
		},

		// инициализация History API
		_initHistory: function() {
			var self = this,
				cancelRoute = false
			;

			app.dom.$document.on('keydown', function (e) {
				if (e.keyCode === 17 || e.keyCode === 16) {
					cancelRoute = true;
				}
			}).on('keyup', function (e) {
				if (e.keyCode === 17 || e.keyCode === 16) {
					cancelRoute = false;
				}
			});

			// Навешиваем события на ссылки
			this.dom.$document.on("click.routing", "a[href]:not([data-not-ajax]):not([href$='.jpg'],a[href$='.png'],a[href$='.svg'])", function(e) {
				if(!cancelRoute){
					var $this = $(this);

					// Get the absolute anchor href.
					var href = {
						prop: $this.prop("href"),
						attr: $this.attr("href")
					};

					app.utils.getData = app.utils.parseUrlQuery(href.attr);

					if ( href.attr === './') {
						href.attr = '';
					}

					if (href.prop.slice(0, self.base.length) === self.base) {
						e.preventDefault();
						var wUrl = window.location.protocol + '//' + window.location.hostname + window.location.pathname;
						var pair = (href.prop).split('?');
						if(wUrl === pair[0]){
							app.Router.navigate(href.attr, {trigger: false});
							//обрабатываем get параметры
							app.trigger('checkGetParams');
						}else{
							app.Router.navigate(href.attr, {trigger: true});
						}
					}
				}
			});
		},


		_initGlobal: function() {

			app.utils.getDirection.init();
			app.components.loader = app.components.Loader;
			app.components.loader.show();

			app.Router		= new app.modules.Router();		//роутинг урлов

			app.GlobalView	= new app.views.GlobalView({el: $('.grid')});//рулит вьюхами страниц

			app.Header		= new app.views.Header();		//вьюха хедера
			app.Footer		= new app.views.Footer();		//вьюха футера


			app.Header.render();
			app.Footer.render();

			Backbone.history.start({
				pushState	: true,
				hashChange	: false,
				root		: this.root
			});

			console.log("_initGlobal");
		}

	};

	_.extend(Application, Backbone.Events);

	return Application;
})();