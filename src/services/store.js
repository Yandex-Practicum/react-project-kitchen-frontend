import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import { promiseMiddleware, localStorageMiddleware } from '../middleware';
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

// export const history = createHistory();
export const history = require("history").createBrowserHistory()
// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  middleware: [
    myRouterMiddleware, 
    promiseMiddleware, 
    localStorageMiddleware, 
    createLogger(),
  ],
  devTools: process.env.NODE_ENV !== 'production',
})