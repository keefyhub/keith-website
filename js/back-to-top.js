(function($) {
  $('.js-back-to-top').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $(window).scroll(function() {
    var windowPosition = $(window).scrollTop();
        windowTarget = $(window).height() / 2;

    if (windowPosition > windowTarget) {
      $('.back-to-top').addClass('back-to-top--active');
    } else {
      $('.back-to-top').removeClass('back-to-top--active');
    }
  });
})(jQuery);
