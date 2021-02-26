// Создать массив целых чисел. На его основе создать массивы – представления этих же чисел в 
// бинарном, восьмеричном и шестнадцатеричном виде. Вывести эти массивы в консоль.

console.info('Task-17');

const arrayLength = 5;
const minNumber = 8;
const maxNumber = 16;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

let arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );

console.log('Исходный массив [' + arrNum + ']');

const arrNumBin = arrNum.map(num => num.toString(2));
console.log('Бинарный массив [' + arrNumBin + ']');

const arrNum8 = arrNum.map(num => num.toString(8));
console.log('Восьмеричный массив [' + arrNum8 + ']');

const arrNum16 = arrNum.map(num => num.toString(16));
console.log('Шестнадцатеричный массив [' + arrNum16 + ']');