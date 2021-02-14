// Создайте анонимную функцию, которая должна выводить сообщение 'message in console' 
// в коноль. Используйте ее как обработчик события click для кнопки.

console.info('Task-5'); 

function sendMessage() {
    return console.log( 'message in console' );
}

// var 2 более гибкий способ (позваоляет использовать более двух обработчиков событий)

click_tag.addEventListener('click', {
    handleEvent(click_tag) {
      alert(click_tag.type + " на " + click_tag.currentTarget);
    }
  });