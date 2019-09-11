import axios from 'axios';
// Action Types
export const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  FETCH_DATA: 'FETCH_DATA'
}

//Action Creators
export function login(email, password) {
  return {
    type: LOGIN,
    user
  }
}

export function logout() {
  return {
    type: LOGOUT,
    user
  }
}
// Fetches livestockAnalytics.py outputted JSON obj
export function fetchData(json) {
  return async function(dispatch) {
    const livestockData = axios.get("https://api.myjson.com/bins/19dtxc")
      .then(({ data }) => {
        dispatch({ type: FETCH_DATA, livestockData });
      });
  };
}