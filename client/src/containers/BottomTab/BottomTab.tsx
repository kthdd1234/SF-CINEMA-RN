import { connect } from 'react-redux';
import BottomTab from '../../BottomTab';

interface IUserReducer {
  isLogin: boolean;
  profile: object;
}

const mapReduxStateToReactProps = ({ userReducer }) => {
  const { isLogin, profile }: IUserReducer = userReducer;
  
  return {
    isLogin: isLogin,
    profile: profile,
  };
};

export default connect(mapReduxStateToReactProps)(BottomTab);
