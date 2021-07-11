import { connect } from 'react-redux';
import Save from '../../components/User/screen/Save';

interface IProfile {
  profile: object;
}

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { profile }: IProfile = userReducer

  return {
    profile: profile,
  };
};

export default connect(mapReduxStateToReactProps)(Save);
