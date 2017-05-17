$(window).load(function() {

    // $('ul.tabs li').click(function() {
    //     var tab_id = $(this).attr('data-tab');
    //
    //     $('ul.tabs li').removeClass('current');
    //     $('.tab-content').removeClass('current');
    //
    //     $(this).addClass('current');
    //     $("#" + tab_id).addClass('current');
    // });

    $('ul.tabs li').click(function() {
      var $this = $(this),
          tabgroup = '#' + $this.parent().data('tabgroup'),
          others = $this.siblings(),
          target = '#' + $this.data('tab');
      console.log(tabgroup, others, target);
      others.removeClass('current');
      $this.addClass('current');
      $(tabgroup).children('.tab-content').removeClass('current');
      $(target).addClass('current');
    });

});
