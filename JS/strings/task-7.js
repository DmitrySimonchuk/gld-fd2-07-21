// Напишите код, который из строки $100 получит число и выведите его в консоль.

(function() {  

    console.info('Task-7');

    let str = '$100';

    str = +str.substring(1);

    console.log( str, typeof str );

    console.info(' ');

})();