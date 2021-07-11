import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App/App';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root'),
);
