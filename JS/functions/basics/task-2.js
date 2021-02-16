// Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой и 
// добавляет знак доллара перед числом в шаблонном литерале.

console.info('Task-2'); 

function currency(strArr, a) {    
    return strArr[0] + `$` + a.toFixed(2) + strArr[1];
}

const num = Math.random();

console.log( currency`добавляет знак доллара перед числом в шаблонном литерале ${num} тег-функция` );

console.info(' ');