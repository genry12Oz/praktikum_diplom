// стили CSS
import './pages/index.css';

// подключение констант для корректной работы JS
import {
  API_KEY,
  ERRORS
} from './js/constants/constants.js';

// подключение вспомогательных функций
import {
  timeConverter
} from './js/utils/utils.js';

// импортирую классы
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import Distributor from './js/components/Distributor.js';
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import SearchInput from './js/components/SearchInput.js';

// DOM

// Форма поиска
const input = document.querySelector('.header__input');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit-header');
// Api
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.error');
// Блок с новостями
const resultsBlock = document.querySelector('.results');
const container = document.querySelector('.results__container');
const resultsForm = document.querySelector('.results__form');
const addButton = document.getElementById('add-button');

// Инстансы классов
const storage = new DataStorage();
const card = new NewsCard();
const distributor = new Distributor(card, timeConverter);
const cardList = new NewsCardList(storage, distributor, container, card, resultsForm, addButton, resultsBlock);
const api = new NewsApi(input, API_KEY, preloader, notFound, storage, cardList);
const search = new SearchInput(input, submitButton, errorMessage, ERRORS, api);