// Создать функцию, которая выводит в консоль строчку в формате 'символ - код' для кодов 
// в диапазоне 78000 - 78030 (все пары в диапазоне).
// Используйте String.prototype.fromCodePoint().

console.info('Task-1');

// variant 1

(function() {  

    function rangeCodeSymbols(min, max) {

        let codeInSymbols;
        let codeSymbols = 'пара символ - код:';

        for (let i = min; i <= max; ++i) { 
            codeInSymbols = String.fromCodePoint(i);
            codeSymbols += `\n ${codeInSymbols} - ${i}`;                               
        }
        return codeSymbols;    
    }

    const start = 78000;
    const finish = 78030;

    console.log( rangeCodeSymbols(start, finish) );

    console.info(' ');

})();

// variant 2

(function() {  

    function rangeCodeSymbols(min, max) {

        console.log( `пара символ - код: ${String.fromCodePoint(min)} - ${min}` );
                
        if ( min > max - 1 ) {
            return console.log( `это все.` );
        }

        return rangeCodeSymbols(min + 1, max);    
    }

    const start = 78000;
    const finish = 78030;

    rangeCodeSymbols(start, finish);

    console.info(' ');

})();