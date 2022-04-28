import { AppThunk } from '../store/store.types'
import { userFetchRequested, userFetchSucceeded, userFetchFailed, setUser } from '../store'
import { batch } from 'react-redux'
import { fetchProfile } from '../services/api'

export const userDataThunk: AppThunk = (username: string) => {
    return async function (dispatch) {
        try {
            dispatch(userFetchRequested());
            const response = await fetchProfile(username);
            dispatch(setUser(response.data?.profile!))
            dispatch(userFetchSucceeded())
        } catch (error: any) {
            dispatch(userFetchFailed(error))
        }
    }
}