// Создать массив. Получить последний элемент массива. Без удаления этого элемента из массива. 
// С удалением этого элемента из массива. Выведите массивы в консоль

console.info('Task-1');

const fruits = ["Яблоко", "Апельсин", "Слива"];

console.log( fruits );

console.log( fruits[fruits.length - 1] );  // last elem not del arr

console.log( fruits );

console.log( fruits.pop() );  // last elem with del arr

console.log( fruits );