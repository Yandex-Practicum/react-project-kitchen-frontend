import ArticleList from "../ArticleList"
import React from "react"
import { connect } from "react-redux"
import TabList from "components/UI/TabList/TabList"

const mapStateToProps = (state) => ({
	...state.articleList,
	tags: state.home.tags,
	token: state.common.token,
})

const MainView = (props) => {
	const tabs = [{
		title: "Your Feed",
		eventKey: "feed"
	},
	{
		title: "Global Feed",
		eventKey: "all"
	},
	]

	return (
		<div className="col-md-9">
			<TabList tabs={tabs} />
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
