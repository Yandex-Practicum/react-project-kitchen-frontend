import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
// import { store } from './services/store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from "react-router-dom";

import App from './components/App';

// TODO: to type
// const storeProp: any = { store };

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="Blog of Everest">      
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));