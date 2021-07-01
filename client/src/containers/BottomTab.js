import { connect } from 'react-redux';
import BottomTab from '../components/BottomTab/BottomTab';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    isLogin: userReducer.isLogin,
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(BottomTab);
