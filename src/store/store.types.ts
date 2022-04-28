import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TAppActions, TArticleActions } from '../constants/actionTypes';
import store from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type TApplicationActions = TAppActions | TArticleActions;
/* export type AppThunk<TReturn = void> = ActionCreator<
ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; */

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>;