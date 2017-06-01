/*jshint sub:true*/
$(window).load(function(){
    $(window).scrollTop(0);
});

$(window).load(function(){
    if ($('#bgvid').length) {
        document.getElementById('bgvid').play();
    }
    if ($('#bgvid-intro').length) {
        document.getElementById('bgvid-intro').play();
    }
    if ($('#bannerVideo').length) {
        document.getElementById('banner-video').play();
    }

});

/*
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
 */
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
        if ($('.card-image-transform').length) {
            $('.card-image-transform').addClass('card-image-transform--start');
        }
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
    checkAnimation();
    $(window).scroll(function(){
        checkAnimation();
    });
});

var player = $('video');
var hasReachedUserExperience = false;
if ($('.welcome-slider-2').length) {
    $(window).scroll(function () {
        if (isElementInViewport($('.welcome-slider-2')) && !hasReachedUserExperience) {
            hasReachedUserExperience = true;
            player.get(1).play();
            player.get(2).play();
        }

    });
}

$('.header__hamburger').click(function(){
    $('html, body').removeClass('popup-numbers-active popup-links-active');
    $('html, body').toggleClass('show-menu-active');
});

$('.menu-wrapper__header').click(function(){
    $('html, body').removeClass();
    $('html, body').addClass('show-menu-active');
});

$('.sec-menu--mobile').click(function(){
    $('html, body').removeClass('popup-numbers-active show-menu-active');
    $('html, body').toggleClass('popup-links-active');
});

$('.ring').click(function(){
    $('html, body').removeClass('popup-links-active show-menu-active');
    $('html, body').toggleClass('popup-numbers-active');
});

