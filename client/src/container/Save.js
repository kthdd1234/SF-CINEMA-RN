import { connect } from 'react-redux';
import Save from '../component/User/Save';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Save);
