// Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. 
// Используйте IIFE.

console.info('Task-8'); 

(function() {
        
    let a = '1';
    let b = '1';

    console.log( conc(a, b) );

    a = 1; 
    b = 1;

    console.log( conc(a, b) );

    function conc(str1, str2) {
        str1 += '';
        str2 += '';
        return str1.concat(str2);
    }

})();