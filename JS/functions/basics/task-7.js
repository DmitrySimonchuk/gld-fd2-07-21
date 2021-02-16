// Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. Используя стрелочные функции создайте 
// новый массив из элементов elem * elem,
// которые меньше 100 и отсортируйте его по возрастанию. Выведите результат в консоль.

console.info('Task-7'); 

const arr = [1, 8, 3, 5, 12, 7, 9, 11];

const multiplyElemIfLowerThan100 = (arrX) => {

    const arrNew = arrX.map(function(elem) {
        return (elem * elem < 100) ? elem * elem : undefined;
    });

    arrNew.sort(function(a, b) {
        return a - b;
    });

    return arrNew;
};

console.log( multiplyElemIfLowerThan100(arr) );

console.info(''); 