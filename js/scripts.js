$(document).ready(function () {
    /* Push the nav over by 250px over */
    $('.menu-icon').click(function () {
        $('.nav-menu').animate({
            left: "0px"
        }, 600);
        $('body').addClass('menu-active');
    });

    /* Then push back */
    $('.icon-close').click(function () {
        $('.nav-menu').animate({
            left: "-250px"
        }, 600);
        $('body').removeClass('menu-active');
    });
    /* Mail Tab */
    $('.mail-icon').click(function () {
        $('.contact').animate({
            left: "0px"
        }, 600);
        $('body').addClass('menu-active');
    });

    /* Then push back */
    $('.icon-close').click(function () {
        $('.contact').animate({
            left: "-250px"
        }, 600);
        $('body').removeClass('menu-active');
    }); // End Popout options
	
	/* make menu smaller on scroll 
	$(document).on('scroll', function(){
	var t = $(document).scrollTop();
	var w = $(window).width();
	
	$('header').toggleClass('header-small', t > 150 && (w > 750));	
	}); // End of menu mini */
	
    $(window).on("swiperight", function (event) {
        $('.nav-menu').animate({
            left: "0px"
        }, 600);
        $('body').addClass('menu-active');
    });

    $(window).on("swipeleft", function (event) {
        $('.nav-menu, .contact').animate({
            left: "-250px"
        }, 600);
        $('body').removeClass('menu-active');
    }); // End swipe to close */
});

// Lightbox event
if ($(window).width() > 480) {
$('img.lightbox').on('click', function(){
	$('div#lightbox').fadeIn(700);
	var imageSrc = $(this).attr('src');
	$('div#lightbox img').attr('src', imageSrc);
});

$('div#lightbox').on('click', function(){
	$('div#lightbox').fadeOut(500);
}); // End of lightbox click function

$(document).keydown(function(e){
	var esc = e.keyCode == 27;
  if (esc) {
      $('div#lightbox').fadeOut(500);
   }
}); // End of keypress ESC to exit lightbox
}

$(window).scroll(function() {
  // get skills position from top
  var x = $('.skills').position().top;
  // get skills height
  var y = $('.skills').height() * 1.5;
  // subtract height from position, so it activates before its at the top of the page
  var x = x - y;
  // checks to see if you have scrolled far enough down to activate the animation
  if ($(window).scrollTop() >= x) {
    //find each element with the class .skill-percent
    $('.skill-percent').each(function() {
      // animate
      $(this).animate({
        //finds the width from the data-percent attribute
        width: $(this).data('percent') + '%'
      }, 1000);
    });
  }
});