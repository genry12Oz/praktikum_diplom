//                   -- index.js --
// Api
const API_KEY = '96da638911444dd2b3a83de2e14e3c1f';
const PRELOADER = document.querySelector('.preloader');
const NOT_FOUND = document.querySelector('.error');

// форма поиска
const INPUT_THEME = document.querySelector('.header__input');
const INPUT_ERROR = document.getElementById('error-message');
const SEARCH_BUTTON = document.getElementById('submit-header');

// Блок с новостями
const RESULTS = document.querySelector('.results');

// контейнер где хранятся карточки c новостями
const NEWS_CONTAINER = document.querySelector('.results__container');

// кнопка контейнера (добавить карточки)
const ADD_FORM = document.querySelector('.results__form');
const ADD_BUTTON = document.getElementById('add-button');

// Статистика
const STAT_THEME = document.querySelector('.statistics__category');
const STAT_WEEK = document.querySelector('.statistics__number_week');
const STAT_HEADLINE = document.querySelector('.statistics__number_headline');

// График
const GRAPH_MONTH = document.querySelector('.graph__month');
const GRAPH_DATA = document.querySelectorAll('.graph__data');        // посмотри нумеруется ли querySelectorAll
const GRAPH_ELEMENT = document.querySelectorAll('.graph__element');

// сообщения об ошибках
// const ERRORS = {
//     invalidInput: 'Нужно ввести ключевое слово'            // доделаю позже
//     }



//                   -- about.js --
// Api
// const API_COMMIT = {                  // доделаю позже

// }

// контейнер где хранятся карточки с коммитами
const COMMIT_CONTAINER = document.querySelector('.swiper-wrapper');

//                   -- analytics.js --
const CATEGORY = document.querySelector('.statistics__category');

export {
    API_KEY,
    PRELOADER,
    NOT_FOUND,
    // STORAGE, 
    // FORM,
    INPUT_THEME,
    INPUT_ERROR,
    SEARCH_BUTTON,
    RESULTS,
    NEWS_CONTAINER,
    ADD_FORM,
    ADD_BUTTON,
    STAT_THEME,
    STAT_WEEK,
    STAT_HEADLINE,
    GRAPH_MONTH,
    GRAPH_DATA,
    GRAPH_ELEMENT,
    // ERRORS
    COMMIT_CONTAINER,
    CATEGORY
  };