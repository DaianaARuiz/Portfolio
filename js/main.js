import {scrollTopButton, removeImgCv, ScrollAnimation,showNavbar,responsiveBtnMenu,linkActive} from "./functions.js";


/*===== PARTICLES JS =====*/ 
particlesJS(
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#b30049"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 1,
              "color": "#b30049"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#b30049",
            "opacity": 0.9059278143890204,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);







  
/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// });

// /*SCROLL HOME*/
// sr.reveal('.start__title',{}); 
// sr.reveal('.start__descripcion',{delay: 200}); 
// // sr.reveal('.home__img',{delay: 400}); 
// sr.reveal('.start__social-media',{ interval: 200}); 




const d = document,
      w = window;

d.addEventListener("DOMContentLoaded",(e)=>{
  showNavbar('header-toggle','nav-bar','body-pd','header');
  responsiveBtnMenu();
  scrollTopButton(".scroll-to-btn");
  removeImgCv(".header__img");
  ScrollAnimation(".animated");
  // linkActive();
  linkActive();
})


// const linkColor = d.querySelectorAll('.nav__link');

// function colorLink(){
//     if(linkColor){
//         linkColor.forEach(l=> l.classList.remove('active'))
//         this.classList.add('active')
//         console.log(this);
//     }
// }
// linkColor.forEach(l=> l.addEventListener('click', colorLink))
