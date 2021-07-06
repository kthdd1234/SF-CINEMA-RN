import { connect } from 'react-redux';
import { setProfile } from '../../actions';
import Movie from '../../components/Home/screen/Movie/Movie';

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { isLogin, profile } = userReducer;

  return {
    isLogin: isLogin,
    profile: profile,
  };
};

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    updateProfile: (profile) => {
      dispatch(setProfile(profile));
    },
  };
};

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(Movie);
