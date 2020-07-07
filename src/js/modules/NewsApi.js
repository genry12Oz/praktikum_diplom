export default class NewsApi {
    constructor (input, apiKey, preloader, notFound, storage, instance/*storage url*/) {
        this.input = input;
        this.key = apiKey;
        this.loader = preloader;
        this.error = notFound;
        this.storage = storage;
        this.instance = instance;
        // this.url = url;
        
        console.log('Я - Api!')
    }
    
    getInfo() {
        // сбрасываю сообщение об ошибке
        this.error.classList.remove('error_active');

        // получаю тему запроса
        let topic = this.input.value;
        // url поиска по любой новости
        let url = `https://praktikum.tk/news/v2/everything?q=${topic}&apiKey=${this.key}`;

        fetch(url)
          .then((res) => {
            this.loader.classList.add('preloader_active');
            return res.json()
        }) 
          .then((data) => {
            this.loader.classList.remove('preloader_active');

            if (data.articles.length === 0) {
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            } else {
                return data
            }
        })
          .then((data) => {
            this.storage.saveData(data);
            this.instance.check();
        })
          .catch((err) => {
            this.error.classList.add('error_active');
            console.log(err);
        })
    }
}