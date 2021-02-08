// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

(function() {  

    console.info('Task-5');

    let a = 1;
    let b = 2;
    let result = ( a + b < 4 ) ? ( 'Мало' ) : ( 'Много' );

    console.log( result );

    console.info(' ');

})();