// Создать массив с дублями. Найти первый элемент, который дублируется. Заменить этот элемент и 
// все его копии на символ '*'. Вывести массив в консоль.

console.info('Task-16');

const arrayLength = 5;
const minNumber = 0;
const maxNumber = 10;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

let arrNum = (new Array(arrayLength)).fill(0).map( elem => elem = getRandomNumber(minNumber, maxNumber) );
arrNum = arrNum.concat(arrNum, 'a', 'b', 'c');

console.log('Исходный массив [' + arrNum + ']');

function unique(arr) {
  let result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    } else {
      result.push(' * ');
    }
  }

  return result;
}

const arrayWithoutDouble = unique(arrNum);

console.log( arrayWithoutDouble );