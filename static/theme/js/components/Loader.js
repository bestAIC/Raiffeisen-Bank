app.components.Loader = (function() {

	"use strict";

	function Loader() {
		var self = this,
			tpl = '<div class="loader js-loader">'+
					'<div class="loader_box">'+
					'</div>'+
				'</div>';

		this.obj = null;
		this.isVisilbe = false;
		this.nobg = false;

		function _init(){
			//self.obj = $(tpl);
			//self.obj.appendTo('.grid').hide();
			self.obj = $('.js-loader');
		}

		_init();
	}


	Loader.prototype.show = function() {
		if(!this.isVisilbe){
			if(this.nobg){
				this.obj.addClass('_nobg');
			}
			this.obj.fadeIn(300, function(){
				//app.dom.$window.scrollTop(0);
			});
			this.isVisilbe = true;
		}
		return this;
	};

	Loader.prototype.hide = function(type) {
		var self = this;
		if(self.isVisilbe){
			_hide();
		}
		function _hide(){
			self.obj.stop().fadeOut(1000).removeClass('_nobg');
			self.nobg = false;
			self.isVisilbe = false;
		}
	};

	return new Loader();
})();