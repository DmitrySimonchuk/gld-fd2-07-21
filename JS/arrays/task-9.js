// Создайте массив styles с элементами "Jazz", "Blues".

// Добавьте в конец значение "Rock-n-Roll"
// Замените предпоследнее значение с конца на "Classics". Удалите первый элемент из массива и 
// выведите его в консоль
// Добавьте в начало два элемента со значениями "Rap" и "Reggae"
// Выведите массив в консоль.

console.info('Task-9');

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles.splice(-2, 1, "Classics");

console.log( styles.shift() );

styles.unshift("Rap", "Reggae");
console.log( styles );