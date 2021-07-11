"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var Login_1 = require("../../components/Auth/screen/Login");
var mapReduxDispatchToReactProps = function (dispatch) {
    return {
        dispatchIsLogin: function (isLogin) {
            dispatch(actions_1.setIsLogin(isLogin));
        },
        dispatchProfile: function (profile) {
            dispatch(actions_1.setProfile(profile));
        }
    };
};
exports["default"] = react_redux_1.connect(null, mapReduxDispatchToReactProps)(Login_1["default"]);
