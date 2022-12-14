"use strict";
exports.__esModule = true;
exports.BlackPigController = void 0;
var BlackPigController = /** @class */ (function () {
    function BlackPigController() {
        this.pig = [];
    }
    BlackPigController.prototype.add = function (p) {
        this.pig.push(p);
        localStorage.BlackPigArray = JSON.stringify(this.pig);
    };
    BlackPigController.prototype.getAll = function () {
        return JSON.parse(localStorage.BlackpigArray);
    };
    BlackPigController.prototype.get = function (index) {
        return this.pig[index];
    };
    BlackPigController.prototype.remove = function (index) {
        this.pig.splice(index, 1);
        localStorage.BlackPigArray = JSON.stringify(this.pig);
    };
    return BlackPigController;
}());
exports.BlackPigController = BlackPigController;
