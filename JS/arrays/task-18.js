// Получить из строки 'a big brown fox jumps over the lazy dog' массив слов, который содержит 
// элементы, длина которых не больше 3 символа. Вывести массив в консоль.

console.info('Task-18');

const str = 'a big brown fox jumps over the lazy dog';

const arr = str.split(' ').filter(elem => elem.length <= 3);

console.log(arr);