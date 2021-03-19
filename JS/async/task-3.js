/*
Создайте промис, который после создания сразу же переходит в состояние rejected и возвращает строку 
'Promise Error'. Получите данные промиса и выведите их в консоль
*/

console.info('Task-3');

const promise = Promise.reject('Promise Error');

promise.catch(error => console.log(new Error(error)));