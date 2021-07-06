import { connect } from 'react-redux';
import { setSearching, setSearchResult } from '../../actions';
import Header from '../../components/Search/component/Header';

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    setSearch: (searching) => {
      dispatch(setSearching(searching));
    },
    searchResult: (searchResult) => {
      dispatch(setSearchResult(searchResult));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Header);
