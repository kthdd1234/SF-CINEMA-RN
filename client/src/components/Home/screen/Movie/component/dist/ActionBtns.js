"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var request_1 = require("../request");
var icon_1 = require("../icon");
var native_1 = require("styled-components/native");
var alertMessage = function (message) {
    return react_native_1.Alert.alert(null, message, [
        {
            text: '확인',
            style: 'destructive'
        },
    ], { cancelable: true });
};
var ActionBtns = function (_a) {
    var isLogin = _a.isLogin, movieId = _a.movieId, profile = _a.profile, setPlaying = _a.setPlaying, updateProfile = _a.updateProfile;
    var _b = react_1.useState(false), saveVisible = _b[0], setSaveVisible = _b[1];
    var _c = react_1.useState(false), likeVisible = _c[0], setLikeVisible = _c[1];
    var actionBtn = styles.actionBtn, actionBtnFill = styles.actionBtnFill, actionBtnOut = styles.actionBtnOut, actionBtnTitle = styles.actionBtnTitle, settingBtn = styles.settingBtn, settingContainer = styles.settingContainer;
    react_1.useEffect(function () {
        if (isLogin) {
            var savedMovie = profile.savedMovie, likedMovie = profile.likedMovie;
            var data = [
                { movies: savedMovie, setVisible: setSaveVisible },
                { movies: likedMovie, setVisible: setLikeVisible },
            ];
            data.forEach(function (_a) {
                var movies = _a.movies, setVisible = _a.setVisible;
                movies.some(function (_a) {
                    var dataId = _a.id;
                    if (dataId === movieId) {
                        setVisible(true);
                    }
                });
            });
        }
    }, []);
    var onPressSaveBtn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userId, data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!isLogin) return [3 /*break*/, 1];
                    alertMessage('로그인을 하여 해당 작품을 저장해보세요 :)');
                    return [3 /*break*/, 6];
                case 1:
                    userId = profile.id;
                    if (!!saveVisible) return [3 /*break*/, 3];
                    return [4 /*yield*/, request_1.saveCompleted(userId, movieId)];
                case 2:
                    data = _a.sent();
                    updateProfile(data);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, request_1.saveCancel(userId, movieId)];
                case 4:
                    data = _a.sent();
                    updateProfile(data);
                    _a.label = 5;
                case 5:
                    setSaveVisible(!saveVisible);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var onPressLikeBtn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userId, data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!isLogin) return [3 /*break*/, 1];
                    alertMessage('로그인을 하여 해당 작품에 대한 평가를 내려주세요 :)');
                    return [3 /*break*/, 6];
                case 1:
                    userId = profile.id;
                    if (!!likeVisible) return [3 /*break*/, 3];
                    return [4 /*yield*/, request_1.likeCompleted(userId, movieId)];
                case 2:
                    data = _a.sent();
                    updateProfile(data);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, request_1.likeCancel(userId, movieId)];
                case 4:
                    data = _a.sent();
                    updateProfile(data);
                    _a.label = 5;
                case 5:
                    setLikeVisible(!likeVisible);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var onPressTrailerBtn = function () { return setPlaying(true); };
    var onPressSettingBtn = function () { return console.log('onPress Setting Btn!'); };
    var actionBtnList = [
        {
            icon: saveVisible ? react_1["default"].createElement(icon_1.CheckIcon, null) : react_1["default"].createElement(icon_1.PlusIcon, null),
            title: '저장하기',
            titleStyle: saveVisible ? actionBtnFill : actionBtnOut,
            onPress: onPressSaveBtn
        },
        {
            icon: likeVisible ? react_1["default"].createElement(icon_1.LikeFillIcon, null) : react_1["default"].createElement(icon_1.LikeIcon, { size: 23 }),
            title: '재밌어요',
            titleStyle: likeVisible ? actionBtnFill : actionBtnOut,
            onPress: onPressLikeBtn
        },
        {
            icon: react_1["default"].createElement(icon_1.PlayIcon, null),
            title: '예고편 보기',
            titleStyle: actionBtnTitle,
            onPress: onPressTrailerBtn
        },
        {
            icon: react_1["default"].createElement(icon_1.DotsVerticalIcon, null),
            title: '',
            titleStyle: null,
            buttonStyle: settingBtn,
            onPress: onPressSettingBtn
        },
    ];
    return (react_1["default"].createElement(StyledActionBtn, null, actionBtnList.map(function (_a, btnIdx) {
        var icon = _a.icon, title = _a.title, titleStyle = _a.titleStyle, onPress = _a.onPress;
        return (react_1["default"].createElement(react_native_elements_1.Button, { key: btnIdx, icon: icon, title: title, titleStyle: titleStyle, buttonStyle: title ? actionBtn : settingBtn, containerStyle: !title ? settingContainer : null, onPress: onPress }));
    })));
};
var styles = react_native_1.StyleSheet.create({
    actionBtn: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(20, 21, 23)'
    },
    actionBtnTitle: {
        fontSize: 15
    },
    actionBtnFill: {
        fontSize: 16,
        color: 'tomato'
    },
    actionBtnout: {
        fontSize: 15,
        color: 'whitesmoke'
    },
    settingBtn: {
        backgroundColor: 'transparent'
    },
    settingContainer: {
        flex: 1,
        flexDirection: 'row-reverse'
    }
});
var View = native_1["default"].View;
var StyledActionBtn = View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  margin-top: 10px;\n"], ["\n  flex-direction: row;\n  margin-top: 10px;\n"])));
exports["default"] = ActionBtns;
var templateObject_1;
