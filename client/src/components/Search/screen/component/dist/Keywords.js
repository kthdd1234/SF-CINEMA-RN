"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Item_1 = require("./Item");
var styled_components_1 = require("styled-components");
var Keywords = function (_a) {
    var searchResult = _a.searchResult;
    return (react_1["default"].createElement(StyledKeywords, { data: searchResult, renderItem: function (_a) {
            var item = _a.item;
            return react_1["default"].createElement(Item_1["default"], { item: item });
        }, keyExtractor: function (_a) {
            var titleEng = _a.titleEng;
            return titleEng;
        } }));
};
var StyledKeywords = styled_components_1["default"](react_native_1.FlatList)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 25px;\n"], ["\n  margin-bottom: 25px;\n"])));
exports["default"] = Keywords;
var templateObject_1;
