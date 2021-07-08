import { connect } from 'react-redux';
import Keywords from '../../components/Search/screen/component/Keywords';

const mapReduxStateToReactProps = ({ searchReducer }) => {
  return {
    searchResult: searchReducer.searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(Keywords);
