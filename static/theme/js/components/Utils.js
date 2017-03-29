(function() {

	'use strict';

	//app.utils.transformPrefix = Modernizr.testAllProps('transform','pfx');

	//app.utils.transitionPrefix = Modernizr.testAllProps('transition','pfx');

	app.utils.getData = null;
	/**
	 * Возвращает текущую позицию скрола
	 * @returns {Number}
	 */
	app.utils.getScrollPosition = function() {

		if ( window.scrollY !== undefined ) {
			return window.scrollY;
		} else if ( document.documentElement && document.documentElement.scrollTop ) { // for ie
			return document.documentElement.scrollTop;
		}
		return 0;
	};


	/**
	 * Склоняем слова
	 * @param {Number}	number
	 * @param {String}	one
	 * @param {String}	two
	 * @param {String}	five
	 * @returns {*}
	 */
	app.utils.okonchanie = function( number, one, two, five ) {

		var poslezpt = parseInt( number ) !== parseFloat( number );

		number += '';
		// 10 - 19 || 5 - 10
		if ( (number.length > 1 && +number.substr( number.length - 2, 1) == '1') || +number.substr( number.length - 1, 1 ) > 4  && +number.substr( number.length - 1, 1 ) < 10 && !poslezpt ){
			return five;
		}
		// 1
		else if ( number.substr( number.length - 1, 1) == '1' && !poslezpt )
		{
			return one;
		}
		// 2 - 4, 1.5
		else
		{
			return two;
		}
	};


	/**
	 * Определяем мобильное или нет устройство
	 * @return {boolean}
	 */
	app.utils.isIPhone = function() {
		return /iPhone|iPod/i.test(navigator.userAgent) ;
	},

	/**
	 * Парсит GET. Возвращает объект в виде ключ -> значение
	 * @returns {Object}
	 */
	app.utils.parseUrlQuery = function( link ) {
		var qu		= link && link.indexOf('?'),
			data	= {},
			i,
			param,
			pair
		;

		if ( link ) {
			if ( qu !== -1 ) {
				link = link.substr(qu + 1);
			}else{
				link = null;
			}
		} else {
			link = location.search && location.search.substr(1);
		}

		if ( link ) {
			pair = ( link ).split('&');
			for ( i = 0; i < pair.length; i ++ ) {
				param = pair[i].split('=');
				data[param[0]] = param[1];
			}
		}
		return data;
	};

	/**
	 * Добавляем get параметр в урл
	 * @param {String}	key
	 * @param {String}	value
	 */
	app.utils.insertParam = function(key, value){
		key = encodeURI(key); value = encodeURI(value);

		var kvp = document.location.search.substr(1).split('&'),
			href = '?'
		;

		var i=kvp.length; var x; while(i--)
		{
			x = kvp[i].split('=');
			//console.log(x, i);
			if (x[0]==key)
			{
				x[1] = value;
				kvp[i] = x.join('=');
				break;
			}
		}

		if(i<0) {kvp[kvp.length] = [key,value].join('=');}

		//this will reload the page, it's likely better to store this until finished
		//document.location.search = kvp.join('&');
		var tempArr = [];
		_.each(kvp, function(num, key){
			if(num != ''){
				tempArr.push(num);
			}
		});
		return '?'+tempArr.join('&');
	};

	app.utils.insertParam2 = function(url, key, value){
		console.log(url);
		key = encodeURI(key); value = encodeURI(value);

		if(url.indexOf("?") !== -1){
			url += '&' + [key,value].join('=');
		}else{
			url += '?' + [key,value].join('=');
		}

		return url;
	};

	/**
	 * получаем ширину системного скролла
	 * @return {number} Ширина скролла.
	 */
	app.utils.scrollWidth = function(){
		// создадим элемент с прокруткой
		var div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width =  '50px';
		div.style.height = '50px';

		// при display:none размеры нельзя узнать
		// нужно, чтобы элемент был видим,
		// visibility:hidden - можно, т.к. сохраняет геометрию
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		var scrollWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
		return scrollWidth;
	};


	/**
	 * Делает из однозначиного число, двузначное (с нулем перед значением)
	 * @param number
	 * @returns {string}
	 */
	app.utils.doubleNumber = function ( number ) {
		number = number.toString();
		return number.length === 1 ? '0' + number : number;
	};

	/**
	 * направление скролла window
	 */
	app.utils.getDirection = {
		direction : 1,
		lastScrollTop : 0,
		init : function(){
			var self = this;
			$(window).scroll(function(){
				var scroll = $(window).scrollTop()
				;

				if(self.lastScrollTop <= scroll){
					self.direction = 1;
				}else{
					self.direction = -1;
				}
				self.lastScrollTop = scroll;
			});
		}
	};

	/**
	 * Задает элементу высоту окна и подпивысает на ресайз
	 * @param jQuery object		$obj
	 * @param Object			context
	 */
	app.utils.heightLikeWindow = function ( $obj, context ) {
		_helper();
		app.on('resize', _helper, context);

		function _helper(){
			$obj.css({'height' : app.Size.height});
		}
	};

	/**
	 * Задает элементу высоту и ширину окна и подпивысает на ресайз
	 * @param jQuery object		$obj
	 * @param Object			context
	 */
	app.utils.sizeLikeWindow = function ( $obj, context ) {
		_helper(app.Size.getSize());
		app.on('resize', _helper, context);

		function _helper(options) {
			$obj.css(options);
		}
	};

	/**
	 * Получаем путь background-image
	 * @param jQuery object
	 */
	app.utils.getBackgroundImageUrl = function ($obj) {
		var style = $obj[0].currentStyle || window.getComputedStyle($obj[0], false);
		return style.backgroundImage.slice(4, -1).replace(/"/g,"");
	};

	/*app.utils.isTableLand = (device.tablet() && ($(window).width() > $(window).height())) ? true : false;
	app.utils.isTablePort = (device.tablet() && ($(window).width() < $(window).height())) ? true : false;
	app.utils.isMobileLand = (device.mobile() && ($(window).width() > $(window).height())) ? true : false;
	app.utils.isMobilePort = (device.mobile() && ($(window).width() < $(window).height())) ? true : false;
	app.utils.isMobile = app.utils.isMobileLand || app.utils.isMobilePort;*/

})();
