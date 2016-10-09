(function($) {
  var onScreenOffsetX = 0.2,
      onScreenOffsetY = 0.2,
      mobOnScreenOffsetX = 0.05,
      mobOnScreenOffsetY = 0.05,
      onScreenbreakPoint = 800;

  $(window).on('load', function() {
    $('.animate').each(function() {
      if($(this).isOnScreen(onScreenOffsetX, onScreenOffsetY)) {
        $(this).removeClass('fadeInUp fadeIn');
      }
    });
  });

  $(window).on('scroll', function() {
    $('.animate').each(function() {
      if ($(window).width() < onScreenbreakPoint) {
        var on_screen = $(this).isOnScreen(mobOnScreenOffsetX, mobOnScreenOffsetY)
      } else {
        var on_screen = $(this).isOnScreen(onScreenOffsetX, onScreenOffsetY)
      }
      if(on_screen) {
        $(this).removeClass('fadeInUp fadeIn');
      }
      if ($('.skillz').isOnScreen(onScreenOffsetX, onScreenOffsetY)) {
        $('.js-skillz-percent').each(function() {
          $(this).css(
            "width", $(this).data('percent') + '%'
          );
        });
      }
    });
  });
})(jQuery);
