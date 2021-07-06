import { connect } from 'react-redux';
import Search from '../../components/Search/screen/Search';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searching: searchReducer.searching,
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(Search);
