// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.

(function() {  

    console.info('Task-4');

    let month = 11;

    if ( (month < 3) || (month > 11) ) {
        console.log( 'winter' );
    } else if ( month < 6 ) {
        console.log( 'spring' );
    } else if ( month < 9 ) {
        console.log( 'summer' );
    } else {
        console.log( 'autumn' );
    }

    console.info(' ');

})();