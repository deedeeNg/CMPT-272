"use strict";
exports.__esModule = true;
exports.Pig = void 0;
var categoriesEnum;
(function (categoriesEnum) {
    categoriesEnum[categoriesEnum["Grey"] = 0] = "Grey";
    categoriesEnum[categoriesEnum["Chestnut"] = 1] = "Chestnut";
    categoriesEnum[categoriesEnum["White"] = 2] = "White";
    categoriesEnum[categoriesEnum["Black"] = 3] = "Black";
})(categoriesEnum || (categoriesEnum = {}));
var Pig = /** @class */ (function () {
    function Pig(Name, Breed, Height, Weight, Personality) {
        this.Name = Name;
        this.Breed = Breed;
        this.Height = Height;
        this.Weight = Weight;
        this.Personality = Personality;
        this.name = Name;
        this.breed = Breed;
        this.height = Height;
        this.weight = Weight;
        this.personality = Personality;
        Pig.num++;
    }
    Pig.num = 0;
    return Pig;
}());
exports.Pig = Pig;
