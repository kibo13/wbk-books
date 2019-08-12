$(document).ready(function () {

  /**
      * Counter Animation  
   */

  $('.numbers').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });


  /**
      * Button to Top  
   */

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
      $('.btn-top').fadeIn();
    } else {
      $('.btn-top').fadeOut();
    }
  });

  $('.btn-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300)
  })
})