import { PigController } from './PigController';
import { Pig } from './PigModel';

var pc = new PigController();
var name = document.getElementById('name')! as HTMLInputElement;
var breed = document.getElementById('breed')! as HTMLInputElement;
var height = document.getElementById('height')! as HTMLInputElement;
var weight = document.getElementById('weight')! as HTMLInputElement;
var personality = document.getElementById('personality')! as HTMLInputElement;

var categories = document.getElementById('category')! as HTMLInputElement;
var dynamic = document.getElementById('dynamic-label')! as HTMLInputElement;

document.getElementById('add')!.addEventListener('click', function () {
  var p = new Pig(
    name.value,
    breed.value,
    height.valueAsNumber,
    weight.valueAsNumber,
    personality.value
  );
  pc.add(p);
});

categories.addEventListener('change', function () {
  if (categories.value === 'white') {
    dynamic.textContent = 'Running';
  } else if (categories.value === 'black') {
    dynamic.textContent = 'Strength';
  } else if (categories.value === 'grey') {
    dynamic.textContent = 'Swimming';
  } else {
    dynamic.textContent = 'Language';
  }
});
