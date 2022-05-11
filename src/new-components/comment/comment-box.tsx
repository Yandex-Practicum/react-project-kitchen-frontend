import React, { FunctionComponent } from "react";
import DeleteButton from "../../components/Article/DeleteButton";
import { Link } from "react-router-dom";
import { Comment, User } from "../../types";
import styles from "./comment-box.module.css";

type CommentProps = {
	comment: Comment;
	currentUser: User;
	slug: string;
};
export const CommentBox: FunctionComponent<CommentProps> = ({
	comment,
	currentUser,
	slug,
}) => {
	const show = currentUser && currentUser.username === comment.author.username;
	return (
		<div className={`card ${styles.card}`}>
			<div className="card-block">
				<p className="card-text">{comment.body}</p>
			</div>
			<div className={`${styles.cardFooter}`}>
				<Link to={`/@${comment.author.username}`} className="comment-author">
					<img
						src={comment.author.image}
						className="comment-author-img"
						alt={comment.author.username}
					/>
				</Link>
				&nbsp;
				<Link to={`/@${comment.author.username}`} className="comment-author">
					{comment.author.username}
				</Link>
				<span className="date-posted">
					{new Date(comment.createdAt).toDateString()}
				</span>
				<DeleteButton show={show} slug={slug} commentId={comment.id} />
			</div>
		</div>
	);
};

export default CommentBox;
