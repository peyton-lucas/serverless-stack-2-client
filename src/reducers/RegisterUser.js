import {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE'
} from '../actions/actionTypes';

export default RegisterUser (state = {}, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST;
      return { registration: true };
    case REGISTRATION_SUCCESS;
      return {};
    case REGISTRATION_FAILURE;
      return {};
    default: return state;
  }
}