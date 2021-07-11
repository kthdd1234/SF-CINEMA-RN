"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var BottomTab_1 = require("../../BottomTab");
var mapReduxStateToReactProps = function (_a) {
    var userReducer = _a.userReducer;
    var isLogin = userReducer.isLogin, profile = userReducer.profile;
    return {
        isLogin: isLogin,
        profile: profile
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps)(BottomTab_1["default"]);
