/*
Создайте литерал объекта employee со следующими свойствами: name: 'Ann', work – функция, 
которая выводит в консоль сообщение "I am Ann. I am working...". Имя Ann должно быть взято из 
свойства name Тестовые данные:
employee.work()  результат в консоле "I am Ann. I am working..."
*/

console.info('Task-6');

const emploee = {
  name: 'Ann',

  work() {
    console.log( `I am ${this.name}. I am working...` );
  },
};
  
emploee.work(); 