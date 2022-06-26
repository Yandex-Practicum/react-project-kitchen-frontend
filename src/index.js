import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';


import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter >
  </Provider >

), document.getElementById('root'));
