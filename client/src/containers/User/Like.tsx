import { connect } from 'react-redux';
import Like from '../../components/User/screen/Like';

interface IProfile {
  profile: object;
}

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { profile }: IProfile = userReducer;

  return {
    profile: profile,
  };
};

export default connect(mapReduxStateToReactProps)(Like);