$('.main-menu__link').click(function(){
    $('html, body').removeClass('show-menu-active');
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

/*renat*/
$('.conditions .load-more').on('click', function(){
    $('.conditions__row--hide').toggleClass('conditions__row--hide conditions__row--show');
});

$('.documents__item').on('click', function(){
    event.preventDefault();
    $('body').toggleClass('show-popup1');
    $('.scroll-header').toggleClass('showHeader');
});

$('.popup-tarif, .popup-tarif__close-svg').on('click', function(e){
    if (e.target !== this)
        return;
    $('body').toggleClass('show-popup1');
    $('.scroll-header').toggleClass('showHeader');
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

/*
 $(window).load(function() {
 var $header = $('#tabs-1');
 var $object = $('.morgage-wrapper');
 var $object2 = $('.more-questions ');

 var headerPostionTop = $header.offset().top;
 var object2PostionTop = $object2.offset().top - $header.height();

 $( window ).resize(function() {
 headerPostionTop = $header.offset().top;
 object2PostionTop = $object2.offset().top - $header.height();
 });

 $(window).scroll(function (e) {
 var scrollTop = $(document).scrollTop();

 if (scrollTop >= headerPostionTop) {
 $header.addClass('scroll');
 $object.addClass('empty-space');
 } else {
 $header.removeClass('scroll');
 $object.removeClass('empty-space');
 }

 if (scrollTop >= object2PostionTop) {
 $header.removeClass('scroll');
 $object.removeClass('empty-space');
 }

 });

 });*/

//Renat Sagdeev, [04.05.17 18:38]

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var cSlider = $('.input-slider');
cSlider.each(function(){
    //console.log($(this).attr('data-sl-value'));
    $(this).attr('data-current-value', $(this).attr('data-sl-value'));
    $(this).slider({
        range: 'min',
        min: $(this).data('sl-min'),
        max: $(this).data('sl-max'),
        value: $(this).data('sl-value'),
        step: $(this).data('sl-step')
    });
});
if ($('.input-select').length) {
    $('.input-select').each(function () {
        $(this).selectmenu();
    });
}
function toPrice(str) {
    return String(str).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
}

function toPercent(x, y) {
    return '(' + Math.floor(100 * x / y) + '%)';
}


if ($('#calc-input-period').length) {
    $('#calc-input-period').inputmask({
        alias: 'decimal',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        groupSeparator: ' ',
        radixPoint: '.',
        autoGroup: true,
        rightAlign: false,
        min: 0,
        max: 55,
        suffix: ' ' + declOfNum($(this), ['\u0433\u043E\u0434', '\u0433\u043E\u0434\u0430', '\u043B\u0435\u0442'])
    });
}

if ($('#sl-period').length) {
    $('#sl-period').on("slide", function (event, ui) {
        $(this).parent().find('input').val(ui.value);
        $(this).attr('data-current-value', ui.value);
        $('#calc-input-period').inputmask({
            suffix: ' ' + declOfNum(ui.value, ['\u0433\u043E\u0434', '\u0433\u043E\u0434\u0430', '\u043B\u0435\u0442'])
        });
    });
}

if ($('#sl-period').length) {
    $('#sl-period').on("slidestop", function (event, ui) {
        $('#price-num').numerator({
            duration: 500,
            delimiter: ' ',
            rounding: 2,
            toValue: parseInt($('#sl-price').attr('data-current-value')) / (parseInt(ui.value) * 12)
        });
    });
}

if ($('#sl-period').length) {
    $('#sl-price').on( "slide", function( event, ui ) {
        $(this).parent().find('input').val(ui.value);
        $(this).attr('data-current-value', ui.value);
    });
}
if ($('#sl-price').length) {
    $('#sl-price').on("slidestop", function (event, ui) {
        $('#price-num').numerator({
            duration: 500,
            delimiter: ' ',
            rounding: 2,
            toValue: parseInt(ui.value) / (parseInt($('#sl-period').data('current-value') * 12))
        });
        //console.log(parseInt($('#sl-price').data('current-value')), (parseInt($('#sl-period').data('current-value')) * 12));
    });
}

if ($('#sl-price').length) {
    $('#sl-deposit').on("slide", function (event, ui) {
        $(this).parent().find('input').val(ui.value);
        $(this).attr('data-current-value', ui.value);
        //$('#calc-input-deposit').inputmask({
        //    suffix: ' '+toPercent(ui.value, $('#sl-price').attr('data-current-value'))
        //});
    });
}

if ($('#price-num').length) {
    $('#price-num').numerator({
        toValue: parseInt($('#sl-price').attr('data-current-value')) / (parseInt($('#sl-period').attr('data-current-value') * 12)),
        duration: 500,
        delimiter: ' ',
        rounding: 2
    });
}

if ($('#price-num').length) {
    $('#calc-input-deposit').inputmask({
        alias: 'decimal',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        groupSeparator: ' ',
        radixPoint: '.',
        autoGroup: true,
        rightAlign: false,
        min: 1,
        max: 999999999,
        //autoUnmask: true,
        //unmaskAsNumber: false,
        // suffix: ' '+'('+Math.floor(100 * $('#sl-deposit').data('current-value')/$('#sl-price').data('current-value'))+'%)'
    });
}
if ($('#price-num').length) {
    $('#calc-input-price').inputmask({
        alias: 'decimal',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        groupSeparator: ' ',
        radixPoint: '.',
        autoGroup: true,
        rightAlign: false,
        min: 0,
        max: 999999999
    });
}
if ($('.scroll-header').length) {
    $(window).scroll(function () {
//capture scroll
        var wintop = $(window).scrollTop(),
            docheight = $('#tab-container-1').height(),
            winheight = $(window).height(),
            startLine = $('#tab-container-1').offset().top;
        var scrolled = ((wintop - startLine) / (docheight - winheight)) * 1;

        if (scrolled > 1) {
            scrolled = 1;
        }
        if (scrolled < 0) {
            scrolled = 0;
        }

        $('.scroll-line').css('transform', ('scaleX(' + scrolled + ')'));

        if (wintop > startLine) {
            $('.scroll-header').addClass('showHeader');
        } else {
            $('.scroll-header').removeClass('showHeader');
        }
    });
}

//scrollto anchor

$('.scroll-up a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

//site menu
var $menuItems = $('.main-menu li');

$menuItems.click(function(e){
    e.preventDefault();
    var index = $menuItems.index($(this)) + 1;
    $('body').removeClass();
    $('.main-menu li a').removeClass('link--active');
    $('.main-menu li:nth-child('+index+') a').addClass('link--active');
    $('body').addClass('show--site-menu');
    $('body').addClass('show--site-menu-'+index);
    var newHeight = $('#menu'+index).height();
    $('.site-menu').height(newHeight);
});

$('.menu-button__container').click(function(e){
    e.preventDefault();
    $(this).find('.menu-button__container--click').addClass('show-share-menu');
});

$('body').on('click', function(event){
    if( $(event.target).closest('.menu-button__container').length === 0 && !$(event.target).is('.menu-button__container')) {
//			event.preventDefault();
        $('.menu-button__container--click').removeClass('show-share-menu');
    }
});
// end menu

$('.Preloader-b').click(function(){
    $('body').removeClass();
});

//renat 15.05 - filter

$('.card-filter__content.filter--close').on('click', function () {
    $(this).addClass('filter--open');
    $(this).removeClass('filter--close');
});

var $results=$('.mortgage__block'),
    $checks=$(':checkbox[name^="category"]');

$checks.change(function(){
    var $checked=$checks.filter(':checked');
    $('.mortgage__blocks_hidden').css({'display':'block', 'opacity':'1'});
    $('.load-more').hide();

    if(!$checked.length){
        $results.show().addClass('filter-show');
        return;
    }

    var checkedVals= $.map($checked, function(el){
        return el.value;
    });

    $results.removeClass('filter-show').hide().filter(function(){
        var cats=$(this).data('category').split(' ');
        var checkMatches=$.grep(checkedVals, function(val){
            return $.inArray(val, cats) > -1;
        });
        return checkMatches.length === checkedVals.length;
    }).show().addClass('filter-show');
    if(!$results.length){
//        console.log('no matches');
    }
});

$('#bannerVideo video').on('timeupdate', function() {
    $('#bannerVideoProgress').css("transform", "scaleX("+this.currentTime / this.duration+")");

}).on('ended',function(){
    setTimeout(function () {
        $('#bannerVideo').addClass('banner--hide');
    }, 500);
});

if($('.b-card-list').length > 0){
    $(window).resize(function () {
        if ($(window).width() < 1000) {
            $('.b-card-list__slider.slick-initialized').slick('unslick');
        } else {
            $('.b-card-list').each(function () {
                var $this = $(this);
                if( ! $this.find('.b-card-list__slider').is('.slick-initialized')){
                    var slick = $this.find('.b-card-list__slider').slick({
                        variableWidth: true,
                        infinite: false,
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        prevArrow: $this.find('.slider-prev'),
                        nextArrow: $this.find('.slider-next')
                    });
                }
            });
        }
    });

    $(window).resize();
}

if ($('.conditions--tarif').length) {
    $('.currency--exist').on('click', function () {
        $(this).parent().find('.currency--active').removeClass('currency--active');
        var c = $(this).data('currency');
        $(this).addClass('currency--active');
        $('.col-currency').not('.conditions__row--currency .col-currency').hide();
        $('.currency--'+c).show();
    });
}

if ($("input[data-mask]").length) {
    $("input[data-mask]").inputmask();
}

if ($("input[data-jq='datepicker']").length) {
    $("input[data-jq='datepicker']").datepicker($.extend({
            inline: true,
            changeYear: true,
            changeMonth: true,
            showOtherMonths: true
        },
        $.datepicker.regional['ru']
    ));
}


$('.open-popup-new').on('click', function(){
    event.preventDefault();
    $('body').toggleClass('show-popup1');
    $('.scroll-header').toggleClass('showHeader');
});

// $('.popup-tarif, .popup-tarif__close-svg').on('click', function(e){
//     if (e.target !== this)
//         return;
//     $('body').toggleClass('show-popup1');
//     $('.scroll-header').toggleClass('showHeader');
// });