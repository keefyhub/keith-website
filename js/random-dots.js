function randomDots(target) {
  if(target == null || typeof target == 'undefined') target = $('body');

  var randomDot = $('<div class="random-dot" />').css({
    'position': 'absolute',
    'top': '-50px'
  }).html('	&#x2022;'),
  animationHeight = $(target).height(),
  animationWidth = $(document).width();

  setInterval(function() {
    var startPositionLeft = Math.random() * animationWidth,
    startPositionTop = Math.random() * animationHeight - 100,
    startOpacity = 0,
    maxCount = 50,
    duration = Math.random() * animationHeight + 5000,
    colHeart = 'white',
    dotCount = $('.random-dot').length;
    if(maxCount > dotCount) {
      randomDot.clone().appendTo(target).css({
        left: startPositionLeft,
        top: startPositionTop,
        opacity: startOpacity,
        'color': colHeart
      }).animate({
        'opacity': 1
      }, duration, 'linear', function() {
        $(this).remove();
      });
    }
  }, 200);
}

// (function($) {
//   randomDots('.skillz');
// })(jQuery);
