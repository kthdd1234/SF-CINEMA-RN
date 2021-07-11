"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var icon_1 = require("../../Movie/icon");
var native_1 = require("styled-components/native");
var List_1 = require("./List");
var MovieList = function (_a) {
    var item = _a.item;
    var _b = react_1.useState(false), viewmore = _b[0], setViewmore = _b[1];
    var listTitle = item.listTitle, icon = item.icon, movieList = item.movieList;
    var viewmoreTitleStyle = style.viewmoreTitleStyle, viewmoreButtonStyle = style.viewmoreButtonStyle;
    return (react_1["default"].createElement(StyledMovieList, null, movieList.length ? (react_1["default"].createElement(ListContainer, null,
        react_1["default"].createElement(ListTitle, null,
            react_1["default"].createElement(Title, null,
                icon,
                " ",
                listTitle)),
        react_1["default"].createElement(List_1["default"], { movieList: viewmore ? movieList : movieList.slice(0, 4) }),
        viewmore ? null : (react_1["default"].createElement(Viewmore, { icon: icon_1.Down, title: '\uB354\uBCF4\uAE30', titleStyle: viewmoreTitleStyle, buttonStyle: viewmoreButtonStyle, onPress: function () { return setViewmore(true); } })))) : (react_1["default"].createElement(Loding, { size: 40, color: 'red' }))));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledMovieList = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 15px;\n  padding-bottom: 30px;\n  padding-left: 10px;\n"], ["\n  padding-top: 15px;\n  padding-bottom: 30px;\n  padding-left: 10px;\n"])));
var ListContainer = View(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var ListTitle = Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  color: white;\n  font-weight: bold;\n"], ["\n  margin-bottom: 10px;\n  color: white;\n  font-weight: bold;\n"])));
var Title = Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 18px;\n"], ["\n  font-size: 18px;\n"])));
var Viewmore = native_1["default"](react_native_elements_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Loding = native_1["default"](react_native_1.ActivityIndicator)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 100px;\n"], ["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 100px;\n"])));
var style = react_native_1.StyleSheet.create({
    viewmoreTitleStyle: {
        marginLeft: 5,
        fontSize: 14,
        color: 'gray'
    },
    viewmoreButtonStyle: {
        backgroundColor: 'rgb(20, 21, 23)'
    }
});
exports["default"] = MovieList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
