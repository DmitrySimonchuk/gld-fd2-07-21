/*
Создайте промис, который через 1 с возвращает строку "My name is".
Создайте функцию onSuccess, которая получает один параметр, прибавляет к нему Ваше имя и возвращает 
новую строку из функции.
Создайте функцию print, которая выводит в консоль значение своего параметра.
Добавьте два метода then и зарегистрируйте созданные функции.
*/

console.info('Task-6');

const name = new Promise((res, rej) => {
  setTimeout(() => 
    res('My name is'), 1000)
});

function onSuccess(str) {
  return str + ' Dima';
};

function print(param) {
  return console.log(param);
}

name
  .then(onSuccess)
  .then(print);