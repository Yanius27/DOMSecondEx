export default function headTr(data) {
  const headTr = document.createElement('tr');
  for (let key in data) {
    const td = document.createElement('td');
    td.textContent = key;
    headTr.appendChild(td);
  }
  headTr.children[0].classList.add('td-with-arrow-up');
  return headTr;
}
