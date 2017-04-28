$(window).load(function(){
    $(window).scrollTop(0);
});

definegrid = function() {
    var browserWidth = $(window).width();
    if (browserWidth >= 1001)
    {
        pageUnits = 'px';
        colUnits = 'px';
        pagewidth = 1170;
        columns = 12;
        columnwidth = 70;
        gutterwidth = 30;
        pagetopmargin = 0;
        rowheight = 20;
        gridonload = 'on';
        makehugrid();
    }

};

$(document).ready(function() {
    $('html').flowtype({
        minFont   : 11,
        maxFont   : 16,
        fontRatio : 94
    });
});

/*$(document).ready(function() {
    definegrid();
    setgridonload();
});*/

/*$(window).resize(function() {
    definegrid();
    setgridonresize();
});*/

$('a.likes__share-link').click(function(e){
    e.preventDefault();
    $('.popup-share').toggleClass('popup-share_visible');
  });

  $('body').on('click', function(event){
		if( $(event.target).closest('.likes__share').length === 0 && !$(event.target).is('.likes__share-link')) {
//			event.preventDefault();
      $('.popup-share').removeClass('popup-share_visible');
		}
});
/*
$(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 100) {
        $("#header").addClass("scroll-header");
    } else {
        $("#header").removeClass("scroll-header");
    }
});
*/
$(window).load(function(){

    setTimeout(function() {
        $('body').removeClass('loading');
    }, 1500);

});

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.loaded-block, .span-yellow');

    // If the animation has already been started

    $elem.each(function(){
        if (isElementInViewport($(this))) {
            // Start the animation
            $(this).addClass('show-now');
        }
    });
}

$(window).load(function() {
    $(window).scroll(function(){
        checkAnimation();
    });
});

$('.header__hamburger').click(function(){
    $('html, body').removeClass('popup-numbers-active popup-links-active');
    $('html, body').toggleClass('show-menu-active');
});

$('.sec-menu--mobile').click(function(){
    $('html, body').removeClass('popup-numbers-active show-menu-active');
    $('html, body').toggleClass('popup-links-active');
});

$('.ring').click(function(){
    $('html, body').removeClass('popup-links-active show-menu-active');
    $('html, body').toggleClass('popup-numbers-active');
});

$('.popup-numbers').on('click', function(e) {
    if (e.target !== this)
        return;
    $('html, body').toggleClass('popup-numbers-active');
});

$('.popup-links').on('click', function(e) {
    if (e.target !== this)
        return;
    $('html, body').toggleClass('popup-links-active');
});

$('.header__menu_background').on('click', function(e) {
    if (e.target !== this)
        return;
    $('html, body').toggleClass('show-menu-active');
});

$( '.mortgage-intro' ).width();

(function($){
    $.fn.accordion = function(){

        var activeClass = 'active';
        var $titles = $(this).children().filter(':even');
        var $contents = $(this).children().filter(':odd');

        var hideAllContent = function(el) {
            $contents.hide();
        };
        var showContent = function(el) {
            return el.next().show();
        };

        hideAllContent();
        showContent($(this).find('.' + activeClass));

        $titles.click(function(){
            hideAllContent();
            $titles.removeClass(activeClass);
            $(this).toggleClass(activeClass);
            showContent($(this));
        });
    };

    // init
    $('.accordion').accordion();
})(jQuery);



/*renat*/

$('.conditions .load-more').on('click', function(){
    $('.conditions__row--hide').toggleClass('conditions__row--hide conditions__row--show');
});

$('.documents__item').on('click', function(){
    event.preventDefault();
    $('body').toggleClass('show-popup1');
});

$('.popup-tarif, .popup-tarif__close-svg').on('click', function(e){
    if (e.target !== this)
        return;
    $('body').toggleClass('show-popup1');
});

$('.span-tooltip').on('click', function(e){
    if ($(event.target).closest('.span-tooltip__inner').length !== 1) {
        $('.span-tooltip').toggleClass('show-tooltip');
    }
});

$('body').on('click', function(event){
    if($(event.target).closest('.span-tooltip__inner').length !== 1 && !$(event.target).is('.span-tooltip')) {
        //  event.preventDefault();
        $('.span-tooltip').removeClass('show-tooltip');
    }
});

$('.action-share').click(function(e){
    e.preventDefault();
    $('.popup-tarif .popup-share').toggleClass('popup-share_visible-p');
});

$('body').on('click', function(event){
    if($(event.target).closest('.popup-share').length !== 1 && !$(event.target).is('.action-share')) {
        //event.preventDefault();
        $('.popup-tarif .popup-share').removeClass('popup-share_visible-p');
    }
});


$('.action-mail').click(function(e){
    e.preventDefault();
    $('.popup-tarif .tooltip-mail').toggleClass('tooltip-mail_visible');
});

$('body').on('click', function(event){
    if($(event.target).closest('.tooltip-mail').length !== 1 && !$(event.target).is('.action-mail')) {
       // event.preventDefault();
        $('.popup-tarif .tooltip-mail').removeClass('tooltip-mail_visible');
    }
});

//Renat Sagdeev, [28.04.17 14:05]
function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var cSlider = $('.input-slider');
cSlider.each(function(){
    $(this).slider({
        range: 'min',
        min: $(this).data('sl-min'),
        max: $(this).data('sl-max'),
        value: $(this).data('sl-value'),
        step: $(this).data('sl-step')
    });
});

$('#select-1').selectmenu();

function toPrice(str) {
    return String(str).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
}

$('#sl-period').on( "slide", function( event, ui ) {
    $(this).parent().find('input').val(ui.value + ' ' + declOfNum(ui.value, ['год', 'года', 'лет']));
});

$('#sl-price').on( "slide", function( event, ui ) {
    $(this).parent().find('input').val(toPrice(ui.value));
    console.log($('#sl-deposit').parent().find('input').val().replace(/ /g, ''));
});

$('#sl-deposit').on( "slide", function( event, ui ) {
    var currPrice = parseInt($('#sl-price').parent().find('input').val().replace(/ /g, ''));
    var percDeposit = Math.floor(100 * ui.value/currPrice);
    $(this).parent().find('input').val(toPrice(ui.value) + ' (' + percDeposit + '%)');
});

