"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var Movie_1 = require("../../components/Home/screen/Movie/Movie");
var mapReduxStateToReactProps = function (_a) {
    var userReducer = _a.userReducer;
    var isLogin = userReducer.isLogin, profile = userReducer.profile;
    return {
        isLogin: isLogin,
        profile: profile
    };
};
var mapReduxDispatchToReactProps = function (dispatch) {
    return {
        updateProfile: function (profile) {
            dispatch(actions_1.setProfile(profile));
        }
    };
};
exports["default"] = react_redux_1.connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Movie_1["default"]);
