// Создайте функцию find(testString, test), которая должна возвращать позицию строки test 
// в строке testString.
// Если второй параметр не задан, используйте test = testString. 
// Используйте Function Definition Expression (FDE). Тестовые данные:
// testString = 'abc', test ='b', result = 1
// testString = 'abc', result = 0
// testString = 'abc', test = 'd', result = -1
// testString = 'abc', test='a', test2='b', result = 0

console.info('Task-9'); 

const find = function(testStringX, testX = testStringX) {
    return testStringX.indexOf(testX);
};

let testString = 'abc'; 
let test ='b';
console.log( find(testString, test) );

testString = 'abc'; 
test = undefined;
console.log( find(testString) );

testString = 'abc';
test = 'd';
console.log( find(testString, test) );

testString = 'abc';
test='a';
test2='b';
console.log( find(testString, test) );