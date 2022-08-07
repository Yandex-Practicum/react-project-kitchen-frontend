import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './history';

import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
