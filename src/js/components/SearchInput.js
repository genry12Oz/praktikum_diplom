export default class SearchInput {
    constructor(/*form,*/ input, button, error, /*errObj,*/ api) {
        // инстансы формы
        // this.form = form;             //может не понадобится
        this.input = input;
        this.button= button;
        this.errorMessage = error;

        // this.errObj = errObj;        // доделаю позже
        this.api = api;

        // листенеры
        this.setEventListener();

        console.log('Я - SearchInput!');
    }

    // валидация поля формы
    validate(event) {                                            
        event.preventDefault();
        
        if (!this.input.checkValidity()) {
            this.input.classList.add('header__input_invalid');
            // this.errorMessage.textContent = this.errObj.invalidInput;    // доделаю позже
            console.log('form is still not validated');
        } else {
            // this.errorMessage.textContent = '';                          // доделаю позже
            this.input.classList.remove('header__input_invalid');
            this.api.getInfo();
            console.log('success!');
        }
    }

    setEventListener() {
        this.button.addEventListener('click', event => this.validate(event));
    }
}