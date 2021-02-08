// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
//     x
//    xxx
//   xxxxx
//  xxxxxxx
// xxxxxxxxx
//    ...   

// variant 1

(function() {  

    console.info('Task-4');

    let result = 'x';
    let space;

    for (let i = 0; i < 10; ++i) { 
        space = ' '; 
        for (let j = (10 - i); j > 0; --j) {
            space += ' ';
        }         
        console.log( space + result );
        result += 'xx';                
    }
    
    console.info(' ');

})();

// variant 2

(function() {  

    console.info('Task-4');

    for (let i = 0; i < 10; i++) {
        switch (i) {
            case 0: {
                console.log( '          x' );
                break;
            }
            case 1: {
                console.log( '         xxx' );
                break;
            }
            case 2: {
                console.log( '        xxxxx' );
                break;
            }
            case 3: {
                console.log( '       xxxxxxx' );
                break;
            }
            case 4: {
                console.log( '      xxxxxxxxx' );
                break;
            }
            case 5: {
                console.log( '     xxxxxxxxxxx' );
                break;
            }
            case 6: {
                console.log( '    xxxxxxxxxxxxx' );
                break;
            }
            case 7: {
                console.log( '   xxxxxxxxxxxxxxx' );
                break;
            }
            case 8: {
                console.log( '  xxxxxxxxxxxxxxxxx' );
                break;
            }
            case 9: {
                console.log( ' xxxxxxxxxxxxxxxxxxx' );
                break;
            }
            case 10: {
                console.log( 'xxxxxxxxxxxxxxxxxxxxx' );
                break;
            }
        }        
    }
    
    console.info(' ');

})();