"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Item_1 = require("./Item");
var native_1 = require("styled-components/native");
var CategoryList = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement(StyledCategoryList, null,
        react_1["default"].createElement(react_native_1.FlatList, { data: data, renderItem: function (_a) {
                var item = _a.item;
                return react_1["default"].createElement(Item_1["default"], { item: item });
            }, keyExtractor: function (item) { return item.key; } })));
};
var View = native_1["default"].View;
var StyledCategoryList = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: rgb(20,21,23);\n"], ["\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: rgb(20,21,23);\n"])));
exports["default"] = CategoryList;
var templateObject_1;
