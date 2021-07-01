import { connect } from 'react-redux';
import Like from '../components/User/Like';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Like);
