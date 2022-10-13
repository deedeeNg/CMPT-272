const btn = document.getElementById('mybutton');
let lowerArr = document.querySelectorAll('.lower-bound input[type=text]');
let histogramArr = document.querySelectorAll('.histogram input[type=text]');
let statArr = document.querySelectorAll('.stats input[type=text]');
let arr;

btn.addEventListener('click', (event) => {
  histogram();
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

function csvToArray(str, delimiter = ',') {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

  const rows = str.slice(str.indexOf('\n') + 1).split('\r\n');

  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header.trim()] = values[index].trim();
      return object;
    }, {});
    return el;
  });
  return arr;
}

function histogram() {
  for (let i = 0; i < histogramArr.length; i++) {
    histogramArr[i].value = '';
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < lowerArr.length; j++) {
      if (arr[i].Percent >= parseFloat(lowerArr[j].value)) {
        histogramArr[j - 1].value += 'O';
        break;
      }
    }
  }
}

window.addEventListener('change', histogram, false);
