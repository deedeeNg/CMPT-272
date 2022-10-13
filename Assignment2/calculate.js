const btn = document.getElementById('mybutton');
let lowerArr = document.querySelectorAll('.lower-bound input[type=text');
let histogramArr = document.querySelectorAll('.histogram input[type=text]');

btn.addEventListener('click', (event) => {
  for (let i = 0; i < 11; i++) {
    arr[i].value = 'test';
  }
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
}

function csvToArray(str, delimiter = ',') {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

  const rows = str.slice(str.indexOf('\n') + 1).split('\r\n');

  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index].trim();
      return object;
    }, {});
    return el;
  });
  return arr;
}
