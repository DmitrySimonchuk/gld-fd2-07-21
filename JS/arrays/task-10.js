// Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" отдельно количество букв r, k, t 
// и вывести в консоль

console.info('Task-10');

const str = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

const arr = Array.from(str);

let countR = 0;
let countK = 0;
let countT = 0;

arr.forEach((elem) => {
  elem === 'r' ? countR++ 
    : elem === 'k' ? countK++ 
        : elem === 't' ? countT++ : 0;
});

console.log( ` количество букв r - ${countR} \n количество букв k - ${countK} \n количество букв t - ${countT}` ); 