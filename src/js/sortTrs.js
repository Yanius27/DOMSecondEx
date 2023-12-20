export default function sortTrs(attr) {
  let arrOfTrs = Array.from(document.querySelectorAll('tr'));
  const firstTr = arrOfTrs.shift();
  if (document.querySelector('.td-with-arrow-down')) {
    if (attr === 'title') {
      arrOfTrs = arrOfTrs.sort((a, b) => b.dataset[attr] > a.dataset[attr] ? 1: -1);
    } else {
      arrOfTrs = arrOfTrs.sort((a, b) => b.dataset[attr] - a.dataset[attr]);
    }
  } else {
    if (attr === 'title') {
      arrOfTrs = arrOfTrs.sort((a, b) => a.dataset[attr] > b.dataset[attr] ? 1: -1);
    } else {
      arrOfTrs = arrOfTrs.sort((a, b) => a.dataset[attr] - b.dataset[attr]);
    }
  }
  arrOfTrs.unshift(firstTr);
    return arrOfTrs;
}
