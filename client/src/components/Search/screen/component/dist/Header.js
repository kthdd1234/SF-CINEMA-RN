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
var icon_1 = require("../icon");
var request_1 = require("../request");
var data_1 = require("../data");
var native_1 = require("styled-components/native");
var Header = function (_a) {
    var setSearch = _a.setSearch, searchResult = _a.searchResult;
    react_1.useEffect(function () {
        searchResult(data_1.recommendKeywordList);
    }, []);
    var onChangeText = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!value) return [3 /*break*/, 1];
                    setSearch(false);
                    searchResult(data_1.recommendKeywordList);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, request_1.search(value)];
                case 2:
                    data = _a.sent();
                    setSearch(true);
                    searchResult(data);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var leftIconContainerStyle = styles.leftIconContainerStyle, containerStyle = styles.containerStyle, inputContainerStyle = styles.inputContainerStyle, inputStyle = styles.inputStyle;
    return (react_1["default"].createElement(SearchBar, { autoFocus: true, selectionColor: 'red', placeholder: '\uC81C\uBAA9, \uAC10\uB3C5, \uBC30\uC6B0\uB85C \uAC80\uC0C9', leftIcon: icon_1.SearchIcon, containerStyle: containerStyle, leftIconContainerStyle: leftIconContainerStyle, inputContainerStyle: inputContainerStyle, inputStyle: inputStyle, onChangeText: onChangeText }));
};
var SearchBar = native_1["default"](react_native_elements_1.Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var styles = react_native_1.StyleSheet.create({
    containerStyle: {
        top: 5
    },
    leftIconContainerStyle: {
        color: 'white'
    },
    inputContainerStyle: {
        borderBottomColor: 'red',
        marginTop: 5,
        borderBottomWidth: 2
    },
    inputStyle: {
        color: 'white',
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 17
    }
});
exports["default"] = Header;
var templateObject_1;
