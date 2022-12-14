"use strict";
exports.__esModule = true;
exports.ChestnutPigController = void 0;
var ChestnutPigController = /** @class */ (function () {
    function ChestnutPigController() {
        this.pig = [];
    }
    ChestnutPigController.prototype.add = function (p) {
        this.pig.push(p);
        localStorage.ChestnutpigArray = JSON.stringify(this.pig);
    };
    ChestnutPigController.prototype.getAll = function () {
        return JSON.parse(localStorage.ChestnutpigArray);
    };
    ChestnutPigController.prototype.get = function (index) {
        return this.pig[index];
    };
    ChestnutPigController.prototype.remove = function (index) {
        this.pig.splice(index, 1);
        localStorage.ChestnutpigArray = JSON.stringify(this.pig);
    };
    return ChestnutPigController;
}());
exports.ChestnutPigController = ChestnutPigController;
