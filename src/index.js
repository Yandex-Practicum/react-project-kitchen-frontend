import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>

);
