"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Like_1 = require("../../components/User/screen/Like");
var mapReduxStateToReactProps = function (_a) {
    var userReducer = _a.userReducer;
    var profile = userReducer.profile;
    return {
        profile: profile
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps)(Like_1["default"]);
