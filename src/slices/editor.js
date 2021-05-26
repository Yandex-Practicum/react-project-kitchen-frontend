import { createSlice } from '@reduxjs/toolkit';

// Проверить работоспособность initial при EDITOR PAGE LOADER
const initialState = {
  articleSlug: '',
  title: '',
  description: '',
  image: '',
  body: '',
  tagInput: '',
  tagList: [],
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    EDITOR_PAGE_LOADED: (state, action) => {
      const { slug, title, description, image, body, tagList } = action.payload.article;
      state.articleSlug = slug;
      state.title = title;
      state.description = description;
      state.image = image;
      state.body = body;
      //state.tagInput = '';  
      state.tagList = tagList;
    },
    EDITOR_PAGE_UNLOADED: (state, action) => {
      state = initialState;
    },
    ARTICLE_SUBMITTED: (state, action) => {
      // Оставить в Settings или дублировать?
      // ...state,
      // inProgress: null,
      // errors: action.error ? action.payload.errors : null
    },
    ASYNC_START: (state, action) => {
      // Оставить в Settings или дублировать?
      // if (action.subtype === ARTICLE_SUBMITTED) {
      //   return { ...state, inProgress: true };
      // }
    },
    ADD_TAG: (state, action) => {
      state.tagList = state.tagList.concat([state.tagInput]);
      state.tagInput = '';
    },
    REMOVE_TAG: (state, action) => {
      state.tagList = state.tagList.filter(tag => tag !== action.tag);
    },
    UPDATE_FIELD_EDITOR: (state, action) => {
      // Продумать
      //{ ...state, [action.key]: action.value };
    },
  }
})

export default editorSlice.reducer
export const { EDITOR_PAGE_LOADED, 
               EDITOR_PAGE_UNLOADED, 
               ARTICLE_SUBMITTED, 
               ASYNC_START, 
               ADD_TAG, 
               REMOVE_TAG,
               UPDATE_FIELD_EDITOR } = editorSlice.actions