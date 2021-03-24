export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const SET_SEARCHING = 'SET_SEARCHING';

export const SET_PROFILE = 'SET_PROFILE';

export const setSearchResult = (searchResult) => ({
  type: SET_SEARCH_RESULT,
  searchResult: searchResult,
});

export const setSearching = (searching) => ({
  type: SET_SEARCHING,
  searching: searching,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile: profile,
});
