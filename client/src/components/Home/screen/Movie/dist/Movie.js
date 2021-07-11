"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var icon_1 = require("./icon");
var component_1 = require("./component");
var native_1 = require("styled-components/native");
;
var Movie = function (_a) {
    var route = _a.route, isLogin = _a.isLogin, profile = _a.profile, updateProfile = _a.updateProfile;
    var _b = react_1.useState(true), viewmore = _b[0], setViewmore = _b[1];
    var _c = react_1.useState(3), numberOfLines = _c[0], setNumberOfLines = _c[1];
    var _d = react_1.useState(false), playing = _d[0], setPlaying = _d[1];
    var movie = route.params.movie;
    var id = movie.id, title = movie.title, genre = movie.genre, plot = movie.plot, videoId = movie.videoId, backDrop = movie.backDrop, userRating = movie.userRating, numberOfLikes = movie.numberOfLikes, ratingGrade = movie.ratingGrade, runtime = movie.runtime, director = movie.director, actors = movie.actors, releaseDate = movie.releaseDate, nation = movie.nation;
    var viewmoreTitle = styles.viewmoreTitle, viewmoreBtn = styles.viewmoreBtn;
    react_1.useEffect(function () {
        plot.length < 100 ? setViewmore(false) : null;
    }, []);
    var onPressViewmore = function () {
        setNumberOfLines(20);
        setViewmore(false);
    };
    return (react_1["default"].createElement(StyledMovie, { ListHeaderComponent: playing ? (react_1["default"].createElement(component_1.Trailer, { videoId: videoId, playing: playing })) : (react_1["default"].createElement(component_1.BackDrop, { backDrop: backDrop, userRating: userRating, numberOfLikes: numberOfLikes })), ListEmptyComponent: react_1["default"].createElement(MovieInfo, null,
            react_1["default"].createElement(Title, null, title),
            react_1["default"].createElement(component_1.SubTitle, { ratingGrade: ratingGrade, runtime: runtime }),
            react_1["default"].createElement(component_1.ActionBtns, { isLogin: isLogin, profile: profile, movieId: id, setPlaying: setPlaying, updateProfile: updateProfile }),
            react_1["default"].createElement(DividingLine, null),
            react_1["default"].createElement(Plot, { numberOfLines: numberOfLines, ellipsizeMode: 'tail' }, plot),
            viewmore ? (react_1["default"].createElement(Viewmore, { icon: icon_1.Down, title: '\uB354\uBCF4\uAE30', titleStyle: viewmoreTitle, buttonStyle: viewmoreBtn, onPress: onPressViewmore })) : null,
            react_1["default"].createElement(component_1.Spec, { director: director, actors: actors, genre: genre, releaseDate: releaseDate, nation: nation }),
            react_1["default"].createElement(DividingLine, null)), ListFooterComponent: react_1["default"].createElement(component_1.SimilarMovies, { genre: genre }) }));
};
var View = native_1["default"].View, Text = native_1["default"].Text;
var StyledMovie = native_1["default"](react_native_1.FlatList)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  background-color: rgb(20, 21, 23);\n"], ["\n  flex: 1;\n  background-color: rgb(20, 21, 23);\n"])));
var MovieInfo = View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px;\n"], ["\n  margin: 10px;\n"])));
var Title = Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 21px;\n  font-weight: bold;\n  color: whitesmoke;\n"], ["\n  font-size: 21px;\n  font-weight: bold;\n  color: whitesmoke;\n"])));
var Plot = Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 10px;\n  color: darkgray;\n  font-size: 15px;\n  line-height: 23px;\n"], ["\n  margin-top: 10px;\n  color: darkgray;\n  font-size: 15px;\n  line-height: 23px;\n"])));
var Viewmore = native_1["default"](react_native_elements_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var DividingLine = native_1["default"](react_native_elements_1.Divider)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 1px;\n  background-color: srgb(48, 47, 47);\n"], ["\n  height: 1px;\n  background-color: srgb(48, 47, 47);\n"])));
var styles = react_native_1.StyleSheet.create({
    viewmoreTitle: {
        marginLeft: 3,
        fontSize: 14,
        color: 'gray'
    },
    viewmoreBtn: {
        backgroundColor: 'transparent'
    }
});
exports["default"] = Movie;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
