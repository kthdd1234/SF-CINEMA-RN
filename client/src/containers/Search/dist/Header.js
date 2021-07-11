"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var Header_1 = require("../../components/Search/screen/component/Header");
var mapReduxDispatchToReactProps = function (dispatch) {
    return {
        setSearch: function (searching) {
            dispatch(actions_1.setSearching(searching));
        },
        searchResult: function (searchResult) {
            dispatch(actions_1.setSearchResult(searchResult));
        }
    };
};
exports["default"] = react_redux_1.connect(null, mapReduxDispatchToReactProps)(Header_1["default"]);
