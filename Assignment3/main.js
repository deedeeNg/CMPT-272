"use strict";
exports.__esModule = true;
var PigController_1 = require("./PigController");
var PigModel_1 = require("./PigModel");
var pc = new PigController_1.PigController();
var name = document.getElementById('name');
var breed = document.getElementById('breed');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var personality = document.getElementById('personality');
var categories = document.getElementById('category');
var dynamic = document.getElementById('dynamic-label');
document.getElementById('add').addEventListener('click', function () {
    var p = new PigModel_1.Pig(name.value, breed.value, height.valueAsNumber, weight.valueAsNumber, personality.value);
    pc.add(p);
});
categories.addEventListener('change', function () {
    if (categories.value === 'white') {
        dynamic.textContent = 'Running';
    }
    else if (categories.value === 'black') {
        dynamic.textContent = 'Strength';
    }
    else if (categories.value === 'grey') {
        dynamic.textContent = 'Swimming';
    }
    else {
        dynamic.textContent = 'Language';
    }
});
