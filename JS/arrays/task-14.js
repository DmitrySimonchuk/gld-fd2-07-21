// Создать массив любых элементов. Найти индекс указаного элемента в массиве и вывести его в консоль

console.info('Task-14');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 100;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

const arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

const elem = arrNum[getRandomNumber(0, arrayLength - 1)];

console.log( arrNum.indexOf(elem) );