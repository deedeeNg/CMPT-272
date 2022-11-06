"use strict";
exports.__esModule = true;
var PigController_1 = require("./PigController");
var BlackPigModel_1 = require("./BlackPigModel");
var WhitePigModel_1 = require("./WhitePigModel");
var GreyPigModel_1 = require("./GreyPigModel");
var ChestnutPigModel_1 = require("./ChestnutPigModel");
var pc = new PigController_1.PigController();
var name = document.getElementById('name');
var breed = document.getElementById('breed');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var personality = document.getElementById('personality');
var dynamic = document.getElementById('dynamic');
var categories = document.getElementById('category');
var dynamicLabel = document.getElementById('dynamic-label');
var num = -1;
var table = document.getElementById('table1');
document.getElementById('add').addEventListener('click', function () {
    if (name.value.length == 0 ||
        isNaN(Number(height.value)) ||
        isNaN(Number(weight.value)) ||
        personality.value.length == 0) {
        alert('Your input is empty please fill the input');
    }
    else {
        num++;
        if (categories.value === 'black') {
            var blackPig = new BlackPigModel_1.BlackPig(name.value, breed.value, height.valueAsNumber, weight.valueAsNumber, dynamic.valueAsNumber, personality.value);
            pc.add(blackPig);
        }
        else if (categories.value === 'white') {
            var whitePig = new WhitePigModel_1.WhitePig(name.value, breed.value, height.valueAsNumber, weight.valueAsNumber, dynamic.valueAsNumber, personality.value);
            pc.add(whitePig);
        }
        else if (categories.value === 'grey') {
            var greyPig = new GreyPigModel_1.GreyPig(name.value, breed.value, height.valueAsNumber, weight.valueAsNumber, dynamic.valueAsNumber, personality.value);
            pc.add(greyPig);
        }
        else {
            var chestnutPig = new ChestnutPigModel_1.ChestnutPig(name.value, breed.value, height.valueAsNumber, weight.valueAsNumber, dynamic.value, personality.value);
            pc.add(chestnutPig);
        }
        var newRow = table.insertRow(-1);
        newRow.id = 'row' + num.toString();
        // Insert a cell in the row at index 0
        var newCell0 = newRow.insertCell(0);
        var newCell1 = newRow.insertCell(1);
        var newCell2_1 = newRow.insertCell(2);
        var newCell3_1 = newRow.insertCell(3);
        newCell0.innerHTML = name.value;
        newCell1.innerHTML = categories.value;
        newCell2_1.innerHTML =
            "<span style='text-decoration: underline; color: blue; cursor: pointer;'>More Info</span>";
        newCell2_1.classList.add('moreInfo' + num.toString());
        newCell3_1.innerHTML =
            "<span style='text-decoration: underline; color: blue; cursor: pointer;'>Delete</span>";
        newCell3_1.classList.add('delete' + num.toString());
        newCell2_1.addEventListener('click', function () {
            change(newCell2_1.className);
        });
        newCell3_1.addEventListener('click', function () {
            deletedata(newCell3_1.className);
        });
    }
});
function deletedata(str) {
    var _a;
    var i = Number(str.replace(/^\D+/g, ''));
    var confirmAction = confirm('Are you sure to delete this little cute pig UwU?');
    if (confirmAction) {
        (_a = document.getElementById('row' + i.toString())) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else {
    }
}
function change(str) {
    var i = Number(str.replace(/^\D+/g, ''));
    console.log(i);
    var moreInfoData = document.getElementsByClassName('more-info-data');
    var moreInfoDynamic = document.getElementsByClassName('more-info-dynamic');
    var Name = pc.get(i).name;
    var Breed = pc.get(i).breed;
    var Height = pc.get(i).height.toString() + ' Hocks';
    var Weight = pc.get(i).weight.toString() + ' Stones';
    var Personality = pc.get(i).personality;
    moreInfoData[0].innerHTML = Name;
    moreInfoData[1].innerHTML = Breed;
    moreInfoData[2].innerHTML = Height + ' Hocks';
    moreInfoData[3].innerHTML = Weight + ' Stones';
    moreInfoData[5].innerHTML = Personality;
    if (pc.get(i).category == 0) {
        var Swimming = pc.get(i).swimming.toString();
        moreInfoData[4].innerHTML = Swimming;
        moreInfoDynamic[0].innerHTML = 'Swimming';
    }
    else if (pc.get(i).category == 1) {
        var Language = pc.get(i).language;
        moreInfoData[4].innerHTML = Language;
        moreInfoDynamic[0].innerHTML = 'Language';
    }
    else if (pc.get(i).category == 2) {
        var Running = pc.get(i).running.toString();
        moreInfoData[4].innerHTML = Running;
        moreInfoDynamic[0].innerHTML = 'Running';
    }
    else {
        var Strength = pc.get(i).strength.toString();
        moreInfoData[4].innerHTML = Strength;
        moreInfoDynamic[0].innerHTML = 'Strength';
    }
}
categories.addEventListener('change', function () {
    var options = document.querySelectorAll('#breed option');
    options.forEach(function (o) { return o.remove(); });
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
    }
    else if (categories.value === 'black') {
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
    }
    else if (categories.value === 'grey') {
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
    }
    else {
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
