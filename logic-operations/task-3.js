// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножьте его на 10 и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.

(function() {  

    console.info('Task-3');

    function sum(x, y) {
        let result = x + y;
        if ( result > 5 ) {
            console.log( result );
        } else {
            console.log( result *= 10 );
        }
    }

    let a = 2;
    let b = 5;

    sum(a, b);

    a = 3;
    b = 1;
    
    sum(a, b);

    console.info(' ');

})();