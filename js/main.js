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
/* 
  const tempo_intervalo = 60; //ms -> define a velocidade da animação
  const tempo = 1000; //ms -> define o tempo total da animaçao


  function animaNumeros() {
    $('.counter-up').each(function() {  
        let count_to = $(this).data('countTo');
        let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
        let incremento = count_to / intervalos; //quanto cada contador deve aumentar
        let valor = 0.0;
        let el = $(this);
        
        let timer = setInterval(function() {
          if (valor >= count_to){ //se já contou tudo tem de parar o timer
            valor = count_to;
            clearInterval(timer);                   
          }
          
          let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
          el.text(texto);
          valor += incremento;         
        }, tempo_intervalo); 
           
      });
  }

/*   window.addEventListener("scroll", function(event) {
    const scroll_y = this.scrollY;
    const scroll_x = this.scrollX;
    

}); */

AOS.init()



function initAnima() {

  $('.counter-up').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    },
    );
    const refresh = function refresh(initialize = false) {
      // Allow refresh only when it was first initialized on startEvent
      if (initialize) initialized = true;
      if (initialized) initializeScroll();
    };
    
    /**
     * Hard refresh
     * create array with new elements and trigger refresh
     */
    const refreshHard = function refreshHard() {
      $aosElements = elements();
    
      if (isDisabled(options.disable) || isBrowserNotSupported()) {
        return disable();
      }
    
      refresh();
    };
  });

}

let init = document.querySelectorAll('[data-aos^=fade][data-aos^=fade].aos-animate')

if (init = true) {
  initAnima()
} else {
  console.log('deu erro')
} 


/* MENU RESPONSIVO */

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}