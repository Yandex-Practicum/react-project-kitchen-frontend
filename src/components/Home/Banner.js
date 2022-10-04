import { Text, Title } from "components/UI"
import React from "react"
import MainView from "./MainView"

const Banner = ({ appName, token }) => {
	if (token) return null

	return (
		<div className="banner">
			<div className="container">
				<Title type={1} shadow>{appName}</Title>
				<Title type={3}>Место, где готовится новый опыт</Title>
			</div>
		</div>
	)
}

export default Banner