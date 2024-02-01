import {
  ActionConstants,
  GET_API_DATA,
  HTTP,
  RESET_REDUX_STORE,
} from '../Common/constant';
import {LOG} from '../Common/utils';

export const signUp = jsonData => {
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.signUp,
      requestType: ActionConstants.SIGN_UP,
    });
  };
};

export const signIn = jsonData => {
  LOG('signUp', jsonData);
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.signIn,
      requestType: ActionConstants.SIGN_IN,
    });
  };
};
export const forgotPassword = jsonData => {
  LOG('forgotPassword', jsonData);
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.forgotPassword,
      requestType: ActionConstants.FORGOT_PASSWORD,
    });
  };
};
export const resetPassword = jsonData => {
  LOG('resetPassword', jsonData);
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsonData,
      requestUrl: HTTP.resetPassword,
      requestType: ActionConstants.RESET_PASSWORD,
    });
  };
};

export const resetStore = () => {
  return dispatch => {
    dispatch({
      type: RESET_REDUX_STORE,
    });
  };
};
