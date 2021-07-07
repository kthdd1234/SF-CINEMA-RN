import { connect } from 'react-redux';
import Save from '../../components/User/screen/Save';

const mapReduxStateToReactProps = ({ userReducer }) => {
  return {
    profile: userReducer.profile,
  };
};

export default connect(mapReduxStateToReactProps)(Save);
