import Comment from "components/UI/Comment"
import React from "react"
import style from "./Article.module.scss"

const CommentList = (props) => {
	return (
		<div className={style.list}>
			{props.comments.map((comment) => {
				return <Comment comment={comment} currentUser={props.currentUser} slug={props.slug} key={comment.id} />
			})}
		</div>
	)
}

export default CommentList
