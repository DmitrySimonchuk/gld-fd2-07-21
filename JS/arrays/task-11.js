// Создать массив любых элементов. Получить случайный элемент из массива и вывести его в консоль.

console.info('Task-11');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 100;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

const arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

console.log('случайный элемент из массива ' + arrNum[getRandomNumber(0, arrayLength)] );