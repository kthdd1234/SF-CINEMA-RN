"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var Empty = function (_a) {
    var icon = _a.icon, value = _a.value;
    return (react_1["default"].createElement(StyledEmpty, null,
        icon,
        react_1["default"].createElement(EmptyValue, null, value)));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledEmpty = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"])));
var EmptyValue = Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 15px;\n  font-size: 18px;\n  color: srgb(48, 47, 47);\n"], ["\n  margin-top: 15px;\n  font-size: 18px;\n  color: srgb(48, 47, 47);\n"])));
exports["default"] = Empty;
var templateObject_1, templateObject_2;
