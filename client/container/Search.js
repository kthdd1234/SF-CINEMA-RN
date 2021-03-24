import { connect } from 'react-redux';
import { setSearchResult } from '../actions';
import Search from '../components/Search';

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    sendSearchResultToReduxStore: (searchResult) => {
      dispatch(setSearchResult(searchResult));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Search);
