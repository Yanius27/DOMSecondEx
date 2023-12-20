/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/dataBase.js
const dataBase = [{
  "id": 26,
  "title": "Побег из Шоушенка",
  "imdb": 9.30,
  "year": 1994
}, {
  "id": 25,
  "title": "Крёстный отец",
  "imdb": 9.20,
  "year": 1972
}, {
  "id": 27,
  "title": "Крёстный отец 2",
  "imdb": 9.00,
  "year": 1974
}, {
  "id": 1047,
  "title": "Тёмный рыцарь",
  "imdb": 9.00,
  "year": 2008
}, {
  "id": 223,
  "title": "Криминальное чтиво",
  "imdb": 8.90,
  "year": 1994
}];
;// CONCATENATED MODULE: ./src/js/createTds.js
function createTds(data) {
  const arr = [];
  for (let key in data) {
    let td;
    if (key === 'imdb') {
      td = document.createElement('td');
      td.textContent = `imdb: ${data[key]}`;
    } else if (key === 'year') {
      td = document.createElement('td');
      td.textContent = `(${data[key]})`;
    } else {
      td = document.createElement('td');
      td.textContent = data[key];
    }
    arr.push(td);
  }
  return arr;
}
;// CONCATENATED MODULE: ./src/js/headTr.js
function headTr(data) {
  const headTr = document.createElement('tr');
  for (let key in data) {
    const td = document.createElement('td');
    td.textContent = key;
    headTr.appendChild(td);
  }
  headTr.children[0].classList.add('td-with-arrow-up');
  return headTr;
}
;// CONCATENATED MODULE: ./src/js/sortTrs.js
function sortTrs(attr) {
  let arrOfTrs = Array.from(document.querySelectorAll('tr'));
  const firstTr = arrOfTrs.shift();
  if (document.querySelector('.td-with-arrow-down')) {
    if (attr === 'title') {
      arrOfTrs = arrOfTrs.sort((a, b) => b.dataset[attr] > a.dataset[attr] ? 1 : -1);
    } else {
      arrOfTrs = arrOfTrs.sort((a, b) => b.dataset[attr] - a.dataset[attr]);
    }
  } else {
    if (attr === 'title') {
      arrOfTrs = arrOfTrs.sort((a, b) => a.dataset[attr] > b.dataset[attr] ? 1 : -1);
    } else {
      arrOfTrs = arrOfTrs.sort((a, b) => a.dataset[attr] - b.dataset[attr]);
    }
  }
  arrOfTrs.unshift(firstTr);
  return arrOfTrs;
}
;// CONCATENATED MODULE: ./src/index.js





const table = document.createElement('table');
table.classList.add('cinemaTable');
const tr = headTr(dataBase[0]);
table.appendChild(tr);
for (let i = 0; i < dataBase.length; i++) {
  const tr = document.createElement('tr');
  tr.dataset.id = dataBase[i].id;
  tr.dataset.title = dataBase[i].title;
  tr.dataset.imdb = dataBase[i].imdb;
  tr.dataset.year = dataBase[i].year;
  createTds(dataBase[i]).forEach(el => tr.appendChild(el));
  table.appendChild(tr);
}
document.documentElement.children[1].appendChild(table);
const dataAttr = ['id', 'title', 'imdb', 'year'];
let count = 0;
function interval() {
  return setInterval(() => {
    if (dataAttr[count] === undefined) {
      count = 0;
    }
    const sortedTrs = sortTrs(dataAttr[count]);
    window.attr = dataAttr[count];
    console.log(window.attr);
    table.innerHTML = '';
    sortedTrs.forEach(el => table.appendChild(el));
    count++;
  }, 5000);
}
let intervalId = interval();
table.querySelector('.td-with-arrow-up').addEventListener('click', () => {
  clearInterval(intervalId);
  document.querySelector('.td-with-arrow-up').classList.toggle('td-with-arrow-down');
  const sortedTrs = sortTrs(window.attr);
  table.innerHTML = '';
  sortedTrs.forEach(el => table.appendChild(el));
  intervalId = interval();
});
/******/ })()
;