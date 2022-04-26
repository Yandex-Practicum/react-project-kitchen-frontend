import ArticleList from '../../components/ArticleList';
import { useState, useEffect } from 'react';
import agent from '../../agent';
import { connect, useSelector, useDispatch } from 'react-redux';
//import { CHANGE_TAB } from '../../constants/actionTypes.ts';
const YourFeedTab = (props: any) => {

    const clickHandler = (e: any) => {
        e.preventDefault();
        props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    }
    if (props.token) {
        return (
            <li className="nav-item">
                <a href=""
                    className={props.tab === 'feed' ? 'nav-link active' : 'nav-link'}
                    onClick={clickHandler}>
                    Your Feed
                </a>
            </li>
        )
    }
    else return null
}
const GlobalFeedTab = (props: any) => {
    const clickHandler = (e: any) => {
        e.preventDefault();
        props.onTabClick('all', agent.Articles.all, agent.Articles.all());
    }
    return (
        <li className="nav-item">
            <a
                href=""
                className={props.tab === 'all' ? 'nav-link active' : 'nav-link'}
                onClick={clickHandler}>
                Global Feed
            </a>
        </li>
    )
}
const TagFilterTab = (props: any) => {

    if (!props.tag) {
        return null;
    }
    else {
        return (
            <li className="nav-item">
                <a href="" className="nav-link active">
                    <i className="ion-pound"></i> {props.tag}
                </a>
            </li>

        )
    }
}
export const MainView = (props: any) => {
    const dispatch = useDispatch()
    //   const {tags} = useSelector((state) => state.home)
    //   const {token} = useSelector((state) => state.common)

    const onTabClick = () => {
        //dispatch({ type: CHANGE_TAB, tab, pager, payload })
    }
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">

                    <YourFeedTab
                        token={props.token}
                        tab={props.tab}
                        onTabClick={onTabClick} />

                    <GlobalFeedTab tab={props.tab} onTabClick={onTabClick} />

                    <TagFilterTab tag={props.tag} />

                </ul>
            </div>
            <ArticleList
                pager={props.pager}
                articles={props.articles}
                loading={props.loading}
                articlesCount={props.articlesCount}
                currentPage={props.currentPage} />
        </div>

    )
}
export default MainView
