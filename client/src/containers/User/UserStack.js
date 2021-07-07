import { connect } from 'react-redux';
import UserStack from '../../components/User/UserStack';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(UserStack);
