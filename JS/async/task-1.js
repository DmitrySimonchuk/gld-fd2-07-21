/*
Создайте промис, который постоянно находиться в состоянии pending.
В конструкторе промиса выведите в консоль сообщение "Promise is created".
*/

console.info('Task-1');

const promise = new Promise( (resolve, reject) =>
  console.log( "Promise is created" )
);