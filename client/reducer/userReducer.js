import { SET_PROFILE } from '../actions';

const initialState = {
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile,
      });

    default:
      return state;
  }
};

export default userReducer;
