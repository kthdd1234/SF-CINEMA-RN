"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Keywords_1 = require("../../components/Search/screen/component/Keywords");
var mapReduxStateToReactProps = function (_a) {
    var searchReducer = _a.searchReducer;
    var searchResult = searchReducer.searchResult;
    return {
        searchResult: searchResult
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps)(Keywords_1["default"]);
