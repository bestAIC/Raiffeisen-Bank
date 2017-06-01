/**
 * Created by jenya on 24.05.17.
 */

(function($){
    $.fn.accordion = function(){

        var activeClass = 'active';
        var $titles = $(this).children().filter(':even');
        var $contents = $(this).children().filter(':odd');

        var hideAllContent = function(el) {
            $contents.hide();
        };

        var showContent = function(el) {
            return el.next().toggle();
        };

        hideAllContent();
        showContent($(this).find('.' + activeClass));

        $titles.click(function(){

            $(this).toggleClass(activeClass);
            showContent($(this));
        });
    };

    // init
    $('.accordion .accordion__section').accordion();
})(jQuery);