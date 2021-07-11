"use strict";
exports.__esModule = true;
var actions_1 = require("../actions");
var initialState = {
    searching: false,
    searchResult: []
};
var searchReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, searching = _a.searching, searchResult = _a.searchResult;
    switch (type) {
        case actions_1.SET_SEARCHING:
            return Object.assign({}, state, {
                searching: searching
            });
        case actions_1.SET_SEARCH_RESULT:
            return Object.assign({}, state, {
                searchResult: searchResult
            });
        default:
            return state;
    }
};
exports["default"] = searchReducer;
