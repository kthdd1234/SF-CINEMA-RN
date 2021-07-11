"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Search_1 = require("../../components/Search/screen/Search");
var mapReduxStateToReactProps = function (_a) {
    var searchReducer = _a.searchReducer;
    var searching = searchReducer.searching, searchResult = searchReducer.searchResult;
    return {
        searching: searching,
        searchResult: searchResult
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps)(Search_1["default"]);
