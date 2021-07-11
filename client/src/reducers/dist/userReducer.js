"use strict";
exports.__esModule = true;
var actions_1 = require("../actions");
var initialState = {
    isLogin: false,
    profile: {}
};
var userReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, isLogin = _a.isLogin, profile = _a.profile;
    switch (type) {
        case actions_1.SET_ISLOGIN:
            return Object.assign({}, state, {
                isLogin: isLogin
            });
        case actions_1.SET_PROFILE:
            return Object.assign({}, state, {
                profile: profile
            });
        default:
            return state;
    }
};
exports["default"] = userReducer;
