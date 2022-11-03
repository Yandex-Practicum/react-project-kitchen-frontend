import CommentInput from "components/UI/CommentInput"
import CommentList from "./CommentList"
import { Link } from "react-router-dom"
import React from "react"
import style from "./Article.module.scss"
import { Button, Text, Title } from "components/UI"
import ListErrors from "components/UI/ListErrors"

const CommentContainer = (props) => {
	if (props.currentUser)
		return (
			<div className={style.comments}>
				<Title type={3}>Комментарии</Title>
				<div>
					<ListErrors errors={props.errors}></ListErrors>
					<CommentInput />
				</div>
				<CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
			</div>
		)
	else
		return (
			<div>
				<div className={style.message}>
					<Button type='link'><Link to="/login">Войдите</Link></Button>
					<Text>&nbsp;или&nbsp;</Text>
					<Button type='link'><Link to="/register">зарегистрируйтесь</Link></Button>
					<Text>, чтобы оставить комментарий.</Text>
				</div>
				<CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
			</div>
		)
}

export default CommentContainer
