import { Avatar } from "components/Icons/Avatar"
import React, { useState } from "react"
import styles from "./AvatarChanger.module.scss"

export const AvatarChanger = ({ avatar = "smile", setAvatar }) => {
	const [visible, setVisible] = useState(false)

	const avatars = ["asterisk", "flower", "human", "cook", "space-invaders", "alien", "smile"]

	const clickHandler = () => {
		setVisible(!visible)
	}

	return (
		<div onClick={clickHandler} className={styles.wrapper}>
			<Avatar type={avatar} size="large" />
			<ul className={styles.changer} style={{ display: visible ? "grid" : "none" }}>
				{avatars.map((a) => {
					const clickAvatarHandle = () => {
						setAvatar(a)
					}
					return (
						<span key={a} onClick={clickAvatarHandle}>
							<Avatar type={a} />
						</span>
					)
				})}
			</ul>
		</div>
	)
}
