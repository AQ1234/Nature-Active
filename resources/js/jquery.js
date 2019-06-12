$(document).ready(function() {
       
   $('.js--scroll-to-features').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });
    
      $('.js--scroll-to-customers').click(function () {
      $('html, body').animate({scrollTop: $('.js--customers').offset().top}, 1000);
  });
    
});