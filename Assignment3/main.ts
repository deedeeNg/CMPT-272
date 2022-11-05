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
var dynamic = document.getElementById('dynamic')! as HTMLInputElement;

var categories = document.getElementById('category')! as HTMLInputElement;
var dynamicLabel = document.getElementById(
  'dynamic-label'
)! as HTMLInputElement;

var num = -1;

var table = document.getElementById('table1')! as HTMLTableElement;

document.getElementById('add')!.addEventListener('click', function () {
  num++;
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
  newRow.id = 'row' + num.toString();

  // Insert a cell in the row at index 0
  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);

  newCell0.innerHTML = name.value;
  newCell1.innerHTML = categories.value;
  newCell2.innerHTML =
    "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
  newCell2.classList.add('moreInfo' + num.toString());
  newCell3.innerHTML =
    "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
  newCell3.classList.add('delete' + num.toString());

  newCell2.addEventListener('click', function () {
    change(newCell2.className);
  });

  newCell3.addEventListener('click', function () {
    deletedata(newCell3.className);
  });
});

function deletedata(str: String) {
  let i = Number(str.replace(/^\D+/g, ''));
  let confirmAction = confirm(
    'Are you sure to delete this little cute pig UwU?'
  );
  if (confirmAction) {
    document.getElementById('row' + i.toString())?.remove();
  } else {
  }
}

function change(str: String) {
  let i = Number(str.replace(/^\D+/g, ''));
  console.log(i);

  let moreInfoData = document.getElementsByClassName('more-info-data');
  let moreInfoDynamic = document.getElementsByClassName('more-info-dynamic');

  let Name = pc.get(i).name;
  let Breed = pc.get(i).breed;
  let Height = pc.get(i).height.toString() + ' Hocks';
  let Weight = pc.get(i).weight.toString() + ' Stones';
  let Personality = pc.get(i).personality;

  moreInfoData[0].innerHTML = Name;
  moreInfoData[1].innerHTML = Breed;
  moreInfoData[2].innerHTML = Height + ' Hocks';
  moreInfoData[3].innerHTML = Weight + ' Stones';
  moreInfoData[5].innerHTML = Personality;

  if (pc.get(i).category == 0) {
    let Swimming = pc.get(i).swimming!.toString();
    moreInfoData[4].innerHTML = Swimming;
    moreInfoDynamic[0].innerHTML = 'Swimming';
  } else if (pc.get(i).category == 1) {
    let Language = pc.get(i).language!;
    moreInfoData[4].innerHTML = Language;
    moreInfoDynamic[0].innerHTML = 'Language';
  } else if (pc.get(i).category == 2) {
    let Running = pc.get(i).running!.toString();
    moreInfoData[4].innerHTML = Running;
    moreInfoDynamic[0].innerHTML = 'Running';
  } else {
    let Strength = pc.get(i).strength!.toString();
    moreInfoData[4].innerHTML = Strength;
    moreInfoDynamic[0].innerHTML = 'Strength';
  }
}

categories.addEventListener('change', function () {
  var options = document.querySelectorAll('#breed option');
  options.forEach((o) => o.remove());
  if (categories.value === 'white') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Running';
    var option1 = document.createElement('option');
    option1.text = 'Chester';
    breed.append(option1);
    var option2 = document.createElement('option');
    option2.text = 'Duroc';
    breed.append(option2);
    var option3 = document.createElement('option');
    option3.text = 'Landrace';
    breed.append(option3);
  } else if (categories.value === 'black') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Strength';
    var option1 = document.createElement('option');
    option1.text = 'Large';
    breed.append(option1);
    var option2 = document.createElement('option');
    option2.text = 'Berkshire';
    breed.append(option2);
    var option3 = document.createElement('option');
    option3.text = 'Hampshire';
    breed.append(option3);
  } else if (categories.value === 'grey') {
    dynamic.type = 'number';
    dynamicLabel.textContent = 'Swimming';
    var option1 = document.createElement('option');
    option1.text = 'Poland China';
    breed.append(option1);
    var option2 = document.createElement('option');
    option2.text = 'Spotted';
    breed.append(option2);
    var option3 = document.createElement('option');
    option3.text = 'Yorkshire';
    breed.append(option3);
  } else {
    dynamic.type = 'text';
    dynamicLabel.textContent = 'Language';
    var option1 = document.createElement('option');
    option1.text = 'Welsh';
    breed.append(option1);
    var option2 = document.createElement('option');
    option2.text = 'Middle';
    breed.append(option2);
    var option3 = document.createElement('option');
    option3.text = 'American Landrace';
    breed.append(option3);
  }
});
