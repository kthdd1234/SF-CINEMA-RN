import { connect } from 'react-redux';
import Keywords from '../../components/Search/screen/component/Keywords';

interface ISearchReducer {
  searchResult: Array<any>
}

const mapReduxStateToReactProps = ({ searchReducer }) => {
  const { searchResult }: ISearchReducer = searchReducer;

  return {
    searchResult: searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(Keywords);
