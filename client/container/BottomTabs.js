import { connect } from 'react-redux';
import BottomTabs from '../BottomTabs';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(BottomTabs);
