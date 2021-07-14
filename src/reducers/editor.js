import { EDITOR_PAGE_LOADED, ARTICLE_SUBMITTED, ASYNC_START, ADD_TAG, REMOVE_TAG } from '../constants/actionTypes';

export default (state = { article: { slug: '' } }, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        image: action.payload ? action.payload.article.image : '',
        body: action.payload ? action.payload.article.body : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : [],
        inProgress: false,
      };
    case ARTICLE_SUBMITTED:
      return {
        ...state,
        article: action.payload.article,
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
        return {
          ...state,
          inProgress: true,
        };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
        body: action.payload.body,
        tagInput: '',
        tagList: state.tagList.concat([action.payload.tagInput]),
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter((tag) => tag !== action.tag),
      };
    default:
      return state;
  }

  return state;
};
