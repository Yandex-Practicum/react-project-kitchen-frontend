import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'
// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux'


// export const history = createHistory();
export const history = require("history").createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions

const myRouterMiddleware = routerMiddleware(history);

// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
//   } else {
//     // Enable additional logging in non-production environments.
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//   }
// };

export const store = configureStore({
  reducer,
  middleware: [myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger()],
  devTools: process.env.NODE_ENV !== 'production',
})

// export const store = createStore(
//   reducer, composeWithDevTools(getMiddleware()));
 