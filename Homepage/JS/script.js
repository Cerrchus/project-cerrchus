// back2 Scrolling Effect

var navBackground = document.querySelector('.background_navbar');

function back2_scrolling(){
    var position = 0;
    var v = 0.66;

    function updPosition(){
        position -= v;
        navBackground.style.navBackground = position + 'px 0';
    }

    setInterval(updPosition, 50);
}
back2_scrolling();

//_____________________________________________________________________________________________________

//ON PAGE DOWN TRANSISTION FADE AWAY, ON PAGE UP TRANSITION FADE IN :: NAVBARS
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelectorAll('.navbar');
    const stickyOffset = navbar[0].offsetTop; // navbars have the same offset
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      navbar.forEach(navbar => {
        if (scrollTop > lastScrollTop) {
          // scroll down
          navbar.style.opacity = "0";
        } else {
          //scroll up
          navbar.style.opacity = "1";
        }
      });
  
      lastScrollTop = scrollTop;
    });
  });