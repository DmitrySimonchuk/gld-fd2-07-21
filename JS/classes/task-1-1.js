/* 
Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе). Придумать для 
каждого класса по 1-2 уникальных свойств, 1-2 методов
(методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, чтобы знать, 
что он вызвался в какой-то момент) 
https://docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing 
*/

console.info('Task-1-1');

class Shape {
  #positionX = 1;
  #positionY = 2;

  constructor(name) {
    this.name = name;
  }
  get positionShape() {
    return `Position ${this.name} - x: ${this.#positionX}, y: ${this.#positionY}`;
  }
}

const shape = new Shape('cub');

console.log(shape);
console.log(shape.positionShape);
console.info('');

class Circle extends Shape {
  #bgcolor = 'yellow';
  #color = 'red';

  constructor(name) {
    super(name);
  }

  get colorFactor() {
    return `Figura ${this.name} - bgcolor: ${this.#bgcolor}, color: ${this.#color}`;
  }
}

const circle = new Circle('Circle');

console.log(circle);
console.log(circle.positionShape);
console.log(circle.colorFactor);
console.info('');

class FilledCircle extends Circle {
  #border = 'dashed';

  constructor(name) {
    super(name);
  }

  get borderLineType() {
    return `Figura ${this.name} - border: ${this.#border}`;
  }
}

const filledCircle = new FilledCircle('FilledCircle');

console.log(filledCircle);
console.log(filledCircle.positionShape);
console.log(filledCircle.colorFactor);
console.log(filledCircle.borderLineType);
console.info('');

class Dot extends FilledCircle {
  
  constructor(name, sizeX = 2, sizeY = 3) {
    super(name);
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  get square() {
    return `Figura ${this.name} has square: ${this.sizeX * this.sizeY}`;
  }
}

const dot = new Dot('Dot');

console.log(dot);
console.log(dot.positionShape);
console.log(dot.colorFactor);
console.log(dot.borderLineType);
console.log(dot.square);
console.info('');

class Rectangle extends Shape {
  #sizeZ = 2;
  
  constructor(name, sizeX = 2, sizeY = 3) {
    super(name);
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  get volume() {
    return `Figura ${this.name} has volume: ${this.sizeX * this.sizeY * this.#sizeZ}`;
  }
}

const rectangle = new Rectangle('Rectangle');

console.log(rectangle);
console.log(rectangle.positionShape);
console.log(rectangle.volume);
console.info('');

class Polygon extends Shape {
    
  constructor(name, sizeX = 2, sizeY = 3) {
    super(name);
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  get perimeter() {
    return `Figura ${this.name} has perimeter: ${this.sizeX * 2 + this.sizeY * 2}`;
  }
}

const polygon = new Polygon('Polygon', 3, 4);

console.log(polygon);
console.log(polygon.positionShape);
console.log(polygon.perimeter);
console.info('');

class Square extends Polygon {
  #weight = 12;
    
  constructor(name, sizeX = 2, sizeY = 3) {
    super(name, sizeX, sizeY);
  }

  get weight() {
    return `Figura ${this.name} has weight: ${this.#weight}`;
  }
}

const square = new Square('Square', 2, 2);

console.log(square);
console.log(square.positionShape);
console.log(square.perimeter);
console.log(square.weight);
console.info('');

class FilledPolygon extends Polygon {
  #fill = 'sugar';
    
  constructor(name, sizeX = 2, sizeY = 3) {
    super(name, sizeX, sizeY);    
  }

  get fill() {
    return `Figura ${this.name} filled: ${this.#fill}`;
  }
}

const filledPolygon = new FilledPolygon('FilledPolygon', 5, 2);

console.log(filledPolygon);
console.log(filledPolygon.positionShape);
console.log(filledPolygon.perimeter);
console.log(filledPolygon.fill);
console.info('');