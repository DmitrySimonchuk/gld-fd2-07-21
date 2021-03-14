/*
Cоздайте функцию makeRequest, используя FD (Function Declaration).
Функция должна принимать один параметр - url и возвращать промис, который перейдет в состояние 
resolved через 2с. и вернет значение параметра. Первой строкой в функции выведите сообщение 
'makeRequest is called'.
Cоздайте функцию mySecondAsyncFunction, используя FD (Function Declaration).
Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
*/

console.info('Task-13');

function makeRequest(url) {
  console.log('makeRequest is called');

  const promise = new Promise((res, rej) =>{
    setTimeout(() => res(url), 2000)
  });

  return promise;
}

async function mySecondAsyncFunction() {
  const result = await makeRequest('https://github.com/uladzimir-miadzinski/it-academy-fd2/blob/main/async.md');
  return console.log(result);
}

mySecondAsyncFunction();