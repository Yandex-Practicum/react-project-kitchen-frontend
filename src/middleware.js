import agent from './agent';
import { ASYNC_START, ASYNC_END, LOGIN, LOGOUT, REGISTER } from './constants/actionTypes';
import { S_LOGIN, S_REGISTER, S_LOGOUT } from './slices/common';

const promiseMiddleware = (store) => (next) => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type, inProgress: true });

    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;

    action.payload.then(
      (res) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        console.log('RESULT', res);
        action.payload = { res: res, inProgress: false };
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      (error) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        // console.log('ERROR', error);
        action.error = true;
        action.payload = error.response.body;
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
      },
    );

    return;
  }

  next(action);
};

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === S_REGISTER || action.type === S_LOGIN) {
    if (!action.error) {
      console.log(action);
      window.localStorage.setItem('jwt', action.payload.res.user.token);
      console.log(action.payload);
      agent.setToken(action.payload.res.user.token);
    }
  } else if (action.type === S_LOGOUT) {
    window.localStorage.setItem('jwt', '');
    agent.setToken(null);
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export { promiseMiddleware, localStorageMiddleware };
