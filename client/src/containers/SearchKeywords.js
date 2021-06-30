import { connect } from 'react-redux';
import SearchKeywords from '../component/Search/SearchKeywords';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(SearchKeywords);
