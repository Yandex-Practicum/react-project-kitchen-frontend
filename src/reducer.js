import { combineReducers } from 'redux';

import articles from './slices/articles-slice/articles';
import common from './slices/common-slice/common';
import profile from './slices/profile-slice/profile';
import people from './slices/people-slice/people';

export default combineReducers({
  articles,
  common,
  profile,
  people,
});
