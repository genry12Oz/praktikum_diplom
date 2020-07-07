export default class DataStorage {
    constructor() {
        this.storage = localStorage;
    }

    saveData(data) {
        // освобождаю хранилище
        this.storage.clear();
        // сохраняю новые данные
        this.storage.setItem('data', JSON.stringify(data));
    }

    parceData() {
        let storageData = JSON.parse(this.storage.getItem ('data'));

        return storageData;
    }
}