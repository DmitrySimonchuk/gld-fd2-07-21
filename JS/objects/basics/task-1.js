// Создайте объект заработных плат salary. Ключ - имя человека, значение - его зарплата. 
// Выведите на экран зарплату Пети и Коли.

console.info('Task-1'); 

let result = `Зарплата`;

const salary= {
    Pety: 30,
    Koly: 20
};

for (let key in salary) {
    result += `\n у ${key} - ${salary[key]} руб.;`
}

console.log( result );