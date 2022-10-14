let lowerArr = document.querySelectorAll('.lower-bound input[type=text]');
let histogramArr = document.querySelectorAll('.histogram input[type=text]');
let mean = document.getElementById('mean');
let highest = document.getElementById('highest');
let lowest = document.getElementById('lowest');
let median = document.getElementById('median');
let arr = [];

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
  stats();
}

function csvToArray(str, delimiter = ',') {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

  const rows = str.slice(str.indexOf('\n') + 1).split('\r\n');

  let arr = [];
  for (let i = 0; i < rows.length; i++) {
    const values = rows[i].split(delimiter);
    values[0] = values[0].trim();
    values[1] = parseFloat(values[1]);
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
      if (arr[i][1] >= parseFloat(lowerArr[j].value)) {
        histogramArr[j - 1].value += 'O';
        break;
      }
    }
  }
}

function stats() {
  let scoreArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    scoreArr.push(arr[i][1]);
    sum += arr[i][1];
  }
  sum /= arr.length;
  sum = Math.round(sum * 100) / 100;
  mean.value = sum;
  scoreArr.sort((a, b) => {
    return a - b;
  });
  let med = scoreArr[Math.floor(scoreArr.length / 2)];
  median.value = med;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == scoreArr[0]) {
      lowest.value = arr[i][0] + ' (' + arr[i][1] + '%)';
    }
    if (arr[i][1] == scoreArr[scoreArr.length - 1]) {
      highest.value = arr[i][0] + ' (' + arr[i][1] + '%)';
    }
  }
}

window.addEventListener('change', histogram, false);
