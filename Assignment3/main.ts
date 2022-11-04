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

var table = document.getElementById('table1')! as HTMLTableElement;

document.getElementById('testBtn')!.addEventListener('click', function () {
  console.log(localStorage.pigArray);
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
  newCell2.innerHTML =
    "<span style='text-decoration: underline; color: blue; cursor: pointer;' class='moreInfo'>More Info</span>";
  newCell3.innerHTML =
    "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";

  let moreInfo = document.getElementsByClassName('moreInfo');
  let moreInfoData = document.getElementsByClassName('more-info-data');
  let moreInfoDynamic = document.getElementsByClassName('more-info-dynamic');

  for (let i = 0; i < moreInfo.length; i++) {
    moreInfo[i].addEventListener('click', function () {
      moreInfoData[0].innerHTML = pc.get(i).name;
      moreInfoData[1].innerHTML = pc.get(i).breed;
      moreInfoData[2].innerHTML = pc.get(i).height.toString() + ' Hocks';
      moreInfoData[3].innerHTML = pc.get(i).weight.toString() + ' Stones';
      moreInfoData[5].innerHTML = pc.get(i).personality;
      if (pc.get(i).category == 0) {
        moreInfoData[4].innerHTML = pc.get(i).swimming!.toString();
        moreInfoDynamic[0].innerHTML = 'Swimming';
      } else if (pc.get(i).category == 1) {
        moreInfoData[4].innerHTML = pc.get(i).language!;
        moreInfoDynamic[0].innerHTML = 'Language';
      } else if (pc.get(i).category == 2) {
        moreInfoData[4].innerHTML = pc.get(i).running!.toString();
        moreInfoDynamic[0].innerHTML = 'Running';
      } else {
        moreInfoData[4].innerHTML = pc.get(i).strength!.toString();
        moreInfoDynamic[0].innerHTML = 'Strength';
      }
    });
  }
});

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
