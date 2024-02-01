import {combineReducers} from 'redux';

import authReducer from './AuthReducer';
import ApiReducer from './ApiReducer';
import {RESET_REDUX_STORE} from '../Common/constant';

const rootReducer = combineReducers({
  auth: authReducer,
  api: ApiReducer,
});

export default (state, action) =>
  rootReducer(action.type === RESET_REDUX_STORE ? undefined : state, action);
