import { connect } from 'react-redux';
import Save from '../TabScreens/User/Save';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Save);
