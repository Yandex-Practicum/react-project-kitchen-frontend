import style from "./Sidebar.module.scss"
import PropTypes from "prop-types"
import { Button, Text } from ".."
import { CloseIcon } from "components/Icons"

export function Sidebar({ children }) {
	return (
		<div className={style.sidebar}>
			<Text>Популярные теги</Text>
			{children}
		</div>
	)
}

Sidebar.propTypes = {
	children: PropTypes.any,
}
