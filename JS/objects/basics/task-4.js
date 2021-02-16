// Создать функцию-конструктор Tune(title, artist) для создания объектов с публичными 
// свойствами title, artist и методом concat().
// Метод должен возвращать конкатенацию значений свойств title и artist.
// Создать несколько объектов. Вызвать их метод concat().

console.info('Task-4');

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;

    this.concat = function() { 
        return this.title + this.artist; 
    };
}

const lusi = new Tune(' Tanec -', ' Lusi');

console.log( lusi.concat() );

const alex = new Tune(' Song -', ' Alex');

console.log( alex.concat() );