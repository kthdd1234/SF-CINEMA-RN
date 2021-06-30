import { connect } from 'react-redux';
import { setProfile } from '../actions';
import Movie from '../component/Home/screen/Movie';

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
)(Movie);
