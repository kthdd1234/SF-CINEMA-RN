import { connect } from 'react-redux';
import Like from '../TabScreens/User/Like';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Like);
