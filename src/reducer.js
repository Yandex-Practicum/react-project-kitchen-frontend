import { combineReducers } from 'redux';
import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';

// import article from './slices/article';
// import articleList from './slices/articleList';
// import auth from './slices/auth';
// import common from './slices/common';
// import editor from './slices/editor';
// import home from './slices/home';
// import profile from './slices/profile';
// import settings from './slices/settings';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
