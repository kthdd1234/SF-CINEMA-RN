import { connect } from 'react-redux';
import User from '../TabScreens/User';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(User);
