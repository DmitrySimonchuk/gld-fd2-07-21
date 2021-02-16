// Создать функцию-конструктор Person() для конструирования объектов. Добавить два метода: 
// setFirstName() и setLastName().
// Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)

console.info('Task-5');

function Person(firstName, lastName) {
    this.setFirstName = function() {
        this.firstName = firstName;
        return this;
    }

    this.setLastName = function() {
        this.lastName = lastName;
        return this;
    }
}

const user12 = new Person(' Alex ', ' Sidor ');

console.log( user12.setFirstName().setLastName() );