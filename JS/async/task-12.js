/*
Создайте асинхронную функцию myFirstAsyncFunction, используя FD (Function Declaration). Функция 
должна принимать два параметра a и b и возвращать сумму a+b.
Выведите значение, которое вернет функция в консоль. Обработаете промис и выведите значение в 
консоль.
*/

console.info('Task-12');

async function myFirstAsyncFunction(a, b) {
  return a + b;
}

console.log( myFirstAsyncFunction(2, 3) );

myFirstAsyncFunction(2, 3).then(console.log);