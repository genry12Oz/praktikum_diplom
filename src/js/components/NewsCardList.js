export default class NewsCardList {
    constructor(storage, container, card, form, button, converter, block) {
        this.storage = storage;
        this.container = container;
        this.card = card;
        this.form = form;
        this.button = button;
        this.converter = converter;
        this.block = block;

        this.setEventListener();
        this.check();

        console.log('Я - CardList!')
    }

    check() {
        let saveData = this.storage.parceData();

        console.log(saveData.articles);

        if (saveData.articles.length) {
            this.render(saveData);
        }
    }

    render(obj) {
        this.container.textContent = '';

        this.arr = [];

        this.getCard(obj);

        this.block.classList.remove('results_hide');
        this.form.classList.add('results__form_active');
    }

    getCard(obj) {
        obj.articles.forEach(element => {
            let image = element.urlToImage;
            let data = this.converter(element.publishedAt.substring(0, 10));
            let title = element.title;
            let description = element.description;
            let source = element.source.name;
            let url = element.url;
            
            this.arr.push(this.card.create(image, data, title, description, source, url));
        })

        this.addCard();
    }
    
    addCard() {
        let i = 3;
        while (i && this.arr.length) {
            this.container.appendChild(this.arr.shift());
            i--;
        }

        if (!this.arr.length) {
            this.form.classList.remove('results__form_active');
        }
    }

    setEventListener() {
        this.button.addEventListener('click', () => this.addCard());
    }

    clean() {
        this.block.classList.add('results_hide');
    }
}