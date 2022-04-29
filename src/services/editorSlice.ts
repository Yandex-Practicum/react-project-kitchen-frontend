//----------- Данный слайс не задействован! -----------//

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
  articleSlug: string,
  title: string,
  description: string,
  image: string,
  body: string,
  tagInput: string,
  tagList: Array<any>, //TODO: уточнить типы
}

type TArticle = {
  article: {
    slug: string,
    title: string,
    description: string,
    image: string,
    body: string,
    tagList: Array<any>, //TODO: уточнить типы
  }
}

const initialState: IInitialState = {
  articleSlug: "",
  title: "",
  description: "",
  image: "",
  body: "",
  tagInput: "",
  tagList: [],
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    editorPageWasLoaded: (state, action: PayloadAction<TArticle>) => {
      const { slug, title, description, image, body, tagList } =
      action.payload.article;

      state.articleSlug = slug;
      state.title = title;
      state.description = description;
      state.image = image;
      state.body = body;
      state.tagInput = "";
      state.tagList = tagList;
    },
    editorPageWasUnloaded: (state) => {
      return initialState;
    },

    addTag: (state) => {
      state.tagList = state.tagList.concat([state.tagInput]);
      state.tagInput = "";
    },
    removeTag: (state, action) => {
      // state.tagList = state.tagList.filter((tag) => tag !== action.tag);
      state.tagList = state.tagList.filter((tag) => tag !== action.payload.tag);
    },
  },
});

export default editorSlice.reducer;
// export const {
//   EDITOR_PAGE_LOADED,
//   EDITOR_PAGE_UNLOADED,
//   ADD_TAG,
//   REMOVE_TAG,
//   // UPDATE_FIELD_EDITOR,
// } = editorSlice.actions;
export const {
  editorPageWasLoaded,
  editorPageWasUnloaded,
  addTag,
  removeTag,
  // UPDATE_FIELD_EDITOR,
} = editorSlice.actions;
