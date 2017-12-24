import * as types from './types';

export default function authReducer(state = {
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false,
  profile: JSON.parse(localStorage.getItem('profile')),
  error: null,
}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: {},
      };
    default:
      return state;
  }
}
