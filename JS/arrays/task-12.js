// Создать двумерный массив:

// 1 2 3
// 4 5 6
// 7 8 9
// Вывести его в консоль. Преобразовать массив одномерный и снова вывести в консоль

console.info('Task-12');

let arrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log( arrNum );

arrNum = arrNum.flat();

console.log( arrNum );