import { connect } from 'react-redux';
import TabScreens from '../TabScreens/TabScreens';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(TabScreens);
