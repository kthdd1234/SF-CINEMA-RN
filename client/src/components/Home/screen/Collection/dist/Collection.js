"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("styled-components/native");
var List_1 = require("../Main/component/List");
var Collection = function (_a) {
    var route = _a.route;
    var movieList = route.params.movieList;
    return (react_1["default"].createElement(StyledCollection, null,
        react_1["default"].createElement(react_native_1.FlatList, { data: null, renderItem: null, ListEmptyComponent: react_1["default"].createElement(List_1["default"], { movieList: movieList }) })));
};
var View = native_1["default"].View;
var StyledCollection = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  padding-top: 20px;\n  padding-left: 10px;\n  background-color: rgb(20, 21, 23);\n"], ["\n  flex: 1;\n  padding-top: 20px;\n  padding-left: 10px;\n  background-color: rgb(20, 21, 23);\n"])));
exports["default"] = Collection;
var templateObject_1;
