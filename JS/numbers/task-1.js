// Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, 
// в котором искать случайное значение.

(function() {  

    console.info('Task-1');

    function randomInRange(min, max) {

        let randomNumber;

        while ( true ) { 
            randomNumber = Math.round(Math.random() * 1000);
            if ( (randomNumber > min) && (randomNumber < max) ) break;                        
        }

        return randomNumber;
    }
    
    let start = 1;
    let finish = 10;
    
    let result = randomInRange(start, finish);
    
    console.log( `число между ${start} и ${finish}: ${result}` );

    console.info(' ');

})();