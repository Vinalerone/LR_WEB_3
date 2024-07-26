async function process2() {
  let r = await fetch("data.json");
  let data = await r.json();
  // console.log(data) // выведем исходный список

  let mappedData = data.map(item => {
    return item['Насколько курс был полезен?']; // добавил конкретный ключ
}) 
//console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
//console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost");
//console.log(select)

uniqueValues.forEach(item => {
  // создаем в памяти элемент выпадающего списка
  let option = document.createElement("option"); 

  option.value = item;  // устанавливаем значение элемента
  option.text = item; // устанавливаем текст элемента, он совпадает со значением

  select.add(option) // добавляем элемент к выпадающему списку
})
}
process2();
//кнопка 3
async function process3() {
  let r = await fetch("data.json");
  let data = await r.json();
  // console.log(data) // выведем исходный список

  let mappedData = data.map(item => {
    return item['Насколько доволен форматом обучения?']; // добавил конкретный ключ
}) 
//console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
//console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost2");
//console.log(select)

uniqueValues.forEach(item => {
  // создаем в памяти элемент выпадающего списка
  let option = document.createElement("option"); 

  option.value = item;  // устанавливаем значение элемента
  option.text = item; // устанавливаем текст элемента, он совпадает со значением

  select.add(option) // добавляем элемент к выпадающему списку
})
}
process3();

async function process4() {
  let r = await fetch("data.json");
  let data = await r.json();
  // console.log(data) // выведем исходный список

  let mappedData = data.map(item => {
    return item['Отметь, в какой мере ты удовлетворен курсом?']; // добавил конкретный ключ
}) 
//console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
//console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost3");
//console.log(select)

uniqueValues.forEach(item => {
  // создаем в памяти элемент выпадающего списка
  let option = document.createElement("option"); 

  option.value = item;  // устанавливаем значение элемента
  option.text = item; // устанавливаем текст элемента, он совпадает со значением

  select.add(option) // добавляем элемент к выпадающему списку
})
}
process4();

