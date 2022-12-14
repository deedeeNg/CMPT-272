import { BlackPigController } from './BlackPigController';
import { WhitePigController } from './WhitePigController';
import { GreyPigController } from './GreyPigController';
import { ChestnutPigController } from './ChestnutPigController';
import { Pig } from './PigModel';
import { BlackPig } from './BlackPigModel';
import { WhitePig } from './WhitePigModel';
import { GreyPig } from './GreyPigModel';
import { ChestnutPig } from './ChestnutPigModel';

var blackPigCon = new BlackPigController();
var whitePigCon = new WhitePigController();
var greyPigCon = new GreyPigController();
var chestnutPigCon = new ChestnutPigController();

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
  deleteAllrow();
});

document.getElementById('add')!.addEventListener('click', function () {
  if (
    name.value.length == 0 ||
    isNaN(Number(height.value)) ||
    isNaN(Number(weight.value)) ||
    personality.value.length == 0
  ) {
    alert('Your input is empty please fill the input');
  } else {
    if (categories.value === 'black') {
      var blackPig = new BlackPig(
        name.value,
        breed.value,
        height.valueAsNumber,
        weight.valueAsNumber,
        dynamic.valueAsNumber,
        personality.value
      );
      blackPigCon.add(blackPig);
    } else if (categories.value === 'white') {
      var whitePig = new WhitePig(
        name.value,
        breed.value,
        height.valueAsNumber,
        weight.valueAsNumber,
        dynamic.valueAsNumber,
        personality.value
      );
      whitePigCon.add(whitePig);
    } else if (categories.value === 'grey') {
      var greyPig = new GreyPig(
        name.value,
        breed.value,
        height.valueAsNumber,
        weight.valueAsNumber,
        dynamic.valueAsNumber,
        personality.value
      );
      greyPigCon.add(greyPig);
    } else {
      var chestnutPig = new ChestnutPig(
        name.value,
        breed.value,
        height.valueAsNumber,
        weight.valueAsNumber,
        dynamic.value,
        personality.value
      );
      chestnutPigCon.add(chestnutPig);
    }

    restartTable();
  }
});

function deleteAllrow() {
  var length = table.rows.length;
  for (let i = 1; i < length; i++) {
    table.deleteRow(1);
  }
}

function deletedata(str: String, category: String) {
  let i = Number(str.replace(/^\D+/g, ''));
  let confirmAction = confirm(
    'Are you sure to delete this little cute pig UwU?'
  );
  if (confirmAction) {
    document.getElementById('row' + i.toString())?.remove();
    if (category === 'Black') {
      blackPigCon.remove(i);
    } else if (category === 'White') {
      whitePigCon.remove(i - blackPigCon.pig.length);
    } else if (category === 'Grey') {
      greyPigCon.remove(i - blackPigCon.pig.length - whitePigCon.pig.length);
    } else {
      chestnutPigCon.remove(
        i -
          blackPigCon.pig.length -
          whitePigCon.pig.length -
          greyPigCon.pig.length
      );
    }
    restartTable();
  } else {
  }
}

