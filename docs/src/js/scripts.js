$(document).ready(function () {

  $(function() {
    $('a[href="#"]').click(function(e) {
      $('html,body').animate({
        scrollTop: 0
      }, 400);
      e.preventDefault();
    });
    $('a[href*="#"]:not([href="#"])').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
          scrollTop: target.offset().top
          }, 400);
        }
      }
      e.preventDefault();
    });
  });

});
