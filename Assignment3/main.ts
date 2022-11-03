import { PigController } from './PigController';
import { Pig } from './PigModel';
import { BlackPig } from './BlackPigModel';
import { WhitePig } from './WhitePigModel';
import { GreyPig } from './GreyPigModel';
import { ChestnutPig } from './ChestnutPigModel';

var pc = new PigController();

var name = document.getElementById('name')! as HTMLInputElement;
var breed = document.getElementById('breed')! as HTMLInputElement;
var height = document.getElementById('height')! as HTMLInputElement;
var weight = document.getElementById('weight')! as HTMLInputElement;
var personality = document.getElementById('personality')! as HTMLInputElement;

var categories = document.getElementById('category')! as HTMLInputElement;
var dynamicLabel = document.getElementById(
  'dynamic-label'
)! as HTMLInputElement;
var dynamic = document.getElementById('dynamic')! as HTMLInputElement;

var table = document.getElementById('table1')! as HTMLTableElement;

document.getElementById('testBtn')!.addEventListener('click', function () {
  let newRow = table.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);

  newCell0.innerHTML = 'Pork';
  newCell1.innerHTML = 'aberico';
  newCell2.innerHTML = 'More Info';
  newCell3.innerHTML = 'Delete';
});

document.getElementById('add')!.addEventListener('click', function () {
  if (categories.value === 'black') {
    var blackPig = new BlackPig(
      name.value,
      breed.value,
      height.valueAsNumber,
      weight.valueAsNumber,
      dynamic.valueAsNumber,
      personality.value
    );
    pc.add(blackPig);
  } else if (categories.value === 'white') {
    var whitePig = new WhitePig(
      name.value,
      breed.value,
      height.valueAsNumber,
      weight.valueAsNumber,
      dynamic.valueAsNumber,
      personality.value
    );
    pc.add(whitePig);
  } else if (categories.value === 'grey') {
    var greyPig = new GreyPig(
      name.value,
      breed.value,
      height.valueAsNumber,
      weight.valueAsNumber,
      dynamic.valueAsNumber,
      personality.value
    );
    pc.add(greyPig);
  } else {
    var chestnutPig = new ChestnutPig(
      name.value,
      breed.value,
      height.valueAsNumber,
      weight.valueAsNumber,
      dynamic.value,
      personality.value
    );
    pc.add(chestnutPig);
  }

  let newRow = table.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);

  newCell0.innerHTML = name.value;
  newCell1.innerHTML = categories.value;
  newCell2.innerHTML = 'More Info';
  newCell3.innerHTML = 'Delete';
});

categories.addEventListener('change', function () {
  if (categories.value === 'white') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Running';
  } else if (categories.value === 'black') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Strength';
  } else if (categories.value === 'grey') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Swimming';
  } else {
    dynamic.type = 'text';
    dynamicLabel.textContent = 'Language';
  }
});
