'use strict';

app.Size = (function() {

	var _android_delay	= 300,
		_min_width		= 320,
		_min_height		= 212
	;

	function Size() {

		var __bind	= function(fn, me){ return function(){ return fn.apply(me, arguments); };},
			_this	= this,
			_events	= /iPod|iPad|iPhone/g.test(navigator.userAgent) ? 'orientationchange load' : 'resize load' // айфон или все остальные
		;

		_this.width	= null;
		_this.height = null;
		_this.orientationChange = __bind(_this.orientationChange, _this);

		// делаем задержку для андроида
		if ( /android/ig.test(navigator.userAgent) ) {
			//app.dom.$window.on('orientationchange resize load', function() {
			app.dom.$window.on('load', function() {
				return setTimeout(_this.orientationChange, _android_delay);
			});
		} else {
			app.dom.$window.on(_events, _this.orientationChange);
		}
		_this.orientationChange();
	}
	
	
	Size.prototype = {

		orientationChange: function() {
			var that		= this,
				prevHeight	= that.height,
				prevWidth	= that.width
			;

			//на больших компах или ноутах с тач экраном приводит
			//к неправильному определеню ширины экрана
			//that.width	= Modernizr.touch ? window.innerWidth : app.dom.$window.width();
			that.height	= Modernizr.touch ? window.innerHeight : app.dom.$window.height();
			
			that.width	= app.dom.$window.width();
			that.width	= Math.max(_min_width, that.width);
			that.height	= Math.max(_min_height, that.height);

			if ( that.width !== prevWidth || that.height !== prevHeight ) {
				app.trigger('resize', that.getSize() );
			}
		},


		getSize: function() {
			return {
				width:	this.width,
				height:	this.height
			};
		}
	};

	return new Size();
})();