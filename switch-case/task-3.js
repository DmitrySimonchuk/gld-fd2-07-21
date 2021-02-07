// Переменная lang может принимать 2 значения: 'ru' и 'en'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском. Решите задачу через switch-case.

(function() {  

    console.info('Task-3');

    let lang = 'ru';
    let arr;

    switch (lang) {
        case 'ru': {
            arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
        }
        case 'en': {
            arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        }
    }
    
    console.info(' ');

})();