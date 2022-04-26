//import { Profile, mapStateToProps } from './Profile';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import agent from '../agent';
import { connect, useSelector, useDispatch } from 'react-redux'/*
import {
    PROFILE_PAGE_LOADED,
    PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes.ts';*/
export const ProfileFavorites = (props: any) => {
    const dispatch = useDispatch()
    /*
    this.props.onLoad(page => agent.Articles.favoritedBy(this.props.match.params.username, page), Promise.all([
        agent.Profile.get(this.props.match.params.username),
        agent.Articles.favoritedBy(this.props.match.params.username)
      ]));*/
      useEffect(() => {
        //dispatch({ type: PROFILE_PAGE_LOADED, pager, payload })
    }, [])
    useEffect(() => {
      //  dispatch({ type: PROFILE_PAGE_UNLOADED })
    }, [])
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    to={`/@${props.profile.username}`}>
                    My Articles
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link active"
                    to={`/@${props.profile.username}/favorites`}>
                    Favorited Articles
                </Link>
            </li>
        </ul>
    )
}

export default ProfileFavorites