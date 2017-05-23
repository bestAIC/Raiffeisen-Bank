(function () {
    History.Adapter.bind(window,'statechange',stateAction);

    function parseQuery(qstr) {
        var query = {};
        var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1].replace(/\+/g, ' ') || '');
        }
        return query;
    }

    function afterLoadAction() {
        var possibleState = parseQuery(window.location.search);
        if(typeof possibleState.action !== 'undefined'){
            var name = $('[data-popupid="'+possibleState.id+'"]').data('title');
            var stateString = window.location.search;

            History.pushState(possibleState , name, stateString);
        }
    }

    $(document).ready(function () {
        afterLoadAction();
    });

    function stateAction() {
        var state = History.getState();

        if(state.data.action == "popup"){
            var popupId = state.data.id;
            var $popup = $('[data-popupid="'+popupId+'"]');

            // *** for testing issues
            $popup = $('.popup-tarif');
            // ***

            $body.addClass('show-popup1');
            $popups.removeClass('popup--show');
            $popup.addClass('popup--show');
            $header.removeClass('showHeader');
        }else{
            $body.removeClass('show-popup1');
            $popups.removeClass('popup--show');
            $header.addClass('showHeader');
        }
    }

    var $popups = $('.popup');
    var $body = $('body');
    var $header = $('.scroll-header');

    $('.documents__item').click(function (e) {
        e.preventDefault();
        var popupId = $(this).data('popup');
        var $popup = $('[data-popupid="'+popupId+'"]');

        // *** for testing issues
        $popup = $('.popup-tarif');
        // ***

        var name = $(this).data('title');
        var stateObject  = {action : 'popup', id : popupId};
        var stateString = $.param(stateObject,true);

        History.pushState(stateObject , name, "?"+stateString);
    });

})();