import '../pages/about.css';

import Swiper from 'swiper';
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
          slidesPerView: 'auto',  
          spaceBetween: 16,
          centeredSlides: true,
          loop: 'true'
        }
      }
});
// const mySwiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 8,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },
//     // breakpoints: {
// 	// 	1025: {
//     //         slidesPerView: 3,
//     //         spaceBetween: 15
// 	// 	},
// 	// 	768: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 30
// 	// 	}
// 	// }
//     // autoplay: {
//     //     delay: 2000,
//     //   }
//     // navigation: {                         в мобильной версии не нужны
//     //     nextEl: '.swiper-button-next',
//     //     prevEl: '.swiper-button-prev',
//     //   },
//   });

console.log('about');