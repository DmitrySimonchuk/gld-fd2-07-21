// Создайте функцию comp, которая должна сравнивать значения двух параметров a и b и 
// возвращать 1, если они равны и -1, если они не равны.
// Используйте Function Definition Expression (FDE). Вызовите функцию до ее объявления.
// Тестовые данные:
// a = 'abc', b = 'abc', result = 1
// a = 'abC', b = 'abc', result = -1

console.info('Task-4'); 

let comp = function(str1, str2) {
    str1 += '';
    str2 += '';
    if ( str1.localeCompare(str2) === 0 ) {
        return '1';
    }
    return '-1';
}

let a = 'abc';
let b = 'abc';

console.log( comp(a, b) );

a = 'abC'; 
b = 'abc';

console.log( comp(a, b) );

console.info(' ');