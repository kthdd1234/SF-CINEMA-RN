"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Save_1 = require("../../components/User/screen/Save");
var mapReduxStateToReactProps = function (_a) {
    var userReducer = _a.userReducer;
    var profile = userReducer.profile;
    return {
        profile: profile
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps)(Save_1["default"]);
