"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var SubTitle = function (_a) {
    var ratingGrade = _a.ratingGrade, runtime = _a.runtime;
    return (react_1["default"].createElement(StyledSubTitle, null,
        react_1["default"].createElement(Info, null, ratingGrade),
        react_1["default"].createElement(Dot, null, "\u2022"),
        react_1["default"].createElement(Info, null, runtime)));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledSubTitle = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n"], ["\n  flex-direction: row;\n"])));
var Info = Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: gray;\n"], ["\n  color: gray;\n"])));
var Dot = Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 5px;\n  margin-left: 5px;\n  color: gray;\n"], ["\n  margin-right: 5px;\n  margin-left: 5px;\n  color: gray;\n"])));
exports["default"] = SubTitle;
var templateObject_1, templateObject_2, templateObject_3;
