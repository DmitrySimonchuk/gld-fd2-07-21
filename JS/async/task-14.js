/*
Создайте масив урлов ['http://a', 'http://b']. Создайте функцию sendRequest, которая принимает 
один параметр - url. Функция в первой строке должна выводить в консоль сообщение 'sendRequest 
is called' и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго урла объект 
{ age: 16 }. Создайте асинхронную функцию myThirdAsyncFunction которая должна вызвать функцию 
sendRequest для каждого урла и вернуть объект {name: 'Ann', age: 16}.
Обработайте результат работы функции myThirdAsyncFunction.
*/

console.info('Task-14');

const arrURL = ['http://a', 'http://b'];

function sendRequest(url) {

  console.log('sendRequest is called');

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (url === 'http://a') {
        res({ name: 'Ann' });
  
      } else if (url === 'http://b') {
        res({ age: 16 });
      }
    }, 2000)
  });  
}

async function myThirdAsyncFunction(array) {
  const sendObjectURL1 = await sendRequest(array[0]);
  const sendObjectURL2 = await sendRequest(array[1]);
  const sendRequestResult = Object.assign(sendObjectURL1, sendObjectURL2);
 
  return sendRequestResult;
}

myThirdAsyncFunction(arrURL).then(console.log);