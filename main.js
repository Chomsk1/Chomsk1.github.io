
var last_known_scroll_position = 0;
var aboutMe = document.querySelector('.aboutMe')

window.addEventListener('scroll', function(e) {

    last_known_scroll_position = window.scrollY;
  
    if (last_known_scroll_position > 106) {
  
      window.requestAnimationFrame(function() {
        var aboutMe = document.querySelector('.aboutMe')
        aboutMe.style.opacity = 1;
        console.log('KJeaa')
        // ticking = false;
      });
       
    //   ticking = true;
  
    }
    
  });