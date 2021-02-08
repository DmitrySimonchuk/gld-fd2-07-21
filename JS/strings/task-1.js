// Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
// Выведите в консоль время в формате 04:35:05.
// Используйте String.prototype.padStart().

(function() {  

    console.info('Task-1');

    let hour = '4';
    let minute = '35';
    let second = '5';

    hour = hour.padStart(2, '0');
    minute = minute.padStart(2, '0');
    second = second.padStart(2, '0');

    console.log( hour + ':' + minute + ':' + second );
        
    console.info(' ');

})();