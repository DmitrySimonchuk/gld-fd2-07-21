/*
Используйте предыдущее задание. Пусть теперь второй промис переходит в состояние rejected 
со значением "Promise Error".
Измените код, чтобы обработать эту ситуацию. Используйте Promise.allSettled
*/

console.info('Task-10');

const promName = new Promise((res, rej) => {
  setTimeout(() => {
    res({name: "Anna"})
  }, 2000)
});

const promAge = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise Error")
  }, 3000)
});

Promise
  .allSettled([promName, promAge])
  .then(results => {
    const defoltNames = results
      .filter(elem => elem.status !== 'rejected')
      .map(elem => elem.value)
      .forEach(elem => console.log(elem.name));    
  });