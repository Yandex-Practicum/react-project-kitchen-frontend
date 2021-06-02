import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux'

//import { applyMiddleware, createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const history = require("history").createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

// Redux: базовая реализация
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


// Redux: базовая реализация
// export const store = createStore(
//   reducer, composeWithDevTools(getMiddleware()));
