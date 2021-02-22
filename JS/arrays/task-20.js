// Создать отсортированный массив чисел. Реализовать функцию binarySearch(arr, value), 
// которая принимает массив и значение и возвращает индекс значения в массиве или -1.
// Функция должна использовать бинарный поиск.
// Вывести результат в консоль

console.info('Task-20');

const arrayLength = 7;
const minNumber = 0;
const maxNumber = 10;

function getRandomNumber(min, max) {
  return (Math.floor( Math.random() * (max - min) + min )); 
}

let arrNum = (new Array(arrayLength))
  .fill(0)
  .map( elem => elem = getRandomNumber(minNumber, maxNumber) )
  .sort((a, b) => (a - b));

console.log('Исходный массив [' + arrNum + ']');


function binarySearch(arr, value) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;   
    while (minIndex <= maxIndex) {
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);
        if (arr[middleIndex] > value) {
          maxIndex = middleIndex - 1;
        } else if (arr[middleIndex] < value) {
          minIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }
    return -1;
}

console.log( binarySearch(arrNum, 5) ); 