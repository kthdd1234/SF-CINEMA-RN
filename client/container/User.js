import { connect } from 'react-redux';
import User from '../components/User';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(User);
