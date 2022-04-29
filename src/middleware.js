import {setTokenAxios, updateUser} from './api';
import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGOUT,
  REGISTER
} from './constants/actionTypes';
import {authSlice} from "./services/authSlice";

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;

    action.payload.then(
      res => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        console.log('RESULT', res);
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        console.log('ERROR', error);
        action.error = true;
        action.payload = error.response.data;
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {
  const {payload, token, error} = action;
  if (authSlice.actions.authSuccess.match(action)) {
    // if (!error) {
      window.localStorage.setItem('jwt', token); // как обновить токен, который jwt malformed?????????
      // agent.setToken(action.payload.user.token);
      setTokenAxios(token);
    // }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem('jwt', '');
    // agent.setToken(null);
    setTokenAxios('');
  }

  next(action);
  return store
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware }
