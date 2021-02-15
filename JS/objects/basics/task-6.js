// Создать объект
// const student = {
//     address: {
//        street: undefined, // предполагаем что значение возможено будет { name: "Any address" }
//     },
// };
// и получить из него свойство name для улицы которое намернно отсутствует в объекте. 
// При получении не должно быть ошибки выводимой в консоль.

console.info('Task-6');

// var 1 (старый способ)

const student = {
    address: {
       street: undefined, // предполагаем что значение возможено будет { name: "Any address" }
    },
};

console.log( student.address.street && student.address.street.name );

// var 2 (новый способ)

const student = {
    address: {
       street: undefined, // предполагаем что значение возможено будет { name: "Any address" }
    },
};

console.log( student.address.street?.name );