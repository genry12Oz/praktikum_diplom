import './pages/index.css';

// подключение констант для корректной работы JS
import {
    API_KEY as apiKey,
    PRELOADER as preloader,
    NOT_FOUND as notFound,
    // STORAGE as storage,
    // FORM as form,                   // может не понадобится
    INPUT_THEME as input,
    INPUT_ERROR as errorMessage,
    SEARCH_BUTTON as submitButton,
    RESULTS as resultsBlock,
    NEWS_CONTAINER as container,
    ADD_FORM as addForm,
    ADD_BUTTON as addButton,
    // ERRORS as errors        // доделаю позже
} from './js/constants/constants.js';

// подключение вспомогательных функций
import {
    timeConverter
  } from './js/utils/utils.js';

// импортирую классы
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import SearchInput from './js/components/SearchInput.js';

// инстансы классов
const storage = new DataStorage();
const card = new NewsCard();
const cardList = new NewsCardList(storage, container, card, addForm, addButton, timeConverter, resultsBlock);
const api = new NewsApi(input, apiKey, preloader, notFound, storage, cardList /*url,*/);
const search = new SearchInput(/*form,*/ input, submitButton, errorMessage, /*errors,*/ api);

console.log('index');