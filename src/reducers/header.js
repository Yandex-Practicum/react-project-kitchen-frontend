import { TOGGLE_MOBILE_MENU } from '../constants/actionTypes';

const initialState = {
  isMobileMenuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };

    default:
      return state;
  }
};
