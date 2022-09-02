
import { FavoritesIcon } from "components/Icons"
import styles from './Like.module.scss'
import { useState } from "react"

const Like = ({status, onClick}) => {
	const [active, setActive] = useState(status)

	const handleClick = () => {
		setActive(!active)
	}
	return (
		<div onClick={handleClick}>
			{
				active ? <FavoritesIcon type='default'/> : <FavoritesIcon type='active'/>
			}
		</div>
	)
}

export default Like
