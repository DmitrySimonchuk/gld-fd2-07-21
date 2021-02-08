/* Требуется спросить у пользователя (в браузере): фамилию, имя, отчество раздельно (prompt), возраст в годах (prompt), пол (confirm).
Вывести оператором alert анкету пользователя по примеру:
ваше ФИО: Иванов Иван Иванович
ваш возраст в годах: 20
ваш возраст в днях: 7300
через 5 лет вам будет: 25
ваш пол: мужской
вы на пенсии: нет
Реализовать (в обоих реализациях оператор alert должен использоваться ровно один раз):
- с использованием условного оператора (if), без условной операции (?:)
- с использованием условной операции (?:), без условного оператора (if) */

(function() {  

    console.info('Task-7');

    const userFamily = prompt('Ваша фамилия?', '') ?? '';
    const userName = prompt('Ваше имя?', '') ?? '';
    const userSecondName = prompt('Ваше отчество?', '') ?? '';
    const userAge = prompt('Ваш возраст?', '') ?? '';
    let userSex = confirm('Ваш пол мужской?');
    let userAgePosition;

    const userAgeInDays = userAge * 365;
    let userAgeInFuture = +userAge + 5;

    if ( userSex ) {
        userSex = 'man';
    } else {
        userSex = 'woman';
    }

    if ( userAge <= 63 ) {
        userAgePosition = 'нет';
    } else {
        userAgePosition = 'да';
    }

    alert( ` ваше ФИО: ${userFamily} ${userName} ${userSecondName} 
        \n ваш возраст в годах: ${userAge}
        \n ваш возраст в днях: ${userAgeInDays}
        \n через 5 лет вам будет: ${userAgeInFuture}
        \n ваш пол: ${userSex}
        \n вы на пенсии: ${userAgePosition} ` );
    
    console.info(' ');

})();

(function() {  

    console.info('Task-7');

    const userFamily = prompt('Ваша фамилия?', '') ?? '';
    const userName = prompt('Ваше имя?', '') ?? '';
    const userSecondName = prompt('Ваше отчество?', '') ?? '';
    const userAge = prompt('Ваш возраст?', '') ?? '';
    let userSex = confirm('Ваш пол мужской?');
    let userAgePosition;

    const userAgeInDays = userAge * 365;
    let userAgeInFuture = +userAge + 5;

    userSex = userSex ? 'man' : 'woman';

    userAgePosition = ( userAge <= 63 ) ? 'нет' : 'да';

    alert( ` ваше ФИО: ${userFamily} ${userName} ${userSecondName} 
        \n ваш возраст в годах: ${userAge}
        \n ваш возраст в днях: ${userAgeInDays}
        \n через 5 лет вам будет: ${userAgeInFuture}
        \n ваш пол: ${userSex}
        \n вы на пенсии: ${userAgePosition} ` );
    
    console.info(' ');

})();