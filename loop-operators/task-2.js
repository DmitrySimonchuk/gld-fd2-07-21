// Выведите в консоль все четные числа от 1 до 15.

(function() {  

    console.info('Task-2');

    for (let i = 1; i <=15; i++) {
        if ( !(i%2) ) { 
            console.log( i );
        }        
    }
    
    console.info(' ');

})();