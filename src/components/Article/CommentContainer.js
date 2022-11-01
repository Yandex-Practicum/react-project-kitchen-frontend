import CommentInput from "components/UI/CommentInput"
import CommentList from "./CommentList"
import { Link } from "react-router-dom"
import React from "react"
import style from "./Article.module.scss"
import { Title } from "components/UI"

const CommentContainer = (props) => {
	if (props.currentUser)
		return (
			<div className={style.comments}>
				<Title type={3}>Комментарии</Title>
				<div>
					<list-errors errors={props.errors}></list-errors>
					<CommentInput />
				</div>
				<CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
			</div>
		)
	else
		return (
			<div>
				<p>
					<Link to="/login">Sign in</Link>
					&nbsp;or&nbsp;
					<Link to="/register">sign up</Link>
					&nbsp;to add comments on this article.
				</p>

				<CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
			</div>
		)
}

export default CommentContainer
