import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

const defaultState = {
  tags: ["app", "web", "frontend", "react"]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
