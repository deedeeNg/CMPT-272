"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChestnutPig = void 0;
var PigModel_1 = require("./PigModel");
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(n, b, h, w, s, p) {
        var _this = _super.call(this, n, b, h, w, p) || this;
        _this.language = s;
        _this.category = PigModel_1.categoriesEnum.Chestnut;
        return _this;
    }
    return ChestnutPig;
}(PigModel_1.Pig));
exports.ChestnutPig = ChestnutPig;
