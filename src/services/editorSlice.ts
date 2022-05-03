import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  getArticleThunk,
  updateArticleThunk,
  createArticleThunk,
} from "./thunks";
import {TArticle, TArticleProperties} from "./types";

const initialState: TArticleProperties = {
  slug : "",
  title: "",
  description: "",
  image: "",
  body: "",
  tagInput: "",
  tagList: [],
};

const setEditor = (state: TArticleProperties, action: PayloadAction<TArticle>) => {
  if (action.payload?.article) {
    return { ...action.payload.article };
  }
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    clearEditor: (state) => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [getArticleThunk.fulfilled]: setEditor,
    [createArticleThunk.fulfilled]: setEditor,
    [updateArticleThunk.fulfilled]: setEditor,
  },
});

export default editorSlice.reducer;
export const { clearEditor } = editorSlice.actions
