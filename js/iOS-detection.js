(function($) {
  function is_iOS_device() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }

    return false;
  }
  if(is_iOS_device()) {
    $('html').addClass('iOS');
  }
})(jQuery);
