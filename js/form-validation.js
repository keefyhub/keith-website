function validateForm() {
  var emailValue = document.forms["Form"]["Email"].value;
  var atPosition = emailValue.indexOf("@");
  var dotPosition = emailValue.lastIndexOf(".");
  var nameValue = document.forms["Form"]["Name"].value;

  if (nameValue == null || nameValue == "") {
  	$('.error-message').addClass('error-message--active');
    $('.error-message').html('Fields must be filled in');
    return false;
  } else if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= emailValue.length) {
  	$('.error-message').addClass('error-message--active');
    $('.error-message').html('Not a valid e-mail address');
    return false;
  }
}

(function($) {
  $('.js-clear-form').on('click', function() {
    $('.error-message').removeClass('error-message--active');
  });
})(jQuery);
