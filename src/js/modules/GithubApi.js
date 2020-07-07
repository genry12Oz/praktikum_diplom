export default class GithubApi {
    constructor(instance) {
        this.instance = instance;

        this.getCommits();
        console.log('Я - gitApi');
    }

    getCommits() {
        let url = 'https://api.github.com/repos/genry12Oz/praktikum_diplom/commits?per_page=20&sha=7cf3284d1ad8b8a6efd5c0c03ac93a';

        fetch(url)
          .then((res) => {
              if(res.ok) {
                return res.json()
              }
              return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }) 
          .then((data) => {
            this.instance.render(data);
        })
          .catch((err) => {
            console.log(err);
        })
    }
}