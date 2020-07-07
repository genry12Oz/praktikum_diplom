export default class Statistics {
    constructor(storage, theme) {
        this.storage = storage;
        this.theme = theme;

        console.log(this.theme);
        console.log(this.storage);
        this.check();
    }

    check() {
        let saveData = this.storage.parceData();

        console.log(saveData.articles);
    }
}