// Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
// Выведите в консоль пирамиду на 9 уровней как показано ниже.
// Используйте String.prototype.repeat().
// 1
// 22
// 333
// 4444
// ...

(function() {  

    console.info('Task-2');

    let str;

    for (let i = 1; i <= 9; ++i) {
        i += '';
        str = i.repeat(i);
        console.log( str );
    }

    console.info(' ');

})();