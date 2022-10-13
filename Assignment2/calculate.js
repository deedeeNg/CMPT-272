const btn = document.getElementById('mybutton');
let lowerArr = document.querySelectorAll('.lower-bound input[type=text]');
let histogramArr = document.querySelectorAll('.histogram input[type=text]');
let mean = document.getElementById('mean');
let highest = document.getElementById('highest');
let lowest = document.getElementById('lowest');
let median = document.getElementById('median');
let arr = [];

btn.addEventListener('click', (event) => {
  stats();
});

function init() {
  document
    .getElementById('fileInput')
    .addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  arr = csvToArray(event.target.result);
  histogram();
}

function swap(a, b) {
  let mid = a;
  a = b;
  b = mid;
}

function csvToArray(str, delimiter = ',') {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

  const rows = str.slice(str.indexOf('\n') + 1).split('\r\n');

  let arr = [];
  for (let i = 0; i < rows.length; i++) {
    const values = rows[i].split(delimiter);
    [values[0], values[1]] = [values[1], values[0]];
    arr.push(values);
  }
  return arr;
}

function histogram() {
  for (let i = 0; i < histogramArr.length; i++) {
    histogramArr[i].value = '';
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < lowerArr.length; j++) {
      if (arr[i][0] >= parseFloat(lowerArr[j].value)) {
        histogramArr[j - 1].value += 'O';
        break;
      }
    }
  }
}

function stats() {
  arr.sort();
  console.log(arr);
}

window.addEventListener('change', histogram, false);
