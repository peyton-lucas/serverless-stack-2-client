import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/actionsTypes';

export default AuthenticateUser (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST;
      return {
        isLoggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS;
      return {
        isLoggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE;
      return {};
    case LOGOUT;
      return {};
    default: return state;
  }
}