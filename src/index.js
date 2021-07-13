import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store';

import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';

import App from './components/App/App';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);