function comparePig(a: Pig, b: Pig) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function restartTable() {
  deleteAllrow();
  blackPigCon.pig.sort(comparePig);
  whitePigCon.pig.sort(comparePig);
  greyPigCon.pig.sort(comparePig);
  chestnutPigCon.pig.sort(comparePig);
  var num = -1;

  for (let i = 0; i < blackPigCon.pig.length; i++) {
    num++;
    let newRow = table.insertRow(-1);
    newRow.id = 'row' + num.toString();

    // Insert a cell in the row at index 0
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);

    newCell0.innerHTML = blackPigCon.get(i).name;
    newCell1.innerHTML = 'Black';
    newCell2.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
    newCell2.classList.add('moreInfo' + num.toString());
    newCell3.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
    newCell3.classList.add('delete' + num.toString());

    newCell2.addEventListener('click', function () {
      change(newCell2.className, 'Black');
    });

    newCell3.addEventListener('click', function () {
      deletedata(newCell3.className, 'Black');
    });
  }

  for (let i = 0; i < whitePigCon.pig.length; i++) {
    num++;
    let newRow = table.insertRow(-1);
    newRow.id = 'row' + num.toString();

    // Insert a cell in the row at index 0
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);

    newCell0.innerHTML = whitePigCon.get(i).name;
    newCell1.innerHTML = 'White';
    newCell2.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
    newCell2.classList.add('moreInfo' + num.toString());
    newCell3.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
    newCell3.classList.add('delete' + num.toString());

    newCell2.addEventListener('click', function () {
      change(newCell2.className, 'White');
    });

    newCell3.addEventListener('click', function () {
      deletedata(newCell3.className, 'White');
    });
  }

  for (let i = 0; i < greyPigCon.pig.length; i++) {
    num++;
    let newRow = table.insertRow(-1);
    newRow.id = 'row' + num.toString();

    // Insert a cell in the row at index 0
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);

    newCell0.innerHTML = greyPigCon.get(i).name;
    newCell1.innerHTML = 'Grey';
    newCell2.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
    newCell2.classList.add('moreInfo' + num.toString());
    newCell3.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
    newCell3.classList.add('delete' + num.toString());

    newCell2.addEventListener('click', function () {
      change(newCell2.className, 'Grey');
    });

    newCell3.addEventListener('click', function () {
      deletedata(newCell3.className, 'Grey');
    });
  }

  for (let i = 0; i < chestnutPigCon.pig.length; i++) {
    num++;
    let newRow = table.insertRow(-1);
    newRow.id = 'row' + num.toString();

    // Insert a cell in the row at index 0
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);

    newCell0.innerHTML = chestnutPigCon.get(i).name;
    newCell1.innerHTML = 'Chestnut';
    newCell2.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
    newCell2.classList.add('moreInfo' + num.toString());
    newCell3.innerHTML =
      "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
    newCell3.classList.add('delete' + num.toString());

    newCell2.addEventListener('click', function () {
      change(newCell2.className, 'Chestnut');
    });

    newCell3.addEventListener('click', function () {
      deletedata(newCell3.className, 'Chestnut');
    });
  }
}

function change(str: String, categories: String) {
  let i = Number(str.replace(/^\D+/g, ''));

  let moreInfoData = document.getElementsByClassName('more-info-data');
  let moreInfoDynamic = document.getElementsByClassName('more-info-dynamic');

  if (categories === 'Black') {
    var blackPig = blackPigCon.get(i);

    moreInfoData[0].innerHTML = blackPig.name;
    moreInfoData[1].innerHTML = blackPig.breed;
    moreInfoData[2].innerHTML = blackPig.height + ' Hocks';
    moreInfoData[3].innerHTML = blackPig.weight + ' Stones';
    moreInfoData[5].innerHTML = blackPig.personality;

    moreInfoData[4].innerHTML = blackPig.strength.toString();
    moreInfoDynamic[0].innerHTML = 'Strength';
  }

  if (categories === 'White') {
    var whitePig = whitePigCon.get(i - blackPigCon.pig.length);

    moreInfoData[0].innerHTML = whitePig.name;
    moreInfoData[1].innerHTML = whitePig.breed;
    moreInfoData[2].innerHTML = whitePig.height + ' Hocks';
    moreInfoData[3].innerHTML = whitePig.weight + ' Stones';
    moreInfoData[5].innerHTML = whitePig.personality;

    moreInfoData[4].innerHTML = whitePig.running.toString();
    moreInfoDynamic[0].innerHTML = 'Running';
  }

  if (categories === 'Grey') {
    var greyPig = greyPigCon.get(
      i - blackPigCon.pig.length - whitePigCon.pig.length
    );

    moreInfoData[0].innerHTML = greyPig.name;
    moreInfoData[1].innerHTML = greyPig.breed;
    moreInfoData[2].innerHTML = greyPig.height + ' Hocks';
    moreInfoData[3].innerHTML = greyPig.weight + ' Stones';
    moreInfoData[5].innerHTML = greyPig.personality;

    moreInfoData[4].innerHTML = greyPig.swimming.toString();
    moreInfoDynamic[0].innerHTML = 'Swimming';
  }

  if (categories === 'Chestnut') {
    var chestnutPig = chestnutPigCon.get(
      i -
        blackPigCon.pig.length -
        whitePigCon.pig.length -
        greyPigCon.pig.length
    );

    moreInfoData[0].innerHTML = chestnutPig.name;
    moreInfoData[1].innerHTML = chestnutPig.breed;
    moreInfoData[2].innerHTML = chestnutPig.height + ' Hocks';
    moreInfoData[3].innerHTML = chestnutPig.weight + ' Stones';
    moreInfoData[5].innerHTML = chestnutPig.personality;

    moreInfoData[4].innerHTML = chestnutPig.language;
    moreInfoDynamic[0].innerHTML = 'Language';
  }
}

categories.addEventListener('change', function () {
  var options = document.querySelectorAll('#breed option');
  options.forEach((o) => o.remove());
  if (categories.value === 'white') {
    dynamic.type = 'range';
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
    dynamic.type = 'range';
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
    dynamic.type = 'range';
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
