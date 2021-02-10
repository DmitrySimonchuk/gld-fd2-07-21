// Создайте функцию conc, которая должна конкатенировать значения двух параметров a и b и 
// возвращать строку.
// Используйте Function Declaration Statement (FDS). Вызовите функцию до ее объявления.
// Тестовые данные:
// a = '1', b = '1', result = '11' 
// a = 1, b = 1, result = '11'

console.info('Task-3'); 

let a = '1';
let b = '1';

conc(a, b);

a = 1; 
b = 1;

conc(a, b);

function conc(str1, str2) {
    str1 += '';
    str2 += '';
    return console.log( str1.concat(str2) );
}

console.info(' ');