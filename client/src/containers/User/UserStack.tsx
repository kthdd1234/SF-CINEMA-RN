import { connect } from 'react-redux';
import UserStack from '../../components/User/UserStack';

interface IProfile {
  profile: object;
}

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { profile }: IProfile = userReducer;

  return {
    profile: profile,
  };
};

export default connect(mapReduxStateToReactProps)(UserStack);
