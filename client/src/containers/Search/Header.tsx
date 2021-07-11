import { connect } from 'react-redux';
import { setSearching, setSearchResult } from '../../actions';
import Header from '../../components/Search/screen/component/Header';

const mapReduxDispatchToReactProps = (dispatch: Function) => {
  return {
    setSearch: (searching: boolean) => {
      dispatch(setSearching(searching));
    },
    searchResult: (searchResult: Array<any>) => {
      dispatch(setSearchResult(searchResult));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Header);
