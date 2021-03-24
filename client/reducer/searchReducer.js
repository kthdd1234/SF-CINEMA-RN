import { SET_SEARCHING, SET_SEARCH_RESULT } from '../actions';
import { searchKeywordList } from '../components/Search/searchKeywordList';

const initialState = {
  searching: false,
  searchResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHING:
      return Object.assign({}, state, {
        searching: action.searching,
      });

    case SET_SEARCH_RESULT:
      return Object.assign({}, state, {
        searchResult: action.searchResult,
      });

    default:
      return state;
  }
};

export default searchReducer;
