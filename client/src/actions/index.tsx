const SET_ISLOGIN = 'SET_ISLOGIN';
const SET_PROFILE = 'SET_PROFILE';
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
const SET_SEARCHING = 'SET_SEARCHING';

const setIsLogin = (isLogin: boolean) => ({
  type: SET_ISLOGIN,
  isLogin: isLogin,
});

const setProfile = (profile: object) => ({
  type: SET_PROFILE,
  profile: profile,
});

const setSearchResult = (searchResult: Array<any>) => ({
  type: SET_SEARCH_RESULT,
  searchResult: searchResult,
});

const setSearching = (searching: boolean) => ({
  type: SET_SEARCHING,
  searching: searching,
});

export { SET_ISLOGIN, SET_PROFILE, SET_SEARCHING, SET_SEARCH_RESULT, setIsLogin, setProfile, setSearchResult, setSearching }


