// Решать как для браузера. Создайте функцию-конструктор Calculator, который создаёт объекты 
// с четырьмя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// multiply() возвращает произведение введённых свойств.
// history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания.


console.info('Task-10'); 

function Calculator() {
    let memoryHistory = [];

    this.read = function() {
        this.operand1 = 5;          // все остальные функции будут знать об этих данных
        this.operand2 = 6;
        memoryHistory.push('read');
    };
    this.sum = function() {
        memoryHistory.push('sum');
        return +this.operand1 + +this.operand2;        
    };
    this.multiply = function() {
        memoryHistory.push('multiply');
        return +this.operand1 * +this.operand2;
    };
    this.history = function history() {          // безымянная фу-ия, чтобы не писать в строку
        memoryHistory.push(this.history.name);
        memoryHistory.push('history');
        return memoryHistory;
    };

    this.read();
}

const calk = new Calculator();

calk.read();
calk.sum();
calk.multiply();
calk.sum();
calk.read();
calk.sum();
calk.multiply();

console.log( calk.history() );

console.info(' ');