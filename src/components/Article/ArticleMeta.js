import ArticleActions from "./ArticleActions"
import { Link } from "react-router-dom"
import React from "react"
import { AuthorDate } from "components/UI/AuthorDate"

const ArticleMeta = (props) => {
	const article = props.article
	return (
		<div className="article-meta">
			<Link to={`/@${article.author.username}`}>
				<img src={article.author.image} alt={article.author.username} />
			</Link>
			<AuthorDate username={article.author.username} createdAt={article.createdAt} />
			<ArticleActions canModify={props.canModify} article={article} />
		</div>
	)
}

export default ArticleMeta
