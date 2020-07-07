// swiper
import Swiper from 'swiper';

// тут находятся вспомогательные функции
let timeConverter = function(time) {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
    let castomData = new Date(time);
    return castomData.toLocaleString('ru', options).substr(0, 12);
};

// Не уверен что он должен быть здесь, но это лучше чем оставлять его в about.js
let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        480: {
          loop: 'true',
          centeredSlides: 'true'
        },
        768: {
          slidesPerView: 'auto',  
          spaceBetween: 8
        },
        1025: {
          slidesPerView: 3,  
          spaceBetween: 16,
          centeredSlides: true,
          loop: 'true'
        }
      }
  });

  export {
      timeConverter,
      mySwiper
};