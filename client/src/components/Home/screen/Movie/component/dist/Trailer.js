"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_youtube_iframe_1 = require("react-native-youtube-iframe");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var SCREEN_WIDTH = react_native_1.Dimensions.get('window').width;
var Trailer = function (_a) {
    var videoId = _a.videoId, playing = _a.playing;
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.StatusBar, { hidden: true }),
        react_1["default"].createElement(react_native_youtube_iframe_1["default"], { width: SCREEN_WIDTH, height: react_native_responsive_screen_1.heightPercentageToDP('50%'), play: playing, videoId: videoId, webViewProps: {
                injectedJavaScript: "\n            var element = document.getElementsByClassName('container')[0];\n            element.style.position = 'unset';\n            element.style.paddingBottom = 'unset';\n            true; "
            } })));
};
exports["default"] = Trailer;
