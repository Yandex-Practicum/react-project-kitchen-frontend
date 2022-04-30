import {
  AsyncThunkPayloadCreator,
  createAsyncThunk as thunk,
} from "@reduxjs/toolkit";
import * as api from "../../api";

// payloadCreator
const pc = (
  apiRequest: (requestPayload?: any) => Promise<any>
): AsyncThunkPayloadCreator<any> => {
  return async (requestPayload: any = null, thunkAPI?: any) => {
    try {
      const response = requestPayload
        ? await apiRequest(requestPayload)
        : await apiRequest();
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const loginThunk: any = thunk("LOGIN", pc(api.login));
export const signupThunk: any = thunk("SIGNUP", pc(api.signup));
export const authThunk: any = thunk("AUTH", pc(api.auth));
export const getAllArticlesThunk: any = thunk("GET_ALL_ARTICLES", pc(api.getAllArticles));
export const getFeedArticlesThunk: any = thunk("GET_FEED_ARTICLES", pc(api.getFeedArticles));
export const getTagsThunk: any = thunk("GET_TAGS", pc(api.getTags));
export const getProfileThunk: any = thunk("GET_PROFILE", pc(api.getProfile));
export const getArticlesByAuthorThunk: any = thunk("GET_ARTICLES_BY_AUTHOR", pc(api.getArticlesByAuthor));
export const getFavoritedArticlesThunk: any = thunk("GET_FAVORITE_ARTICLES", pc(api.getFavoritedArticles));


// async (payload: any, thunkAPI) => {
//   const response = await api.login(payload);
//   return response;
// }
// );
