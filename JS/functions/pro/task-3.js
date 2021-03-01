// Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
// Функции должна выводить значение параметра в консоль в соответствующем режиме.
// Создайте функцию splitToWords с двумя параметрами: msg и callback.
// Функция должна разделять строку на слова и использовать колбек для отображения слов.
// Если второй параметр не задан, функция должна возвращать массив слов.

console.info('Task-3');

const toConsoleLog = (q) => console.log(q);

const toConsoleError = (q) => console.error(q);

const toConsoleTrace = (q) => console.trace(q);

const toConsoleTable = (obj) => console.table(obj);

const trade = {
  name: 'Belka',
  count: 20
}

toConsoleLog('Log');
toConsoleError('Err');
toConsoleTrace('Trace');
toConsoleTable(trade);

const splitToWords = (msg, callback) => {
  return callback ? msg.split(' ').forEach(callback) : msg.split(' ');
}

const str = 'строка на слова и использование колбек для отображения слов.';

const showWords = (elem) => console.log(elem);

console.log( splitToWords(str, showWords) );
console.log( splitToWords(str) );