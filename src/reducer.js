import { combineReducers } from 'redux';
import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import theme from './reducers/theme';

import S_articles from './slices/articles';
import S_common from './slices/common';
import S_profile from './slices/profile';

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  theme,
  S_articles,
  S_common,
  S_profile,
});
