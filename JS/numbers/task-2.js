// Найдите квадратный корень из 999. Результат округлите до целых, до десятых, до сотых.

(function() {  

    console.info('Task-2');
    
    let a = 999;

    a = Math.round( Math.sqrt(a) );

    console.log( `квадратный корень из 999: ${a}` );

    a = 999;

    a = Math.round( Math.sqrt(a) * 10 ) / 10;

    console.log( `квадратный корень из 999: ${a}` );

    a = 999;

    a = Math.round( Math.sqrt(a) * 100 ) / 100;

    console.log( `квадратный корень из 999: ${a}` );

    console.info(' ');

})();