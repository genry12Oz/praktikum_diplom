export default class NewsApi {
    constructor (input, apiKey, preloader, notFound, storage, instance) {
        this.input = input;
        this.key = apiKey;
        this.loader = preloader;
        this.error = notFound;
        this.storage = storage;
        this.instance = instance;
    }

    // получение данных с сервера
    getInfo() {
        this.error.classList.remove('error_active');

        let topic = this.input.value;

        let url = `https://praktikum.tk/news/v2/everything?q=${topic}&apiKey=${this.key}`;

        fetch(url)
          .then(res => {
            this.loader.classList.add('preloader_active');
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
          .then(data => {
            this.storage.saveData(data);
            this.instance.check();
            this.loader.classList.remove('preloader_active');
        })
          .catch(err => {
            this.error.classList.add('error_active');
            console.log(err);
        })
    }
}