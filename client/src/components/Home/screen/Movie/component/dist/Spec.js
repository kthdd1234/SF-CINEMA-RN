"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var Spec = function (_a) {
    var director = _a.director, actors = _a.actors, genre = _a.genre, releaseDate = _a.releaseDate, nation = _a.nation;
    var spec = [
        { desc: "\uAC10\uB3C5: " + director },
        { desc: "\uCD9C\uC5F0: " + actors },
        {
            desc: "\uAC1C\uC694: " + genre + " / " + nation + " / " + String(releaseDate).slice(0, 4) + "\uB144"
        },
    ];
    return (react_1["default"].createElement(StyledSpec, null, spec.map(function (_a, descIdx) {
        var desc = _a.desc;
        return (react_1["default"].createElement(Desc, { key: descIdx, numberOfLines: 1 }, desc));
    })));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledSpec = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"], ["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"])));
var Desc = Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 3px;\n  color: gray;\n"], ["\n  margin-bottom: 3px;\n  color: gray;\n"])));
exports["default"] = Spec;
var templateObject_1, templateObject_2;
