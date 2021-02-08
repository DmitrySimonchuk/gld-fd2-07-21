/* Перепишите if..else используя несколько тернарных операторов.
let message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

(function() {  

    console.info('Task-6');

    let login = 'Вася';    
    
    let message = login === 'Вася'
                    ? 'Привет' 
                    : login === 'Директор'  
                      ? 'Здравствуйте' 
                      : login === ''
                        ? 'Нет логина' 
                        : '';

    console.log( message );

    console.info(' ');

})();