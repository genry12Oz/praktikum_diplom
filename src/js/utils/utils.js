// тут находятся вспомогательные функции

// конвертирует время в нужный формат
const timeConverter = function(time) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  let castomData = new Date(time);
  return castomData.toLocaleString('ru', options).split(' ').slice(0, 2).join(' ') + ',' + ' ' + castomData.getFullYear();
}

export {
  timeConverter
};