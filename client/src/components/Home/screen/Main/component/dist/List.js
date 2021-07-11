"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var native_1 = require("@react-navigation/native");
var native_2 = require("styled-components/native");
var List = function (_a) {
    var movieList = _a.movieList;
    var push = native_1.useNavigation().push;
    var onPress = function (movie) {
        var title = movie.title;
        push('Movie', {
            headerTitle: title,
            movie: movie
        });
    };
    return (react_1["default"].createElement(StyledList, { data: movieList, renderItem: function (_a) {
            var movie = _a.item;
            var backDrop = movie.backDrop, title = movie.title;
            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onPress(movie); } },
                react_1["default"].createElement(Content, null,
                    react_1["default"].createElement(BackDrop, { source: {
                            uri: "https://image.tmdb.org/t/p/original" + backDrop
                        } }),
                    react_1["default"].createElement(Title, null, title))));
        }, keyExtractor: function (_a) {
            var title = _a.title;
            return title;
        } }));
};
var View = native_2["default"].View, Image = native_2["default"].Image, Text = native_2["default"].Text;
var StyledList = native_2["default"](react_native_1.FlatList)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  flex-wrap: wrap;\n"], ["\n  flex-direction: row;\n  flex-wrap: wrap;\n"])));
var Content = View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: ", ";\n  margin-bottom: 15px;\n"], ["\n  margin-right: ", ";\n  margin-bottom: 15px;\n"])), react_native_responsive_screen_1.widthPercentageToDP('1%'));
var BackDrop = Image(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), react_native_responsive_screen_1.widthPercentageToDP('47%'), react_native_responsive_screen_1.heightPercentageToDP('17%'));
var Title = Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n"], ["\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n"])));
exports["default"] = List;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
