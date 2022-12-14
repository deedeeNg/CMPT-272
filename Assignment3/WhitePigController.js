"use strict";
exports.__esModule = true;
exports.WhitePigController = void 0;
var WhitePigController = /** @class */ (function () {
    function WhitePigController() {
        this.pig = [];
    }
    WhitePigController.prototype.add = function (p) {
        this.pig.push(p);
        localStorage.WhitepigArray = JSON.stringify(this.pig);
    };
    WhitePigController.prototype.getAll = function () {
        return JSON.parse(localStorage.WhitepigArray);
    };
    WhitePigController.prototype.get = function (index) {
        return this.pig[index];
    };
    WhitePigController.prototype.remove = function (index) {
        this.pig.splice(index, 1);
        localStorage.WhitepigArray = JSON.stringify(this.pig);
    };
    return WhitePigController;
}());
exports.WhitePigController = WhitePigController;
