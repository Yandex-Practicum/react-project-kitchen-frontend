import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

import { routerMiddleware } from 'connected-react-router';
import { history } from './history';

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
  }
};

export const store = createStore(
  reducer, composeWithDevToolsDevelopmentOnly(getMiddleware()));
