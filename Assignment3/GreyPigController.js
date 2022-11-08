"use strict";
exports.__esModule = true;
exports.GreyPigController = void 0;
var GreyPigController = /** @class */ (function () {
    function GreyPigController() {
        this.pig = [];
    }
    GreyPigController.prototype.add = function (p) {
        this.pig.push(p);
        localStorage.pigArray = JSON.stringify(this.pig);
    };
    GreyPigController.prototype.getAll = function () {
        return JSON.parse(localStorage.pigArray);
    };
    GreyPigController.prototype.get = function (index) {
        return this.pig[index];
    };
    GreyPigController.prototype.remove = function (index) {
        this.pig.splice(index, 1);
        localStorage.pigArray = JSON.stringify(this.pig);
    };
    return GreyPigController;
}());
exports.GreyPigController = GreyPigController;
