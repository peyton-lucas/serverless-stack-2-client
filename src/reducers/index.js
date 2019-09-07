import { combineReducers } from 'redux';
import { Alert } from './Alert';
import { AuthenticateUser } from './AuthenticateUser';
import { Fetch } from './Fetch';
import { RegisterUser } from './RegisterUser';

const rootReducer = combineReducers({
  // Add imported reducers above here in object form
  AuthenticateUser: AuthenticateUser,
  RegisterUser: RegisterUser,
  Alert: Alert,
  Fetch: Fetch
});

export default rootReducer;