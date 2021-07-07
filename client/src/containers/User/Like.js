import { connect } from 'react-redux';
import Like from '../../components/User/screen/Like';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Like);
