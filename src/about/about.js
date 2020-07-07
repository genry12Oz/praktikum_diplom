import '../pages/about.css';

// подключение констант для корректной работы JS
import {
  COMMIT_CONTAINER as container
} from '../js/constants/constants.js';

// подключение вспомогательных функций
import {
  timeConverter,
  mySwiper as swiper
} from '../js/utils/utils.js';

// импортирую классы
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList';
import GithubApi from '../js/modules/GithubApi.js';

// инстансы классов
const commitCard = new CommitCard();
const commitList = new CommitCardList(container, timeConverter, commitCard, swiper);
const gitApi =  new GithubApi(commitList);