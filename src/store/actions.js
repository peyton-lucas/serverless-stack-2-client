import { combineReducers } from 'redux';
import { types } from './actions';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} = types;

const authenticationState = {
  isAuthenticated: false,
  user: {}
};

const dataState = {};

export function authenticateUser(state = authenticationState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("This is the log of login request...");
      console.log(action);
      return {
        isLoading: true
      };
    case LOGIN_SUCCESS:
      console.log("This is the log of login success...");
      console.log(action);
      return {
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      console.log("This is the log of login failures...");
      console.log(action);
      return {
        error: action.err
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export function fetchData(state=dataState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        data: action.fetchData
      };
    case FETCH_DATA_FAILURE:
      return {
        error: action.err
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  authenticateUser,
  fetchData
});

export default rootReducer;