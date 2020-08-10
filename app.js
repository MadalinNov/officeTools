// GLOBAL VARIABLES
var burgerMenu = document.querySelector('.burger');
var sideNav = document.querySelector('.nav-links');
var backTop = document.querySelector('.backTop');
// EVENT LISTENERS
var setEventListeners = (function() {
  burgerMenu.addEventListener('click', function() {
    // NAV TOGGLER
    burgerMenu.classList.toggle('burger-active');
    sideNav.classList.toggle('nav-links-active');
  });
  //SMOOTH SCROLL
  $(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });
  //Section check
  $(window).scroll(function(){
    var scrollY=$(window).scrollTop();
    if(scrollY>400){
      backTop.classList.add('backTopActive');
    }
    else{
      backTop.classList.remove('backTopActive');
    }
  });
})();
