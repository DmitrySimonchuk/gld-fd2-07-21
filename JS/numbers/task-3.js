// Дан массив numbers. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве 
// с элементами 12, 15, 20, 25, 59, 79.

(function() {  

    console.info('Task-3');

    let numbers = [12, 15, 20, 25, 59, 79];
    let result = 0;

    for (let i = 0; i < numbers.length; ++i) {
        result += numbers[i];        
    }

    console.log( `сумма ${numbers}: ${result}` );

    result /= 2;

    console.log( `среднее арифметическое ${numbers}: ${result}` );

    console.info(' ');

})();