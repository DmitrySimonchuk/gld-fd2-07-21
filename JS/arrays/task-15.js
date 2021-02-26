// Создать массив с дублями элементов. На его основе создать новый массив уникальных элементов 
// (удалить дубли). Вывести новый массив в консоль.

console.info('Task-15');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 10;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

let arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );
arrNum = arrNum.concat(arrNum);

console.log('Исходный массив [' + arrNum + ']');

function unique(arr) {
  return Array.from(new Set(arr));
}

const arrayWithoutDouble = unique(arrNum);

console.log( arrayWithoutDouble );