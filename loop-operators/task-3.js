// Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
// 1
// 22
// 333
// 4444
// ...

// variant 1

(function() {  

    console.info('Task-3');

    let result;

    for (let i = 1; i <= 9; ++i) {
        result = '';
        for (let j = 1; j <=i; ++j) {
            result += '' + i;            
        }  
        console.log( result );          
    }
    
    console.info(' ');

})();

// variant 2

(function() {  

    console.info('Task-3');

    for (let i = 1; i <= 9; i++) {
        switch (i) {
            case 1: {
                console.log(`${i}`);
                break;
            }
            case 2: {
                console.log(`${i}${i}`);
                break;
            }
            case 3: {
                console.log(`${i}${i}${i}`);
                break;
            }
            case 4: {
                console.log(`${i}${i}${i}${i}`);
                break;
            }
            case 5: {
                console.log(`${i}${i}${i}${i}${i}`);
                break;
            }
            case 6: {
                console.log(`${i}${i}${i}${i}${i}${i}`);
                break;
            }
            case 7: {
                console.log(`${i}${i}${i}${i}${i}${i}${i}`);
                break;
            }
            case 8: {
                console.log(`${i}${i}${i}${i}${i}${i}${i}${i}`);
                break;
            }
            case 9: {
                console.log(`${i}${i}${i}${i}${i}${i}${i}${i}${i}`);
                break;
            }            
        }       
    }
    
    console.info(' ');

})();