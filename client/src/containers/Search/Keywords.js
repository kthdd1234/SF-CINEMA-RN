import { connect } from 'react-redux';
import Keywords from '../../components/Search/component/Keywords';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(Keywords);
