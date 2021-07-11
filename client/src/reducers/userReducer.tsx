import { SET_ISLOGIN, SET_PROFILE } from '../actions';

const initialState = {
  isLogin: false,
  profile: {},
};

const userReducer = (state = initialState, { type, isLogin, profile }) => {
  switch (type) {
    case SET_ISLOGIN:
      return Object.assign({}, state, {
        isLogin: isLogin,
      });

    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: profile,
      });

    default:
      return state;
  }
};

export default userReducer;
