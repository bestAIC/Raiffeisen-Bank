$('.load-more__button').click(function(){
  $('.mortgage__blocks_hidden').toggleClass('mortgage__blocks_loaded');
  $('.mortgage__blocks_hidden').toggleClass('mortgage__blocks_hidden');
  $('.load-more').hide();
  $('html, body').animate({
    scrollTop: $('.mortgage__blocks_loaded').offset().top - 38 - $('.header__bottom').height()
  }, 1000);
});

var mortgageHidden = $('.mortgage__blocks_hidden .mortgage__block').length;
$('#count-hidden').text(mortgageHidden);
