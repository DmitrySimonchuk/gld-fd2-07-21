// Создать массив любых элементов. Добавить элемент в конец массива. Модифицировать текущий массив. 
// Создать новый массив. Выведите массивы в консоль

console.info('Task-2');

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log( fruits );

fruits.push("Киви");

console.log( fruits );

fruits.splice(0, 2, "Банан", "Вишня");

const bufet = fruits;

console.log( bufet );