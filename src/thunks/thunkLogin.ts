import { batch } from 'react-redux';
import { loginUser, jwt } from '../services/api';
import {
    userLoginRequested,
    userLoginSucceeded,
    userLoginFailed, setUser, onLogin, resetFormLogin,
} from '../store';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
export const loginUserThunk = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { email, password } = getState().forms.login;
    try {
        dispatch(userLoginRequested());
        const { data: { user } } = await loginUser(email ?? '', password ?? '');
        jwt.set(user.token);
        delete user.token;
        batch(() => {
            dispatch(userLoginSucceeded());
            dispatch(setUser(user));
            dispatch(onLogin());
            dispatch(resetFormLogin());
        });
    } catch (error) {
        console.dir(error);
        dispatch(userLoginFailed('Ашипка!'));
    }
};
export default loginUserThunk;