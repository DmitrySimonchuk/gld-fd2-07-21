// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' 
// и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

(function() {  

    console.info('Task-6');

    let a = 2;
    let b = 10;
    let result;
    
    if ( a % b === 0 ) {
        result = a / b;
        console.log( `Делится. Результат деления: ${result}` );
    } else {
        result = (a < b) ? (a / b) : (a % b);
        console.log( `Делится с остатком. Остаток от деления: ${result}` );
    }

    console.info(' ');

})();