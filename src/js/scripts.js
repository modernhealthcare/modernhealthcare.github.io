$(document).ready(function () {

  var $this = $(this);

  $('h1,h2,h3,h4,h5,h6').each(function() {
    var link = '<span class="icon-link"></span>';
    if ($this.attr('id')) {
      $this.prepend(link);
    }
  });

  $(function() {
    $('a[href="#"]').click(function(e) {
      $('html,body').animate({
        scrollTop: 0
      }, 400);
      e.preventDefault();
    });
  });

  var d = new Date();
  var n = d.getFullYear();
  var $copyright = $('[data-js="copyright"]');
  $copyright.html('Copyright &copy; ' + n + ' <a href="http://www.modernhealthcare.com">Modern Healthcare</a>');
});
