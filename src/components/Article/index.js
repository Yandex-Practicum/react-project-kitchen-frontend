import CommentContainer from "./CommentContainer"
import React from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import marked from "marked"
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from "../../constants/actionTypes"
import { TagsList, Title } from "components/UI"
import ArticleActions from "./ArticleActions"
import { ArticleMeta } from "components/UI/ArticleMeta"
import { Banner } from "components/Banner"
import style from "./Article.module.scss"

const mapStateToProps = (state) => ({
	...state.article,
	currentUser: state.common.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
	onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
	onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
})

class Article extends React.Component {
	componentDidMount() {
		this.props.onLoad(
			Promise.all([
				agent.Articles.get(this.props.match.params.id),
				agent.Comments.forArticle(this.props.match.params.id),
			]),
		)
	}

	componentWillUnmount() {
		this.props.onUnload()
	}

	render() {
		if (!this.props.article) return null

		const markup = { __html: marked(this.props.article.body, { sanitize: true }) }
		return (
			<div>
				<Banner variant='article' />
				<div className={style.wrapper}>
					<div className={style.title}>
						<Title type={2}>{this.props.article.title}</Title>
					</div>
					<div>
						<TagsList tags={this.props.article.tagList} />
					</div>
				</div>
				<CommentContainer
					comments={this.props.comments || []}
					errors={this.props.commentErrors}
					slug={this.props.match.params.id}
					currentUser={this.props.currentUser}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
