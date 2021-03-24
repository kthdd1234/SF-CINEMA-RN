import { connect } from 'react-redux';
import SearchSpace from '../components/Search/SearchSpace';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searching: searchReducer.searching,
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(SearchSpace);
