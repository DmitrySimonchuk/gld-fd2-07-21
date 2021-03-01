/*
Borrow Method - call/apply/bind. Создайте литерал объекта person со свойством name. 
Вызовите метод work объекта employee из предыдущего задания.
*/

console.info('Task-7');

const emploee = {
  name: 'Ann',

  work() { console.log( `I am ${this.name}. I am working...` ) }
}

emploee.work();

const person = {
  name: 'Jho',
}

emploee.work.call(person);
emploee.work.apply(person);
console.info();
const man = emploee.work.bind(person);
man();