import { connect } from 'react-redux';
import { setProfile } from '../actions';
import Login from '../components/Auth/Login';

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    sendProfileToReduxStore: (profile) => {
      dispatch(setProfile(profile));
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(Login);
