import agent from "agent"
import { TrashIcon } from "components/Icons"
import { DELETE_COMMENT } from "constants/actionTypes"
import React from "react"
import { connect } from "react-redux"
import { Button } from ".."

const mapDispatchToProps = (dispatch) => ({
	onClick: (payload, commentId) => dispatch({ type: DELETE_COMMENT, payload, commentId }),
})

const DeleteButton = (props) => {
	const del = () => {
		const payload = agent.Comments.delete(props.slug, props.commentId)
		props.onClick(payload, props.commentId)
	}

	if (props.show)
		return (
			<Button onClick={del} type="delete">
				<TrashIcon />
			</Button>
		)

	return null
}

export default connect(() => ({}), mapDispatchToProps)(DeleteButton)
