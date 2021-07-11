import { connect } from 'react-redux';
import Search from '../../components/Search/screen/Search';

interface ISearchReducer {
  searching: boolean;
  searchResult: Array<any>
}

const mapReduxStateToReactProps = ({ searchReducer }) => {
  const { searching, searchResult }: ISearchReducer = searchReducer;

  return {
    searching: searching,
    searchResult: searchResult,
  };
};

export default connect(mapReduxStateToReactProps)(Search);
