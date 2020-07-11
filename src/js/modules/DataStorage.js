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
        if (this.storage.getItem('data') == null) {
            console.log("в хранилище пусто")
            return 0
        } else {
            let storageData = JSON.parse(this.storage.getItem ('data'));
            console.log("в хранилище есть данные")
            return storageData;
        }
    }
}