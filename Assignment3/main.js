"use strict";
exports.__esModule = true;
var PigController_1 = require("./PigController");
var PigModel_1 = require("./PigModel");
var pc = new PigController_1.PigController();
document.getElementById('add').addEventListener('click', function () {
    var p = new PigModel_1.Pig('Pork chop', 'Porkbelly', 20, 20, 'Funny');
    pc.add(p);
});
