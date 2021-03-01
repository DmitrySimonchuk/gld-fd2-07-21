/*
Memoization. Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле F0 = 0, F1 = 1, 
Fn = Fn-1 + Fn-2.
Функция должна хранить те значения, которые она уже вычисляла.
Используя методы console.time(), console.timeEnd() или performance.now() определите время 
вычисления функции fibo и функции fiboMemo.
*/

console.info('Task-8');

function fibo(f) {
  if ( f === 0) {
    return 0;
  } else if ( f === 1) {
    return 1;
  } else {
    return fibo(f-1) + fibo(f-2);
  } 
}

function memo(func) {
  let cashe = new Map();

  return function(x) {
      if ( cashe.has(x) ) {      
        return cashe.get(x);
      } 

      let result = func(x);
      
      cashe.set(x, result);
      return result;      
    }    
}

let fiboMemo = memo(fibo);

console.time();
console.log( fibo(30) );
console.timeEnd();

console.time();
console.log( fiboMemo(30) );
console.timeEnd();