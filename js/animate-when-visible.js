(function($) {
  var jsAnimateSelector = $('.animate'),
      onScreenOffsetX = 0.2,
      onScreenOffsetY = 0.2,
      mobOnScreenOffsetX = 0.05,
      mobOnScreenOffsetY = 0.05,
      onScreenBreakPoint = 800,
      onScreen;

  if(jsAnimateSelector.length < 1) return;

  function checkForElementsToAnimate() {
    jsAnimateSelector.each(function() {
      var alreadyOnScreen = $(this).offset().top < $(window).scrollTop();

      if ($(window).width() < onScreenBreakPoint) {
        var on_screen = $(this).isOnScreen(mobOnScreenOffsetX, mobOnScreenOffsetY)
      } else {
        var on_screen = $(this).isOnScreen(onScreenOffsetX, onScreenOffsetY)
      }

      if(on_screen || alreadyOnScreen) {
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
  }

  $(window).on('load scroll', function() {
    checkForElementsToAnimate();
  });
})(jQuery);
