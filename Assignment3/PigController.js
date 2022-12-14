"use strict";
exports.__esModule = true;
exports.PigController = void 0;
var PigController = /** @class */ (function () {
    function PigController() {
        this.pig = [];
    }
    PigController.prototype.add = function (p) {
        this.pig.push(p);
        localStorage.pigArray = JSON.stringify(this.pig);
    };
    PigController.prototype.getAll = function () {
        return JSON.parse(localStorage.pigArray);
    };
    PigController.prototype.get = function (index) {
        return this.pig[index];
    };
    PigController.prototype.remove = function (index) {
        this.pig.splice(index, 1);
        localStorage.pigArray = JSON.stringify(this.pig);
    };
    return PigController;
}());
exports.PigController = PigController;
