import { batch } from 'react-redux';
import { fetchPublicFeed, fetchTags } from '../services/api';
import {
  publicFeedRequested,
  publicFeedSucceeded,
  setAllArticles, setAllTags,
  tagsFetchRequested,
  tagsFetchSucceeded,
} from '../store';
import { AppDispatch } from '../store/store.types';

const loadInitialDataThunk = () => async (dispatch : AppDispatch) => {
  try {
    batch(() => {
      dispatch(publicFeedRequested());
      dispatch(tagsFetchRequested());
    });
    const [
      { data: { articles } },
      { data: { tags } }] = await Promise.all([fetchPublicFeed(), fetchTags()]);
    dispatch(setAllArticles(articles));
    dispatch(setAllTags(tags));
    batch(() => {
      dispatch(publicFeedSucceeded());
      dispatch(tagsFetchSucceeded());
    });
  } catch (error) {
    console.dir(error);
  }
};

export default loadInitialDataThunk;
