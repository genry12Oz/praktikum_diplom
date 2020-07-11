// стили CSS
import '../pages/about.css';

// swiper
import Swiper from 'swiper';

// подключение констант для корректной работы JS
import {
  COMMIT_API_URL
} from '../js/constants/constants.js';

// подключение вспомогательных функций
import {
  timeConverter
} from '../js/utils/utils.js';

// импортирую классы
import GithubApi from '../js/modules/GithubApi.js';
import Distributor from '../js/components/Distributor.js';
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList';

// DOM

// Контейнер где хранятся карточки с коммитами
const container = document.querySelector('.swiper-wrapper');

// Swiper
const mySwiper = new Swiper('.swiper-container', {
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

// Инстансы классов
const card = new CommitCard();
const distributor = new Distributor(card, timeConverter);
const gitApi =  new GithubApi(COMMIT_API_URL);
const commitList = new CommitCardList(container, gitApi, distributor, mySwiper);