async function process() {
  let r = await fetch("data.json");
  let data = await r.json();
  console.log(data) // выведем исходный список
  
  let mappedData = data.map(item => {
      return item;
  }) // мэпю
  console.log(mappedData)  // выведем отображенный список
}

process()

async function process2() {
  let r = await fetch("data.json");
  let data = await r.json();
  // console.log(data) // выведем исходный список

  let mappedData = data.map(item => {
    return item['Насколько курс был полезен?']; // добавил конкретный ключ
}) 
console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost");
console.log(select)

uniqueValues.forEach(item => {
  // создаем в памяти элемент выпадающего списка
  let option = document.createElement("option"); 

  option.value = item;  // устанавливаем значение элемента
  option.text = item; // устанавливаем текст элемента, он совпадает со значением

  select.add(option) // добавляем элемент к выпадающему списку
})
}
process2();

async function process3() {
  let r = await fetch("data.json");
  let data = await r.json();
  // console.log(data) // выведем исходный список

  let mappedData = data.map(item => {
    return item['Отметь, в какой мере ты удовлетворен курсом?']; // добавил конкретный ключ
}) 
console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost2");
console.log(select)

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
    return item['Насколько доволен форматом обучения?']; // добавил конкретный ключ
}) 
console.log(mappedData)

let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
console.log(uniqueValues)

let select = document.querySelector("#selectPoleznost3");
console.log(select)

uniqueValues.forEach(item => {
  // создаем в памяти элемент выпадающего списка
  let option = document.createElement("option"); 

  option.value = item;  // устанавливаем значение элемента
  option.text = item; // устанавливаем текст элемента, он совпадает со значением

  select.add(option) // добавляем элемент к выпадающему списку
})
}
process4();

async function process5() {
  let r = await fetch("data.json");
  let data = await r.json();

  let filteredData = [1, 2, 3, 4].filter(item => {
      return item > 1 && item < 4;
  });

  console.log(filteredData);

  // Фильтрация данных из переменной data
  let filteredDataFromData = data.filter(item => item["Насколько курс был полезен?"] == "Полезный");
  console.log(filteredDataFromData);
}

process5();

async function fillList() {
  let r = await fetch("data.json");
  let data = await r.json();
  console.log(data);

  let container = document.querySelector("#elements-container > tbody");
console.log(container)

let selectPoleznost = document.querySelector("#selectPoleznost")

let  filteredDataFromData = data.filter(item => item["Насколько курс был полезен?"] == selectPoleznost.value);

filteredDataFromData.forEach(item => {
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
fillList()

function onSelectPoleznostChanged() {
  let selectPoleznost = document.querySelector("#selectPoleznost");
  selectPoleznost.addEventListener('change', () => {
      console.log(selectPoleznost.value);
      fillList()
  });
}

onSelectPoleznostChanged();