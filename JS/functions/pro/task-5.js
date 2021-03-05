/* Arguments Object, Rest.
Создайте функцию parts, которая принимает неизвестное количество параметров. Каждый параметр – 
это группа предложений.
Функция должна вырезать из параметра подстроку, начиная с символа двоеточие : и заканчивая символом 
точка ..
Функция должна возвращать массив подстрок. Используйте Function Definition Expression (FDE). 
Тестовые данные:
param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, 
apples, bananas."
param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, 
black."
result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"]. */

console.info('Task-5');

const parts = function(...params) {
  let substr = [];

  params.forEach(element => {
    substr.push( element.slice( (element.indexOf(':') + 2), element.lastIndexOf('.') ) );
  });    
    
  return substr;
}

const param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";
const param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.";

console.log( parts(param1, param2) );
console.log( parts(param2) );