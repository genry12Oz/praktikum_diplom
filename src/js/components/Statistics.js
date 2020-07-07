export default class Statistics {
    constructor(storage, theme) {
        this.storage = storage;
        this.theme = theme;
        
        this.check();
    }

    check() {
        let saveData = this.storage.parceData();
    }
}