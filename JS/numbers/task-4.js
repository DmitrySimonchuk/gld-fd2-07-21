// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

(function() {  

    console.info('Task-4');

    let numbers = [4, -2, 5, 19, -130, 0, 10];
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; ++i) {        
        if ( min > numbers[i] ) {
            min = numbers[i];
        }

        if ( max < numbers[i] ) {
            max = numbers[i];
        }        
    }
        
    console.log( `минимальное и максимальное число: ${min} и ${max}` );

    console.info(' ');

})();