import ArticleList from "../UI/ArticleList"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import agent from "../../agent"
import { connect } from "react-redux"
import { FOLLOW_USER, UNFOLLOW_USER, PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED } from "../../constants/actionTypes"
import { Sidebar, TabList, TagsList } from "../UI"
import { Banner } from "../Banner"
import style from "./Profile.module.scss"

const mapStateToProps = (state) => ({
	...state.articleList,
	currentUser: state.common.currentUser,
	profile: state.profile,
})

const mapDispatchToProps = (dispatch) => ({
	onFollow: (username) =>
		dispatch({
			type: FOLLOW_USER,
			payload: agent.Profile.follow(username),
		}),
	onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
	onUnfollow: (username) =>
		dispatch({
			type: UNFOLLOW_USER,
			payload: agent.Profile.unfollow(username),
		}),
	onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
	
})

const Profile = ({ onLoad, onUnload, profile, currentUser, articles, articlesCount, currentPage, match, pager }) => {
	const [selectedTag, setSelectedTag] = useState(null)

	useEffect(() => {
		onLoad(
			Promise.all([
				agent.Profile.get(match.params.username),
				agent.Articles.byAuthor(match.params.username),
				agent.Tags.getAll(),
			]),
		)
		return () => {
			onUnload()
		}
	}, [])
	const userTags = useMemo(() => {
		if (!profile.tags) return []
		return profile.tags.filter((t) => {
			return articles.find((a) => a.tagList.find((at) => at === t))
		})
	}, [articles])

	const filteredArticles = useCallback(
		(selectedTag) => {
			if (!articles) return []
			if (!selectedTag) return articles
			return articles.filter((article) => article.tagList.find((articleTag) => articleTag === selectedTag))
		},
		[articles],
	)

	const clickTagHandler = (tag) => {
		setSelectedTag(tag)
	}
	const tabs = [
		{
			title: "Ваши посты",
			route: `/@${profile.username}`,
		},
		{
			title: "Любимые посты",
			route: `/@${profile.username}/favorites`,
		},
	]
	return (
		<>
			<Banner variant="user" />
			<div className={style.wrapper}>
				<div>
					<TabList tabs={tabs} />
					<ArticleList pager={pager} articles={filteredArticles(selectedTag)} articlesCount={articlesCount} currentPage={currentPage} />
				</div>
				<Sidebar>
					<TagsList tags={userTags} onClickTag={clickTagHandler}/>
				</Sidebar>
			</div>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
// export { Profile, mapStateToProps }
