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
var native_1 = require("@react-navigation/native");
var react_native_elements_1 = require("react-native-elements");
var request_1 = require("../../../Home/screen/Movie/request");
var styled_components_1 = require("styled-components");
var Item = function (_a) {
    var item = _a.item;
    var navigate = native_1.useNavigation().navigate;
    var id = item.id, title = item.title, backDrop = item.backDrop;
    var source = {
        uri: "https://image.tmdb.org/t/p/original" + backDrop
    };
    var onPressKeyword = function () { return __awaiter(void 0, void 0, void 0, function () {
        var movie;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request_1.contents(id)];
                case 1:
                    movie = _a.sent();
                    navigate('Movie', {
                        headerTitle: title,
                        movie: movie
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var btnStyle = styles.btnStyle, titleStyle = styles.titleStyle;
    return (react_1["default"].createElement(react_native_elements_1.Button, { title: title, icon: react_1["default"].createElement(BackDrop, { source: source }), buttonStyle: btnStyle, titleStyle: titleStyle, onPress: onPressKeyword }));
};
var BackDrop = styled_components_1["default"](react_native_1.Image)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 120px;\n  height: 75px;\n  margin-right: 10px;\n  resize-mode: contain;\n"], ["\n  width: 120px;\n  height: 75px;\n  margin-right: 10px;\n  resize-mode: contain;\n"])));
var styles = react_native_1.StyleSheet.create({
    btnStyle: {
        paddingLeft: 0,
        backgroundColor: 'rgb(20, 21, 23)',
        borderBottomColor: 'srgb(48, 47, 47)',
        borderBottomWidth: 1
    },
    titleStyle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 17,
        color: 'whitesmoke'
    }
});
exports["default"] = Item;
var templateObject_1;
