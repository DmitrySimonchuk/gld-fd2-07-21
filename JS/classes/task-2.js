/* 
Создать виртуальную рыбку, которая имеет свои координаты (например, в аквариуме) по x, y и z, у нее 
есть цвет, размер, она двигается, кушает, может размножаться.
У неё должно быть приватное поле содержащее многообразие еды которое она ест. При попытке скормить 
рыбке что-то, она должна выбрать только то, что она может скушать.
Создать вторую рыбку используя существующий класс (без наследования от первой рыбки), которая кушает 
на один продукт больше, чем оригинальная рыбка.
Продумать дополнительные методы и их реализацию (тут надо всё сделать чтоб работало, а не просто 
консоль-логи), которые позволят управлять такой рыбкой.
*/

console.info('Task-2');

class VirtualFish {
  _food = ['worms', 'crustaceans', 'plancton'];

  constructor(name, color, size, position) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.position = position;
  }
  
  move(a, b, c) {
    return this.position = {x: a, y: b, z: c};
  }

  eat(food) {
    if(this._food.includes(food)) {
      return 'I am eating';
    } else {
      return 'It is bad food. Give me another food';
    }
  }  

  set food(value) {
    this._food.push(value);
  }

  get food() {
    return this._food;
  }

  reproduce() {
    let name = `Baby of ${this.name}`;
    let size = 'fry';
    const babyFish = new VirtualFish(name, this.color, size, this.position);
    return babyFish;
  }  
}

const firstFish = new VirtualFish('Carp', 'grey', 'Big', {x: 50, y: 40, z: 40});

const secondFish = new VirtualFish('Catfish', 'white', 'Large', {x: 20, y: 60, z: 50});

secondFish.food = 'carrion';

console.info('first Fish');
console.table( firstFish );

console.info('');
console.log( firstFish.move(10, 10, 10) );
console.log( firstFish.eat('worms') );
console.log( firstFish.eat('rabbit') );

console.info('');
console.info('first Fish');
console.table( firstFish );

console.info('');
console.info('firstFish reproduce');
console.table( firstFish.reproduce() );

console.info('');
console.info('second Fish');
console.table( secondFish ); 