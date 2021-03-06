$(document).ready(function () {
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    
$('a[href*="#"]')

.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
  });

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
  }, {
    offset: '50%'
  });
});