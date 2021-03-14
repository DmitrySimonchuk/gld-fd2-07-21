/*
Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения. Обработайте 
даное исключение, используя catch.
Обратите внимание, что метод print при этом не выполняется.
*/

console.info('Task-7');

const name = new Promise((res, rej) => {
  setTimeout(() => 
    res('My name is'), 1000)
});

function onSuccess(str) {
  const res = str + ' Dima';
  throw new Error('Ошибка поймана');
  return res;  
};

function print(param) {
  return console.log(param);
}

name
  .then(onSuccess)
  .then(print)
  .catch(console.log);