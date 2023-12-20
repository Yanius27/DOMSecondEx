import '../src/css/styles.css';
import { dataBase } from './js/dataBase.js';
import createTds from './js/createTds.js';
import headTr from './js/headTr.js';
import sortTrs from './js/sortTrs.js';

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
  createTds(dataBase[i]).forEach((el) => tr.appendChild(el));
  table.appendChild(tr);
}

document.documentElement.children[1].appendChild(table);

const dataAttr = ['id', 'title', 'imdb', 'year'];

let count = 0;

function interval() {
  return setInterval(() => {
    if(dataAttr[count] === undefined) {
      count = 0;
    }
    const sortedTrs = sortTrs(dataAttr[count]);
    window.attr = dataAttr[count];
    console.log(window.attr);
    table.innerHTML = '';
    sortedTrs.forEach((el) => table.appendChild(el));
    count++;
  }, 5000);
}
let intervalId = interval();

table.querySelector('.td-with-arrow-up').addEventListener('click', () => {
  clearInterval(intervalId);
  document.querySelector('.td-with-arrow-up').classList.toggle('td-with-arrow-down');
  let sortedTrs;
  if (window.attr) {
    sortedTrs = sortTrs(window.attr);
  } else {
    sortedTrs = sortTrs(dataAttr[0]);
  }
  table.innerHTML = '';
  sortedTrs.forEach((el) => table.appendChild(el));
  intervalId = interval();
});
