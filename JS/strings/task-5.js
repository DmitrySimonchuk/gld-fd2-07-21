// Напишите код, который проверяет длину строки str, и если она превосходит maxlength – 
// заменяет конец str на '...', так чтобы ее длина стала равна maxlength.
// Результатом должна быть (при необходимости) усечённая строка. Выведите строку в консоль.
// Тестовые данные:
// 'Вот, что мне хотелось бы сказать на эту тему:', 20
// 'Всем привет!', 20

(function() {  

    console.info('Task-5');

    let str = 'Вот, что мне хотелось бы сказать на эту тему:';
    let maxlength = '20';    
    if ( maxlength < str.length ) {
        str = str.substr(0, 17) + '...';
    }
    console.log( str );    

    console.info(' ');

    str = 'Всем привет!';        
    if ( maxlength < str.length ) {
        str = str.substr(0, 17) + '...';
    }
    console.log( str );  
          
    console.info(' ');

})();