import DeleteButton from "./DeleteButton"
import React from "react"
import { ArticleMeta } from "components/UI/ArticleMeta"

const Comment = (props) => {
	const comment = props.comment
	const show = props.currentUser && props.currentUser.username === comment.author.username
	return (
		<div className="card">
			<div className="card-block">
				<p className="card-text">{comment.body}</p>
			</div>
			<div className="card-footer">
				<ArticleMeta
					image={comment.author.image}
					username={comment.author.username}
					createdAt={comment.createdAt}
				>
					<DeleteButton show={show} slug={props.slug} commentId={comment.id} />
				</ArticleMeta>
			</div>
		</div>
	)
}

export default Comment
