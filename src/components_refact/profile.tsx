import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { EditProfileSettings, FollowUserButton } from "./index";
import ArticleList from "../components/ArticleList";
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_USER, UNFOLLOW_USER } from "../constants/actionTypes";
import agent from "../agent";

export const Profile: FC = () => {
    const dispatch = useDispatch()
    const { username, profile } = useSelector((state: any) => state.profile)
    const { currentUser } = useSelector((state: any) => state.common)
    const {pager, articles, articlesCount, currentPage} = useSelector((state:any) => state.articleList)

    const onFollow = () => {
        dispatch({
            type: FOLLOW_USER,
            payload: agent.Profile.follow(username)
        })
    }

    const onUnfollow = () => {
        dispatch({
            type: UNFOLLOW_USER,
            payload: agent.Profile.unfollow(username)
          })
    }

    const renderTabs = useCallback(() => {
        return (
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        to={`/@${username}`}>
                        My Articles
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to={`/@${username}/favorites`}>
                        Favorited Articles
                    </Link>
                </li>
            </ul>
        );
    }, [])




    const profil = profile;
    if (!profil) {
        return null;
    }

    const isUser = currentUser &&
        profile.username === currentUser.username;

    return (
        <div className="profile-page">

            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">

                            <img src={profile.image} className="user-img" alt={profile.username} />
                            <h4>{profile.username}</h4>
                            <p>{profile.bio}</p>

                            <EditProfileSettings isUser={isUser} />
                            <FollowUserButton
                                isUser={isUser}
                                user={profile}
                                follow={onFollow}
                                unfollow={onUnfollow}
                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-10 offset-md-1">

                        <div className="articles-toggle">
                            {renderTabs()}
                        </div>

                        <ArticleList
                            pager={pager}
                            articles={articles}
                            articlesCount={articlesCount}
                            state={currentPage} />
                    </div>

                </div>
            </div>

        </div>
    );




}