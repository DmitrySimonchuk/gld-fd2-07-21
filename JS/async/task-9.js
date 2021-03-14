/*
Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с, а второй промис
возвращает объект {age: 16} через 3 с.
Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль. 
Используйте Promise.all.
*/

console.info('Task-9');

const promName = new Promise((res, rej) => {
  setTimeout(() => {
    res({name: "Anna"})
  }, 2000)
});

const promAge = new Promise((res, rej) => {
  setTimeout(() => {
    res({age: 16})
  }, 3000)
});

Promise
  .all([promName, promAge])
  .then(results => console.log(results[0].name + ' ' + results[1].age) );