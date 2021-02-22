// Создать массив 20 чисел с случайными значениями от 0 до 100. Отcортировать массив по возрастанию. 
// Вывести его в консоль.
// Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.

console.info('Task-7');

const arrayLength = 20;
const minNumber = 0;
const maxNumber = 100;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

let arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

arrNum = arrNum.sort((a, b) => (a - b));

console.log( arrNum );

arrNum = arrNum.reverse();

console.log( arrNum );