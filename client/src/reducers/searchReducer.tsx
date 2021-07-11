import { SET_SEARCHING, SET_SEARCH_RESULT } from '../actions';

const initialState = {
  searching: false,
  searchResult: [],
};

const searchReducer = (state = initialState, { type, searching, searchResult }) => {
  switch (type) {
    case SET_SEARCHING:
      return Object.assign({}, state, {
        searching: searching,
      });

    case SET_SEARCH_RESULT:
      return Object.assign({}, state, {
        searchResult: searchResult,
      });

    default:
      return state;
  }
};

export default searchReducer;
