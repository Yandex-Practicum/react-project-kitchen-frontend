import React from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import { ADD_COMMENT } from "../../constants/actionTypes"
import { Input } from "components/UI/Input"
import { ArticleMeta } from "components/UI/ArticleMeta"

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
})


class CommentInput extends React.Component {
	constructor() {
		super()
		this.state = {
			body: "",
		}

		this.setBody = (ev) => {
			this.setState({ body: ev.target.value })
		}

		this.createComment = (ev) => {
			ev.preventDefault()
			const payload = agent.Comments.create(this.props.slug, { body: this.state.body })
			this.setState({ body: "" })
			this.props.onSubmit(payload)
		}
	}

	render() {
		return (
			<form className="card comment-form" onSubmit={this.createComment}>
				<Input
					placeholder="Написать комментарий"
					type="comment"
					value={this.state.body}
					onChange={this.setBody}
				/>
				<div className="card-footer">
					<ArticleMeta
						image={this.props.currentUser.image}
						username={this.props.currentUser.username}
					>
						<button className="btn btn-sm btn-primary" type="submit">
							Post Comment
						</button>
					</ArticleMeta>
				</div>
			</form>
		)
	}
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput)
