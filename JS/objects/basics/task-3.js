// Создайте функцию getObjThis(), которая возвращает this. Создайте несколько объектов 
// city1 и city2 по примеру предыдущего задания с методом getCityName.
// Разве что в этом случае метод getCityName должен ссылаться на функцию getObjThis. 
// Проверьте работу метода у обоих объектов.

console.info('Task-3');

function getObjThis() {
    return this;
}

const city1 = {
    name: "Город A",
    population: "10 млн.",
    getCityName: getObjThis,    
};

const city2 = {
    name: "Город B",
    population: "12 млн.",
    getCityName: getObjThis,    
};

console.log( city1.getCityName() );
console.log( city2.getCityName() );