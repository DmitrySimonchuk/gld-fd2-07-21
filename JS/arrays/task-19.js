// Создать массив, который содержит строки и числа. Проверить, содержит ли массив только строки. 
// Вывети результат в консоль

console.info('Task-19');

const arr = [1, 'a', 'b', 'c'];

const result = arr.every(elem => typeof(elem) === 'string');

console.log( 'массив содержит только строки - ' + result );