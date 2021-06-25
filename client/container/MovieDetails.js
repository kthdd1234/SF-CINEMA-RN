import { connect } from 'react-redux';
import { setProfile } from '../actions';
import MovieDetails from '../TabScreens/Home/MovieDetails';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    updateProfileToReduxStore: (profile) => {
      dispatch(setProfile(profile));
    },
  };
};

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(MovieDetails);
