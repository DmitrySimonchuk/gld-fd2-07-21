// Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, 
// которые больше 50

console.info('Task-5');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 100;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

const arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

let result = arrNum.filter( elem => (elem > 50)).reduce( (sum, elem) =>  sum + elem );

console.log('Сумма элементов больше 50 - ' + result ); 