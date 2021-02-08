// Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. 
// Используйте String.prototype.includes(), String.prototype.indexOf()

(function() {  

    console.info('Task-6');

    let str = 'Вот, что мне хотелось бы сказать на эту тему: вопрос мне?';
    let strFind = 'мне';    
    let result = false;

    if ( str.includes(strFind) ) {
        let i = str.indexOf(strFind);
        if ( str.includes(strFind, ++i) ) {            
            result = true;
        }
    } 

    console.log( result );

    console.info(' ');

})();