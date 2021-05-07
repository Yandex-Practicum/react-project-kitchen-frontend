import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';



function convertBufferToBase64(buffer) {
  let binaryStr = '';
  const byteArray = new Uint8Array(buffer);
  for (let i = 0; i < byteArray.byteLength; i++) {
    binaryStr += String.fromCharCode(byteArray[i]);
  }
  return btoa(binaryStr);
}

export default (state = {
  image: {}
}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED: 
    return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        body: action.payload ? action.payload.article.body : '',
        image: action.payload && action.payload.article.image ? {
          img: action.payload.article.image.data ?
          convertBufferToBase64(action.payload.article.image.data.data) : null,
          name: action.payload.article.image.name
        } : null,
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : []
      };
    case EDITOR_PAGE_UNLOADED:
      return {};
    case ARTICLE_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        tagList: state.tagList.concat([state.tagInput]),
        tagInput: ''
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag !== action.tag)
      };
    case UPDATE_FIELD_EDITOR:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
