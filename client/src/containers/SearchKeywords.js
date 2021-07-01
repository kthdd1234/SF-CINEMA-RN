import { connect } from 'react-redux';
import SearchKeywords from '../components/Search/SearchKeywords';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(SearchKeywords);
