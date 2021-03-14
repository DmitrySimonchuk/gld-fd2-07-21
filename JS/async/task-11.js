/*
Для браузера. Создайте промис, который перейдет в состояние resolve через 5с и вернет строку 
'Promise Data'. Создайте второй промис, который перейдет в состояние rejected по клику на кнопку. 
Добавьте обработчик для кнопки. Используя метод race организуйте отмену промиса.
*/

console.info('Task-11');

const promiseRes = new Promise((res, rej) => {
  setTimeout(() => res('Promise Data'), 5000)
});

let resultRej;

const promiseRej = new Promise((res, rej) => {
    resultRej = rej;
});

const button = document.createElement('button');

button.classList.add('button-for-task-6');
button.textContent = 'button for task-6';

document.body.append(button);

const createPromiseRej = document.querySelector('.button-for-task-6');

createPromiseRej.addEventListener('click', () => resultRej('Error XXX'));

Promise
  .race([promiseRes, promiseRej])
  .then(console.log)
  .catch(console.log);