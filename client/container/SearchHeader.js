import { connect } from 'react-redux';
import { setSearching, setSearchResult } from '../actions';
import SearchHeader from '../TabScreens/Search/SearchHeader';

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    sendSearchingToReduxStore: (searching) => {
      dispatch(setSearching(searching));
    },
    sendSearchResultToReduxStore: (searchResult) => {
      dispatch(setSearchResult(searchResult));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(SearchHeader);
