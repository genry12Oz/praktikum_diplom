export default class CommitCardList {
    constructor(container, converter, instance, swiper) {
        this.container = container;
        this.converter = converter;
        this.instance = instance;
        this.swiper = swiper;

        console.log('Я - commitList');
    }

    render(obj) {
        this.container.textContent = ''; 

        this.getCommit(obj);

        this.swiper.update();
    }

    getCommit(obj) {

        obj.forEach(element => {
            let data = this.converter(element.commit.author.date.substring(0, 10));
            let image = element.author.avatar_url;
            let title = element.commit.committer.name;
            let mail = element.commit.committer.email;
            let message = element.commit.message;

            this.addCommit(data, image, title, mail, message)
        })
    }

    addCommit(data, image, title, mail, message) {
        this.container.appendChild(this.instance.create(data, image, title, mail, message));
    }
}