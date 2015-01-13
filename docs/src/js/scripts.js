$(document).ready(function () {

  $('h1,h2,h3,h4,h5,h6').each(function() {
    var link = '<span class="icon-link"></span>';
    if ($(this).attr('id')) {
      $(this).prepend(link);
    }
  });

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

  var d = new Date();
  var n = d.getFullYear();
  $('.current-yr').text(n);


});
