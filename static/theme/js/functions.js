/**
 * Много полезного тут:
 * http://www.tigir.com/javascript.htm
 * 
 * 
 */



/**
 * Получить положение скролла для окна
 */
function getBodyScrollTop()
{
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function getBodyScrollLeft()
{
  return self.pageXOffset || (document.documentElement && document.documentElement.scrollLeft) || (document.body && document.body.scrollLeft);
}





/**
 * Аналог для print_r()
 * 
 * @param	mixed	variable	Переменная любого типа
 */
function pr(variable) {
	if ($.dump) {
		if (typeof(myAlert) != 'undefined') {
			myAlert('<pre>' + $.dump(variable) + '</pre>');
		} else {
			alert($.dump(variable));
		}
	} else {
		myAlert('Не подключено расширение jQuery.dump');
	}
}

function pr2(variable, x, y) {
	
	
	
	if ( ! $.dump) {
		alert('Не подключено расширение jQuery.dump');
	}
	
	
	if ($('#dump').size() <= 0) {
		x = x || 200;
		y = y || 200;
		$('body').append('<pre style="min-width: 150px; position:absolute; top:'+ y +'px; left:'+ x +'px; border:1px solid #000000; background-color: #FFFFFF; padding:5px;" id="dump"></pre>');
	}
	
	
	
	var t = $.dump(variable);
	t = t.replace(/	/g, '    ');
	
	
	$('#dump').text(t);
}












/**
 * Как узнать координаты мыши (положение курсора мыши) относительно окна документа?
 * 
 */
function mousePageXY(e)
{
	
	var x = 0, y = 0;
	
	if (!e) e = window.event;
	
	if (e.pageX || e.pageY) {
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY) {
		x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
		y = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
	}
	
	return {"x":x, "y":y};
}