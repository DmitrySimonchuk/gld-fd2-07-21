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
arrNum = arrNum.concat(arrNum, 'a', 'b', 'c', 2, 3, 5);

console.log('Исходный массив [' + arrNum + ']');

function unique(arr) {
  let resultEndElem = [];
  let resultStartElem = [];
  let result = [];

  resultEndElem = arr.map((elem, index) => 
    arr.slice(index + 1).some(value => value === elem)   
      ? elem = ' * '
      : elem 
  );
  
  for (let key of arr) {
    if (!resultStartElem.includes(key)) {
      resultStartElem.push(key);      
    } else {
      resultStartElem.push(' * ');
    }
  }
  
  for (let i = 0; i < resultEndElem.length; i++) {
    result[i] = resultEndElem[i] === resultStartElem[i] ? resultEndElem[i] : ' * ';
  }

  return result;
}

const arrayWithoutDouble = unique(arrNum);

console.log( arrayWithoutDouble );