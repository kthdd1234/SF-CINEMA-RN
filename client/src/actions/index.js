const SET_ISLOGIN = 'SET_ISLOGIN';
const SET_PROFILE = 'SET_PROFILE';
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
const SET_SEARCHING = 'SET_SEARCHING';

const setIsLogin = (isLogin) => ({
  type: SET_ISLOGIN,
  isLogin: isLogin,
});

const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile: profile,
});

const setSearchResult = (searchResult) => ({
  type: SET_SEARCH_RESULT,
  searchResult: searchResult,
});

const setSearching = (searching) => ({
  type: SET_SEARCHING,
  searching: searching,
});

export { SET_ISLOGIN, SET_PROFILE, SET_SEARCHING, SET_SEARCH_RESULT, setIsLogin, setProfile, setSearchResult, setSearching }


