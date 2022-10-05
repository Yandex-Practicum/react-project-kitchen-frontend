import ArticleList from "../ArticleList"
import React from "react"
import { connect } from "react-redux"
import { TabList } from "components/UI"

const mapStateToProps = (state) => ({
	...state.articleList,
	tags: state.home.tags,
	token: state.common.token,
	currentUser: state.common.currentUser,
	selectedTag: state.articleList.tag || (state.articleList.tags && state.articleList.tags[0])
})


//eventKeys : all, feed

const MainView = (props) => {
	const getTabs = () => {
		const userTabs = [
			{
				title: "Ваша лента",
				eventKey: "all",
			},
			{
				title: 'Лента',
				eventKey: "all",
			},
		]
		const anonymousTabs = [
			{
				title: "Лента",
				eventKey: "all",
			},
			{
				title: '#' + props.selectedTag,
				eventKey: 'all',
			},
		]
		return props.currentUser ? userTabs : anonymousTabs
	}

	return (
		<div>
			<TabList tabs={getTabs()} />
			<ArticleList 
				pager={props.pager}
				articles={props.articles}
				loading={props.loading}
				articlesCount={props.articlesCount}
				currentPage={props.currentPage}
			/>
		</div>
	)
}

export default connect(mapStateToProps)(MainView)
