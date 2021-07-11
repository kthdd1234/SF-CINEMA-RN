import { connect } from 'react-redux';
import { setProfile } from '../../actions';
import Movie from '../../components/Home/screen/Movie/Movie';

interface IUserReducer {
  isLogin: boolean;
  profile: object;
}

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { isLogin, profile }: IUserReducer = userReducer;

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
