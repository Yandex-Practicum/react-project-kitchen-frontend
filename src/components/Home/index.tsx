import Banner from "./Banner";
import MainView from "./MainView";
import React, { useEffect } from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from "../../constants/actionTypes";
import { getAllArticles, getFeedArticles, getTags } from '../../api';
import { useSelector, useDispatch } from "react-redux";

const Promise = global.Promise;

const mapStateToProps = (state: any) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClickTag: (tag: any, pager: any, payload: any) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab: any, pager: any, payload: any) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home = (props: any) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const tab = props.token ? "feed" : "all";
    const articlesPromise = props.token
      // ? agent.Articles.feed
      // : agent.Articles.all;
      ? getFeedArticles
      : getAllArticles;
    props.onLoad(
      tab,
      articlesPromise,
      // Promise.all([agent.Tags.getAll(), articlesPromise()])
      Promise.all([getTags(), articlesPromise()])
    );
    return props.onUnload();
  }, []);

  return (
    <div className="home-page">
      <Banner token={props.token} appName={props.appName} />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <Tags tags={props.tags} onClickTag={props.onClickTag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);