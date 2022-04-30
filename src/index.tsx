import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { store } from './store';
import { store } from './services/store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from "react-router-dom";

import App from './components/App';
import { setTokenAxios } from './api';

const token = localStorage.getItem('jwt');
setTokenAxios(token ? token : "");

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
