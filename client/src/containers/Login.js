import { connect } from 'react-redux';
import { setProfile, setIsLogin } from '../actions';
import Login from '../components/Auth/screen/Login';

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    dispatchIsLogin: (isLogin) => {
      dispatch(setIsLogin(isLogin));
    },
    dispatchProfile: (profile) => {
      dispatch(setProfile(profile));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Login);
