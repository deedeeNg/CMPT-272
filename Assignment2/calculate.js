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
  csvToArray(event.target.result);
}

function csvToArray(str, delimiter = ',') {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

  const rows = str.slice(str.indexOf('\n') + 1).split('\r\n');
  console.log(rows);

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
