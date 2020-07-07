export default class DataStorage {
    constructor() {
        this.storage = localStorage;

        console.log('Я - DataStorage')
    }

    saveData(data) {
        console.log(data);

        // освобождаю хранилище
        this.storage.clear();
        // сохраняю новые данные
        this.storage.setItem('data', JSON.stringify(data));
    }

    parceData() {
        console.log('ты запустил чек')
        let storageData = JSON.parse(this.storage.getItem ('data'));

        console.log(storageData.totalResults);

        return storageData;
    }
}