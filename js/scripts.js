$(document).ready(function() {
  $('.js-contact').click(function(e) {
    e.preventDefault;
    $('html, body').animate({
      scrollTop: $("#contact").position().top
    }, 2000);
  });

  $('.arrow-up').click(function() {
    $('body').animate({
      scrollTop: 0
    }, 500);
  });
  $(window).scroll(function() {
    // get skills position from top
    var x = $('.skills').position().top;
    // get skills height
    var y = $('.skills').height();
    // subtract height from position, so it activates before its at the top of the page
    var x = x - y;
    // checks to see if you have scrolled far enough down to activate the animation
    if ($(window).scrollTop() >= x) {
      //find each element with the class .skill-percent
      $('.skill-percent').each(function() {
        // animate
        $(this).css(
          //finds the width from the data-percent attribute
          "width", $(this).data('percent') + '%'
        );
      });
    }

    // display arrow-up if near the bottom of the page
    var a = $(window).scrollTop();
    var b = $(window).height() / 2;
    if (a > b) {
      $('.arrow-up').addClass("arrow-active");
    } else {
      $('.arrow-up').removeClass("arrow-active");
    }
  });
});