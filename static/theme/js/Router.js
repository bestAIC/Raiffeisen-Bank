"use strict";

/**
 * @class	app.modules.Router
 * @extends	Backbone.Router
 */
app.modules.Router = Backbone.Router.extend({

	_pageCounter: 0,

	routes: {
		'*href':            'baseRout'
	},

	baseRout : function() {
		var path = Backbone.history.fragment || './',
			view = "NotFound",
			View
		;

		if(!this._pageCounter){
			var $view = $('[data-view]');
			if($view.length) {
				if ($.trim($view.data('view')) != '') {
					view = app.views[$view.data('view')];
					View = new view({el:$view});
					app.GlobalView.show(View);
					console.log($view.data('view'));
				}else{
					console.log("[data-view] не заполнено");
				}
			}else{
				console.log("[data-view] не найдено");
			}
		}else{
			//стандартное смена страниц через
			//fadeOut->display preloader->none preloader->fadeIn
			var p1 = $.Deferred(),
				p2 = $.Deferred(),
				p3 = $.when(p1, p2)
			;

			p3.done(function() {
				if(View.html){
					app.GlobalView.show(View);
				}
			});

			app.once('View.goOutDefaultEnd', function(){
				p1.resolve();
			});
			app.once('View.ajax.complete', function(){
				p2.resolve();
			});

			app.GlobalView.hide();

			$.get(path, {}, function(data){
				if(data.jsview) {
					if ($.trim(data.jsview) != '') {
						View = new app.views[data.jsview]();

						View.setProps(
							data.body,
							data.jsview
						);
						View.needGoIn = true;
						app.trigger('View.ajax.complete');
						app.GlobalView.setTitle(data.title);
						app.GlobalView.selectCurrentMenu(data.sectionId);

						console.log(data.jsview);
					}else{
						console.log("data.jsview не заполнено");
					}
				}else{
					console.log("data.jsview не найдено");
				}
			}, 'json');
		}


		this._pageCounter++;
	}

});
