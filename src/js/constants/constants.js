// Api
const API_KEY = '96da638911444dd2b3a83de2e14e3c1f';
const COMMIT_API_URL = 'https://api.github.com/repos/genry12Oz/praktikum_diplom/commits?per_page=20&sha=7cf3284d1ad8b8a6efd5c0c03ac93a';

// Сообщения об ошибках
const ERRORS = {
    badValue: 'Нужно ввести ключевое слово',
    emptyInput: 'Это поле не должно быть пустым',
    invalidInput: 'Спецсимволы не разрешены'
    }

// Статистика
const STAT_THEME = document.querySelector('.statistics__category');
const STAT_WEEK = document.querySelector('.statistics__number_week');
const STAT_HEADLINE = document.querySelector('.statistics__number_headline');

// График
const GRAPH_MONTH = document.querySelector('.graph__month');
const GRAPH_DATA = document.querySelectorAll('.graph__data');        // посмотри нумеруется ли querySelectorAll
const GRAPH_ELEMENT = document.querySelectorAll('.graph__element');

//                   -- analytics.js --
const CATEGORY = document.querySelector('.statistics__category');

export {
    API_KEY,
    COMMIT_API_URL,
    STAT_THEME,
    STAT_WEEK,
    STAT_HEADLINE,
    GRAPH_MONTH,
    GRAPH_DATA,
    GRAPH_ELEMENT,
    ERRORS,
    CATEGORY
  };