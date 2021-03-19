/*
Напишите функцию getPromiseData, которая принимает один параметр - промис.
Функция получает значение промиса и выводит его в консоль. Объявите объект со свойтвом name и 
значением Anna. Создайте врапер в виде промиса для этого объекта и вызовите для него функцию 
getPromiseData. Используйте Promise.resolve.
*/

console.info('Task-8');

function getPromiseData(promise) {
  promise.then(console.log);
}

const object = {
  name: 'Anna'
};

const wrapper = Promise.resolve(object);

getPromiseData(wrapper);