(function($) {
  $('.js-contact').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#contact").position().top
    }, 500);
  });
})(jQuery);
