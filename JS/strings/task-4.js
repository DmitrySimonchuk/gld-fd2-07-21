// Напишите код, который выводит в консоль true, если строка str содержит 'discount' или 'low price', 
// а иначе false.
// Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 
// 'low take that, prICE'.
// Используйте String.prototype.includes().

(function() {  

    console.info('Task-4');

    let str = 'buy now, discount';
    str = str.includes('discount') || str.includes('low price');
    console.log( str );

    str = 'buy now, dIscOUnt';
    str = str.includes('discount') || str.includes('low price');
    console.log( str );

    str = 'take that, low price';
    str = str.includes('discount') || str.includes('low price');
    console.log( str );

    str = 'low take that, prICE';
    str = str.includes('discount') || str.includes('low price');
    console.log( str );

    console.info(' ');

})();