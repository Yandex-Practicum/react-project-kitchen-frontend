import Banner from "./Banner";
import MainView from "./MainView";
import { FC, useEffect } from "react";
import Tags from "./Tags";
import {HOME_PAGE_LOADED, HOME_PAGE_UNLOADED} from "../../services/homeSlice";
import { APPLY_TAG_FILTER } from "../../services/articleListSlice"; 
import { getAllArticles, getFeedArticles, getTags } from '../../api';
import { useSelector, useDispatch } from "react-redux";

const Promise = global.Promise;

const Home: FC = () => {
  const {appName, token} = useSelector((state: any) => state.common)
  console.log(appName, token)
  const {tags} = useSelector((state: any) => state.home)

  const dispatch = useDispatch();

  const onClickTag = (tag: string, pager: any, payload: any) =>
  dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload })

  const onLoad = (tab: string, pager: any, payload: any) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })

  const onUnload = () => 
    dispatch({type: HOME_PAGE_LOADED})

 
  useEffect(() => {
    const tab = token ? "feed" : "all";
    const articlesPromise = token
      ? getFeedArticles
      : getAllArticles;
       onLoad(tab, articlesPromise,Promise.all([getTags(), articlesPromise()])
    );
    // return dispatch({ type: HOME_PAGE_UNLOADED })
  }, []);

  return (
    <div className="home-page">
      <Banner token={token} appName={appName} />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <Tags tags={tags} onClickTag={onClickTag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
