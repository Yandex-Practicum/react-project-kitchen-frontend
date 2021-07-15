import { combineReducers } from 'redux';

import articles from './slices/articles-slice/articles';
import common from './slices/common-slice/common';
import profile from './slices/profile-slice/profile';

export default combineReducers({
  articles,
  common,
  profile,
});
