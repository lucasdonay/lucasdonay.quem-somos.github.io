/* SLIDES CARDS */

var swiper = new Swiper(".swiper", {
  slidesPerView: 3.3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:'on',
  breakpoints: {
    297: {
            slidesPerView: 1.2,
            spaceBetween: 28  
    },
    500: {
            slidesPerView: 1.8,
            spaceBetween: 33
     },
     700: {
      slidesPerView: 2.2,
      spaceBetween: 35
},
    991: {
            slidesPerView: 2.8,
            spaceBetween: 38
     },
    1200: {
    slidesPerView: 3.2                          
    }
  }
});

AOS.init();
