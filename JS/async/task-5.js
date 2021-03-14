/*
Для браузера. Создайте литерал объекта handlePromise со следующими свойствами: 
promise, resolve, reject, onSuccess, onError.
Проинициализируйте первые три свойства null, а последние два функциями, которые принимают один 
параметр и выводят в консоль сообщения:
    - первая - Promise is resolved with data: ${paramName}
    - вторая - Promise is rejected with error: ${paramName}
Создайте три кнопки и три обработчика события click для этих кнопок.
Первый обработчик, создает промис, заполняет первые три свойства, описаного выше объекта:
    - свойство promise получает новый созданный промис,
    - свойства resolve и reject получают ссылки на соответствующие функции resolve и reject.
Следующие два обработчика запускают методы resolve и reject.
*/

console.info('Task-5');

const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,

  onSuccess(paramName) {
    console.log( `Promise is resolved with data: ${paramName}` );
  },

  onError(paramName) {
    console.log( `Promise is rejected with error: ${paramName}` );
  },
};

function createButton(label){
    const button = document.createElement('button');

    button.classList.add('button');
    button.textContent = label;

    return button;
}

const buttonLabels = ['Create Promise', 'Resolve', 'Reject'];
const createButtonWithLabels = buttonLabels.map(createButton);

document.body.append(...createButtonWithLabels);

const createPromise = document.querySelector('button:nth-of-type(1)');
const createResolve = document.querySelector('button:nth-of-type(2)');
const createReject = document.querySelector('button:nth-of-type(3)');

createPromise.addEventListener('click', handlePromise);
createResolve.addEventListener('click', () => handlePromise.onSuccess('Success'));
createReject.addEventListener('click', () => handlePromise.onError('Error'));