async function fillList() {
  let r = await fetch("data.json");
  let data = await r.json();



let container = document.querySelector("#elements-container > tbody");
//console.log(container)
let selectPoleznost = document.querySelector("#selectPoleznost");
let  filteredDataFromData = data.filter(item => item["Насколько курс был полезен?"] == selectPoleznost.value);



container.replaceChildren() //удаляет строчки таблицы
//console.clear();

let filteredData = data.filter(item => {
  if (selectPoleznost.value == 'не важно') {
   //console.clear();
    //console.log(selectPoleznost.value+'1');
   // container = document.querySelector("#elements-container > tbody");
    //console.log(container)
  //selectPoleznost = document.querySelector("#selectPoleznost");
    //console.log(selectPoleznost.value+'1.1');
    //item['Насколько курс был полезен?'] == selectPoleznost.value;
    //console.log(item['Насколько курс был полезен?'] );
    //<td>${item['Насколько курс был полезен?']}</td>
    //item['Насколько курс был полезен?'] == selectPoleznost.value;
    //selectPoleznost.value = item['Насколько курс был полезен?']; //меняет значение на странице, ХDD
    //console.log(selectPoleznost.value+'1.3');
    filteredDataFromData = data.filter(item => item["Насколько курс был полезен?"] != selectPoleznost.value);
    //console.log(filteredDataFromData.value+'1.4');
    //console.log(selectPoleznost.value+'1.5');
   // console.clear();
  }
  //else{
  //console.log(selectPoleznost.value+'2');}
})

let poleznost = filteredDataFromData.map(item => item['Насколько курс был полезен?']);
//console.log("Значения в столбике полезность:")
//console.log(poleznost)

let poleznostCounters = {} // заводим пустой словарик
poleznost.forEach(item => { // с помощью forEach, обходим элементы списка
    // poleznostCounters[item] | 0 -- это хитрая фиговина 
    // которая вернет значение poleznostCounters[item] если ключ item есть в словарике poleznostCounters
    // и 0 если ключа item нет в словарике poleznostCounters
    // ну а "+1" это чтобы увеличивать предыдущее значение ключа на 1, когда встречаем очередное значение
    // то есть когда встретим первый раз то положится значение  1
    poleznostCounters[item] = (poleznostCounters[item] | 0) + 1
})
// ну и выводим
//console.log(poleznostCounters)

let poleznostStatsNode = document.querySelector("#poleznostStats .stats")
poleznostStatsNode.innerText = JSON.stringify(poleznostCounters);


let container2 = document.querySelector("#elements-container > tbody");
let selectPoleznost2 = document.querySelector("#selectPoleznost2");
let  filteredDataFromData2 = data.filter(item => item["Насколько доволен форматом обучения?"] == selectPoleznost2.value);

container2.replaceChildren()

let filteredData2 = data.filter(item => {
  if (selectPoleznost2.value == 'не важно') {
   //console.clear();
    //console.log(selectPoleznost2.value+'1');
    container2 = document.querySelector("#elements-container > tbody");
    selectPoleznost2 = document.querySelector("#selectPoleznost2");
   // console.log(selectPoleznost2.value+'1.1');
   // console.log(item['Насколько доволен форматом обучения?'] );
   // console.log(selectPoleznost2.value+'1.3');
    filteredDataFromData2 = data.filter(item => item["Насколько доволен форматом обучения?"] != selectPoleznost2.value);
   // console.log(selectPoleznost2.value+'1.5');
  }
  //else{
  //console.log(selectPoleznost2.value+'2');}
})

let poleznost2 = filteredDataFromData2.map(item => item['Насколько доволен форматом обучения?']);
//console.log("Значения в столбике полезность:")
//console.log(poleznost2)

let poleznostCounters2 = {} // заводим пустой словарик
poleznost2.forEach(item => { // с помощью forEach, обходим элементы списка
    // poleznostCounters[item] | 0 -- это хитрая фиговина 
    // которая вернет значение poleznostCounters[item] если ключ item есть в словарике poleznostCounters
    // и 0 если ключа item нет в словарике poleznostCounters
    // ну а "+1" это чтобы увеличивать предыдущее значение ключа на 1, когда встречаем очередное значение
    // то есть когда встретим первый раз то положится значение  1
    poleznostCounters2[item] = (poleznostCounters2[item] | 0) + 1
})
// ну и выводим
//console.log(poleznostCounters2)

let poleznostStatsNode2 = document.querySelector("#poleznostStats2 .stats")
poleznostStatsNode2.innerText = JSON.stringify(poleznostCounters2);

let container3 = document.querySelector("#elements-container > tbody");
let selectPoleznost3 = document.querySelector("#selectPoleznost3");
let filteredDataFromData3 = data.filter(item => item["Отметь, в какой мере ты удовлетворен курсом?"] == selectPoleznost3.value);

container3.replaceChildren()

let filteredData3 = data.filter(item => {
  if (selectPoleznost3.value == 'не важно') {
    filteredDataFromData3 = data.filter(item => item["Отметь, в какой мере ты удовлетворен курсом?"] != selectPoleznost3.value);
  }
})

let poleznost3 = filteredDataFromData3.map(item => item['Отметь, в какой мере ты удовлетворен курсом?']);
//console.log("Значения в столбике полезность:")
//console.log(poleznost3)

let poleznostCounters3 = {} // заводим пустой словарик
poleznost3.forEach(item => { // с помощью forEach, обходим элементы списка
    // poleznostCounters[item] | 0 -- это хитрая фиговина 
    // которая вернет значение poleznostCounters[item] если ключ item есть в словарике poleznostCounters
    // и 0 если ключа item нет в словарике poleznostCounters
    // ну а "+1" это чтобы увеличивать предыдущее значение ключа на 1, когда встречаем очередное значение
    // то есть когда встретим первый раз то положится значение  1
    poleznostCounters3[item] = (poleznostCounters3[item] | 0) + 1
})
// ну и выводим
//console.log(poleznostCounters3)

let poleznostStatsNode3 = document.querySelector("#poleznostStats3 .stats")
poleznostStatsNode3.innerText = JSON.stringify(poleznostCounters3);




//Конкатенация двух массивов (вывод 2 массива одновременно ._.)
//let combinedFilteredData = filteredDataFromData.concat(filteredDataFromData2);

// Фильтрация данных, чтобы получить элементы, которые присутствуют в обоих массивах
//чат ГПТ
let combinedFilteredData = filteredDataFromData.filter(item1 => {
  return filteredDataFromData2.some(item2 => {
      return filteredDataFromData3.some(item3 => item3['ID'] === item2['ID'] && item2['ID'] === item1['ID']);
  });
});

//Попытка объединить словари

let poleznostCounters33 = {}; // создаем пустой словарь
poleznost3.forEach(item => {
    poleznostCounters33[item] = (poleznostCounters33[item] || 0) + 1;
});

console.log(poleznostCounters33);

let poleznostCounters11 = {}; // создаем пустой словарь
poleznost.forEach(item => {
    poleznostCounters11[item] = (poleznostCounters11[item] || 0) + 1;
});

console.log(poleznostCounters11);

let poleznostCounters22 = {}; // создаем пустой словарь
poleznost2.forEach(item => {
    poleznostCounters22[item] = (poleznostCounters22[item] || 0) + 1;
});

console.log(poleznostCounters22);

// Объединяем словари poleznostCounters11 и poleznostCounters22
let combinedCounters = {...poleznostCounters11, ...poleznostCounters22};

// Объединяем combinedCounters со словарем poleznostCounters33
for (let key in poleznostCounters33) {
    combinedCounters[key] = (combinedCounters[key] || 0) + poleznostCounters33[key];
}

console.log(combinedCounters);

//??


// Вставка данных в контейнер
combinedFilteredData.forEach(item => {
  container.insertAdjacentHTML("beforeend", `
  <tr>
      <td>${item['ID']}</td>
      <td>${item['Насколько курс был полезен?']}</td>
      <td>${item['Насколько доволен форматом обучения?']}</td>
      <td>${item['Отметь, в какой мере ты удовлетворен курсом?']}</td>
  </tr>
  `);
})
}

function onSelectPoleznostChanged() {
  let selectPoleznost = document.querySelector("#selectPoleznost");
  // selectPoleznost.addEventListener('change', () => {
  //console.log(selectPoleznost.value+'22');
  fillList();
}

onSelectPoleznostChanged();

//Насколько доволен?
//не удалять ниже
function onSelectPoleznostChanged2() {
  let selectPoleznost2 = document.querySelector("#selectPoleznost2");
  // selectPoleznost.addEventListener('change', () => {
  //console.log(selectPoleznost.value+'22');
  fillList();
}

onSelectPoleznostChanged2();

function onSelectPoleznostChanged3() {
  let selectPoleznost3 = document.querySelector("#selectPoleznost3");
  // selectPoleznost.addEventListener('change', () => {
  //console.log(selectPoleznost.value+'22');
  fillList();
}

onSelectPoleznostChanged3();