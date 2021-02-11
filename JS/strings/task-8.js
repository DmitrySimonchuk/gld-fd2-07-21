// Создать строку: 10 times 2 is 20' используя переменные:
// const a = 10;
// const b = 2;
// Используйте шаблонные строки.

(function() {  

    console.info('Task-8');

    const a = 10;
    const b = 2;
    
    let str = `${a} times ${b} is ${a * b}`;

    console.log( str );
        
    console.info(' ');

})();