/*
Создайте промис, который после создания сразу же переходит в состояние resolve и возвращает строку 
'Promise Data'.
Получите данные промиса и выведите их в консоль
*/

console.info('Task-2');

const promise = new Promise((resolve, reject) => 
  resolve('Promise Data')
);

promise.then(value => console.log(value));