import { AppThunk } from '../store/store.types'
import { postLikeArticle, deleteLikeArticle } from '../services/api';
import { setAllArticles,likeArticleDeleteRequested,likeArticleDeleteSucceeded,likeArticleDeleteFailed,likeArticlePostRequested,likeArticlePostSucceeded,likeArticlePostFailed} from '../store'


export const deleteLikeThunk: AppThunk = (slug: string) => {
    return async function (dispatch, getState) {
      try {
        dispatch(likeArticleDeleteRequested());
        const response = await deleteLikeArticle(slug);
        const { all } = getState();
        const filteredArticlesArray = all.articles?.map(item => {
         return item.slug !== response.data.article.slug ? item : {...item,favorited: false}
        })
        dispatch(setAllArticles(filteredArticlesArray!))
        dispatch(likeArticleDeleteSucceeded())
      }
      catch (error: any) {   
        dispatch(likeArticleDeleteFailed(error))
      }
    } 
  }
  
  export const addLikeThunk: AppThunk = (slug: string) => {
    return async function (dispatch, getState) {
      try {
        dispatch(likeArticlePostRequested());
        const response = await postLikeArticle(slug);
        const { all } = getState();
        const filteredArticlesArray = all.articles?.map(item => {
          return item.slug !== response.data.article.slug ? item : { ...item, favorited: true }
        })
        dispatch(setAllArticles(filteredArticlesArray!))
        dispatch(likeArticlePostSucceeded())
      } catch (error: any) {
        dispatch(likeArticlePostFailed(error))
      }
      
     
    }
  }