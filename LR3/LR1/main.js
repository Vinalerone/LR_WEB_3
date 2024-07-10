alert("Привет!")
 /*// main.js

// создадим функцию обертку под наш код
// тут странное слово async, 
// но это короче, чтобы мы могли выполнять асинхронный код
// ну то есть делать запросы и ждать ответа от сервера*/
async function process() {
   /* // отправляем запрос на скачивание файла /data.json
    // наличие слеша перед data.json вообще в данном случае не обязательно
    // но считается хорошей практикой
    // await означает типа: жди ответа на запроса*/
    let r = await fetch("data.json");

    /*// когда ответ на запрос придет, 
    // то его значение положится
    // в переменную r
    
    // так как в ответе на запрос помимо самих данных
    // есть еще всякая информация, то надо еще
    // преобразовать ответ в объект js
    // для этого используется r.json()*/
    let data = await r.json();

    /*// после того как этот запросы выполнится 
    // в data будет содержимое файла в виде словарика
    // выведем его в консоль*/
  // console.log(data);

    // взял первый отзыв
    let item = data[0];
    // вывел в консоль
    console.log(item);
}

 /* // запускаем функцию*/
process();