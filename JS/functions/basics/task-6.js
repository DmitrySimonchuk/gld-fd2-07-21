// Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями, 
// которые представляют список параметров и тело будущей функции.
// Создайте функцию, используя эту информацию с помощью Function Constructor (FC). 
// Вызовите эту функцию.

console.info('Task-6'); 

const params = 'a = 5, b = 6';
const body = 'return a + b';

const sumParams = new Function(params, body);

console.log( sumParams(3) );

console.info(''); 