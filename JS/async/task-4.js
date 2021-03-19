/*
Создайте промис, который переходит в состояние resolved через 3с. (Используйте setTimeout) и 
возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль
*/

console.info('Task-4');

const promise = new Promise((res, rej) => {
  setTimeout(() =>
    res('Promise Data'), 3000)
});

promise.then(console.log);