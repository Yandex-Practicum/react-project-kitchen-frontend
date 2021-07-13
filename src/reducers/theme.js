import { CHANGE_THEME } from '../constants/actionTypes';

const initialState = {
  isDarkTheme: false,
};
const handlers = {
  [CHANGE_THEME]: (state) => ({
    ...state,
    isDarkTheme: !state.isDarkTheme,
  }),
  DEFAULT: (state) => state,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
