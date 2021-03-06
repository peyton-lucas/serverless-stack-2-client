import {combineReducers, createStore, compose, applyMiddleware } from "redux";
import { authenticateUser, fetchData } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authentication: authenticateUser,
  data: fetchData
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;