// Возведите 2 в 10 степень. Результат запишите в переменную exp.

(function() {  

    console.info('Task-5');

    let number = 2;
    let power = 10;
        
    let exp = Math.pow(number, power);
    
    console.log( `число ${number} в степени ${power}: ${exp}` );

    console.info(' ');

})();