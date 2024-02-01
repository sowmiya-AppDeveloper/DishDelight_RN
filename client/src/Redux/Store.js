import thunk from 'redux-thunk';
import {ApplicationMiddleware, apiMiddleware} from './Middleware';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './CombineReducer';
initialState = {};

const Middleware = [apiMiddleware, ApplicationMiddleware, thunk];

const configureStore = () => {
  if (__DEV__) {
    const createLogger = require('redux-logger').createLogger; // redux-LOGer 3.x
    const Logger = createLogger({
      collapsed: true,
    });
    Middleware.push(Logger);
  }
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...Middleware)),
  );
};
export default configureStore;
