"use strict";

document.querySelector('.btn__mobile--nav').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('nav-open');
});

const sectionHeroEl = document.querySelector('.hero');

const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
 
  if (ent.isIntersecting === false) {
    document.body.classList.add('sticky');
  }
  
  if (ent.isIntersecting === true) {
    document.body.classList.remove('sticky');
  }
},
{
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(sectionHeroEl);



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
