"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var icon_1 = require("./icon");
var List_1 = require("../../Home/screen/Main/component/List");
var Empty_1 = require("./component/Empty");
var native_1 = require("styled-components/native");
var Like = function (_a) {
    var profile = _a.profile;
    var likedMovie = profile.likedMovie;
    return (react_1["default"].createElement(StyledLike, null, likedMovie.length ? (react_1["default"].createElement(react_native_1.FlatList, { data: null, renderItem: null, ListEmptyComponent: react_1["default"].createElement(List_1["default"], { movieList: likedMovie }) })) : (react_1["default"].createElement(Empty_1["default"], { icon: react_1["default"].createElement(icon_1.Like2Icon, { size: 80 }), value: '\uC544\uC9C1 \uC7AC\uBC0C\uC5B4\uC694\uB97C \uB204\uB978 \uC791\uD488\uC774 \uC5C6\uC5B4\uC694.' }))));
};
var View = native_1["default"].View;
var StyledLike = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  background-color: rgb(20, 21, 23);\n  padding-top: 10px;\n  padding-left: 10px;\n"], ["\n  flex: 1;\n  background-color: rgb(20, 21, 23);\n  padding-top: 10px;\n  padding-left: 10px;\n"])));
exports["default"] = Like;
var templateObject_1;
