alert("Привет!")
 /*// main.js

// создадим функцию обертку под наш код
// тут странное слово async, 
// но это короче, чтобы мы могли выполнять асинхронный код
// ну то есть делать запросы и ждать ответа от сервера*/
async function process2() {
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
    // console.log(item['Насколько курс был интересен?']);
}

 /* // запускаем функцию*/
process2();

async function process7() {
  let r = await fetch("data.json");
  let data = await r.json();

  let item = data[0];
  if (item['Насколько материал курса был понятен?'] == "В основном") {
      // console.log("Говорит что в основном понравился")
  }

  item = data[1]; // тут let уже не нужен, так переменную объявляли выше
  if (item['Насколько материал курса был понятен?'] == "В основном") {
      // console.log("Говорит что в основном понравился")
  }
  
  item = data[2]; 
  if (item['Насколько материал курса был понятен?'] == "В основном") {
      // console.log("Говорит что в основном понравился")
  }
  
}

process7();

async function process() {
  let r = await fetch("data.json");
  let data = await r.json();

  for (item of data) {
      if (item['Насколько материал курса был понятен?'] == "В основном") {
          // console.log("Говорит что в основном понравился")
      }
  }
}

process7();

async function process8() {
console.log("Ниже ответы на задания 1");
  let r = await fetch("data.json");
  let data = await r.json();
// Цикл фор
  for (item of data) {
      if (item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя'] == "8" || "2") {
          console.log("Совсем не понравилась работа преподавателя, 1-2")
          let newElement = document.createElement('p');
          newElement.textContent = "Совсем не понравилась работа преподавателя, 1-2";
          document.body.appendChild(newElement); 
      }
  }
}
process8();

async function process9() {
  console.log("Ниже ответы на задания 2");
    let r = await fetch("data.json");
    let data = await r.json();
  // Анонимная функция из-за итем =>
  data.forEach(item => {
    if (item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя'] >= "3" && item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя'] <= "8") {
        console.log("преподавателю есть над чем поработать, 3-8")
         
        let newElement = document.createElement('p');
        newElement.style.color = "blue"; // задаем цвет текста
        newElement.textContent = "преподавателю есть над чем поработать, 3-8";
        document.body.appendChild(newElement);
    }
})
  }
  process9();


  //Настоящая (именованная) функция
  async function process88() {
    let r = await fetch("data.json");
    let data = await r.json();

    data.forEach(item => {
        if (item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя'] == "9" || "10") {
            console.log("препод огонь, 9-10")
            //для вывода не в косоль
        let newElement = document.createElement('p');
        newElement.textContent = "Препод огонь, 9-10";
        document.body.appendChild(newElement);
        }
    })
}

process88()