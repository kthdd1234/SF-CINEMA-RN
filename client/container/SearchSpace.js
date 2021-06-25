import { connect } from 'react-redux';
import SearchSpace from '../TabScreens/Search/SearchSpace';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searching: searchReducer.searching,
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(SearchSpace);
