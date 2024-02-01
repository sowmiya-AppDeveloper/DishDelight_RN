import {ActionConstants} from '../Common/constant';
import {LOG} from '../Common/utils';

const initialState = {
  userDetails: {},
  signUpDetails: {},
  forgotDetails: {},
  resetPassword: {},
  // errorDta: {},
  // forgotError: {},
};
const authReducer = (state = initialState, action) => {
  LOG('<<<<== Auth Reducer ==>>>> ');

  switch (action.type) {
    // LOGIN RESPONSE WILL BE HANDLES HERE WE WILL get userDetails, and authToken.

    case ActionConstants.SIGN_UP:
      LOG('Action Type Action Type' + action.type);

      LOG('login_data', action.jsonData);
      var result_data = action.jsonData;
      if (result_data) {
        return Object.assign({}, state, {
          signUpDetails: result_data,
        });
      }

    case ActionConstants.SIGN_IN:
      var result_data = action.jsonData;
      LOG('SIGN_IN SIGN_IN SIGN_IN', result_data);
      if (result_data) {
        return Object.assign({}, state, {
          userDetails: result_data,
        });
      }

    case ActionConstants.FORGOT_PASSWORD:
      var result_data = action.jsonData;
      LOG('FORGOT_PASSWORD', result_data);
      if (result_data && result_data) {
        return Object.assign({}, state, {
          forgotDetails: result_data,
        });
      }
    case ActionConstants.RESET_PASSWORD:
      var result_data = action.jsonData;
      if (result_data && result_data) {
        return Object.assign({}, state, {
          resetPassword: result_data,
        });
      }

    default:
      LOG('AUTH REDUCER DEFAULT STATE');
      return state;
  }
};

export default authReducer;
