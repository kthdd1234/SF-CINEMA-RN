import { connect } from 'react-redux';
import { setProfile, setIsLogin } from '../../actions';
import Login from '../../components/Auth/screen/Login';

const mapReduxDispatchToReactProps = (dispatch: Function) => {
  return {
    dispatchIsLogin: (isLogin: boolean) => {
      dispatch(setIsLogin(isLogin));
    },
    dispatchProfile: (profile: object) => {
      dispatch(setProfile(profile));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Login);
