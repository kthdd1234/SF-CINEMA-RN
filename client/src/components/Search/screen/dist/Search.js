"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var icon_1 = require("./icon");
var Loding_1 = require("./component/Loding");
var Keywords_1 = require("../../../containers/Search/Keywords");
var native_1 = require("styled-components/native");
var Search = function (_a) {
    var searching = _a.searching, searchResult = _a.searchResult;
    var length = searchResult.length;
    return (react_1["default"].createElement(StyledSearch, null, searchResult !== 'Not Found' ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        searching ? (react_1["default"].createElement(Title, null,
            react_1["default"].createElement(icon_1.Search1Icon, { size: 17 }),
            " \uAC80\uC0C9 \uACB0\uACFC ",
            length,
            " \uAC74")) : (react_1["default"].createElement(Title, null,
            react_1["default"].createElement(icon_1.BellsIcon, { size: 17 }),
            " \uCD94\uCC9C \uAC80\uC0C9 \uD0A4\uC6CC\uB4DC")),
        react_1["default"].createElement(Keywords_1["default"], null))) : (react_1["default"].createElement(Loding_1["default"], null))));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledSearch = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  padding: 10px 25px 25px 25px;\n  background-color: rgb(20, 21, 23);\n"], ["\n  flex: 1;\n  padding: 10px 25px 25px 25px;\n  background-color: rgb(20, 21, 23);\n"])));
var Title = Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 17px;\n  font-weight: bold;\n  color: white;\n"], ["\n  font-size: 17px;\n  font-weight: bold;\n  color: white;\n"])));
exports["default"] = Search;
var templateObject_1, templateObject_2;
