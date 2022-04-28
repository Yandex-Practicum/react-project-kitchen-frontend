import { followProfilePostRequested,  followProfilePostSucceeded,  followProfilePostFailed, followProfileDeleteRequested,followProfileDeleteSucceeded, followProfileDeleteFailed} from '../store'
import { postFollowProfile,deleteFollowProfile} from '../services/api';
import { AppThunk } from '../store/store.types'
import { setCurrentUser } from '../store';


export const followProfileThunk: AppThunk = (username: string) => {
    return async function (dispatch) {
        try {
            dispatch(followProfilePostRequested());
            const response = await postFollowProfile(username)
            setCurrentUser(response.data?.profile)           
            dispatch(followProfilePostSucceeded());
        } catch (error: any) {
            dispatch(followProfilePostFailed(error));
        }
    }
}

export const unfollowProfileThunk: AppThunk = (username: string) => {
    return async function (dispatch) {
        try {
            dispatch(followProfileDeleteRequested());
            const response = await deleteFollowProfile(username);
            setCurrentUser(response.data?.profile) 
            dispatch(followProfileDeleteSucceeded());
        } catch (error: any) {
            dispatch(followProfileDeleteFailed(error))
        }
    }
}