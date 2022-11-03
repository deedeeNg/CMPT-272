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
var categories = document.getElementById('category');
var dynamicLabel = document.getElementById('dynamic-label');
var dynamic = document.getElementById('dynamic');
var table = document.getElementById('table1');
document.getElementById('testBtn').addEventListener('click', function () {
    var newRow = table.insertRow(-1);
    // Insert a cell in the row at index 0
    var newCell0 = newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    var newCell2 = newRow.insertCell(2);
    var newCell3 = newRow.insertCell(3);
    newCell0.innerHTML = 'Pork';
    newCell1.innerHTML = 'aberico';
    newCell2.innerHTML = 'More Info';
    newCell3.innerHTML = 'Delete';
});
document.getElementById('add').addEventListener('click', function () {
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
    // Insert a cell in the row at index 0
    var newCell0 = newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    var newCell2 = newRow.insertCell(2);
    var newCell3 = newRow.insertCell(3);
    newCell0.innerHTML = name.value;
    newCell1.innerHTML = categories.value;
    newCell2.innerHTML = 'More Info';
    newCell3.innerHTML = 'Delete';
});
categories.addEventListener('change', function () {
    if (categories.value === 'white') {
        dynamic.type = 'number';
        dynamicLabel.textContent = 'Running';
    }
    else if (categories.value === 'black') {
        dynamic.type = 'number';
        dynamicLabel.textContent = 'Strength';
    }
    else if (categories.value === 'grey') {
        dynamic.type = 'number';
        dynamicLabel.textContent = 'Swimming';
    }
    else {
        dynamic.type = 'text';
        dynamicLabel.textContent = 'Language';
    }
});
