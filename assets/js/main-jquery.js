$(document).ready(function(){

  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > 50 ){
      $('nav').addClass('navbar-height');
    } else {
      $('nav').removeClass('navbar-height');
    }
  });

  /* -- Animate scroll -- */
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500, 'swing');
    }
  });

});