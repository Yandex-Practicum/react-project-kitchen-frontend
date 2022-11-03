import CommentContainer from "./CommentContainer"
import React, { useEffect } from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import marked from "marked"
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from "../../constants/actionTypes"
import { TagsList, Text, Title } from "components/UI"
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

export const Article = ({ onLoad, onUnload, article, currentUser, comments, commentErrors, match }) => {
	useEffect(() => {
		onLoad(
			Promise.all([
				agent.Articles.get(match.params.id),
				agent.Comments.forArticle(match.params.id),
			]),
		)
		return () => { onUnload() }
	}, [])

	if (!article) return null

	const markup = { __html: marked(article.body, { sanitize: true }) }
	return (
		<div className={style.wrapper}>
			<Banner variant='article' />
			<div className={style.main}>
				<Title type={2}>{article.title}</Title>
				<div className={style.text} dangerouslySetInnerHTML={markup}></div>
				<div>
					<TagsList tags={article.tagList} />
				</div>
			</div>
			<CommentContainer
				comments={comments || []}
				errors={commentErrors}
				slug={match.params.id}
				currentUser={currentUser}
			/>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
