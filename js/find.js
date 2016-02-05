(function ($) {
  $(document).ready(function(){

    $(".header").hide();

    $(function () {
        $(window).scroll(function () {
                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() < 100) {
                $('.header').fadeIn();
            } else {
                $('.header').fadeOut();
            }
        });
    });

});
  }(jQuery));
