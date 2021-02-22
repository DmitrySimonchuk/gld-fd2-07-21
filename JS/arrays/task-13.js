// Создать массив любых элементов.
// На его основе получить новый массив – подмножество элементов оригинального массива начиная 
// с индекса a и заканчивая индексом b.
// Вывести массив в консоль.

console.info('Task-13');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 100;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

const arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

const a = getRandomNumber(0, arrayLength - 2);

const b = a + getRandomNumber(0, arrayLength - 1 - a) + 1;

const arrNum2 = arrNum.slice(a, b);

console.log('новый массив [' + arrNum2 + ']');