import { connect } from 'react-redux';
import TabScreens from '../TabScreens/TabScreens';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    isLogin: userReducer.isLogin,
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(TabScreens);
