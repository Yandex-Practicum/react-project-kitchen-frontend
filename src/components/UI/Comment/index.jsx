import React from "react"
import { Button, Text } from ".."
import { ArticleMeta } from "../ArticleMeta"
import DeleteButton from "../DeleteButton"
import style from "./Comment.module.scss"

const Comment = (props) => {
    const comment = props.comment
    const show = props.currentUser?.username === comment.author.username
    return (
        <div className={style.card}>
            <div className={style.top}>
                {props.type === 'input' ? props.children :
                    <Text color="secondary">{comment.body}</Text>
                }
            </div>
            <div className={style.footer}>
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
