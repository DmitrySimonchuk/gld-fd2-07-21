// Создать функцию, которая выводит в консоль строчку в формате 'символ - код' для кодов 
// в диапазоне 78000 - 78030 (все пары в диапазоне).
// Используйте String.prototype.fromCodePoint().

console.info('Task-1');

// variant 1

function rangingCodeSymbols(min, max) {
    
    let result = 'пара символ - код:';

    for (min; min <= max; ++min) { 
        const symbol = String.fromCodePoint(min);
        result += `\n ${symbol} - ${min}`;                               
    }
    return result;    
}

const startCode = 78000;
const finishCode = 78030;

console.log( rangingCodeSymbols(startCode, finishCode) );

console.info(' ');

// variant 2

(function() {  

    function rangingCodeSymbols(min, max) {
        let result = 'Task-1 v2';     
        function getCodeSymbols(a, b) {
            result += `\n пара символ - код: ${String.fromCodePoint(a)} - ${a}`;                 
            if ( a > b - 1 ) {
                return result += `\n это все.`;
            }    
            return getCodeSymbols(a + 1, b);    
        }
        return getCodeSymbols(min, max);
    }    
    
    const startCode = 78000;
    const finishCode = 78030;
    
    console.log( rangingCodeSymbols(startCode, finishCode) );     

    console.info(' ');

})();