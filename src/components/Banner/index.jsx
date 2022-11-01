import { Title } from "components/UI"
import { FollowUserButton } from "components/UI/FollowUserButton"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Banner.module.scss"
import { ArticleMeta } from "components/UI/ArticleMeta"
import ArticleActions from "components/Article/ArticleActions"

const mapStateToProps = (state) => {
	return {
		appName: state.common.appName,
		currentUser: state.common.currentUser,
		profile: state.profile,
		article: state.article.article,
	}
}

const Article = connect(mapStateToProps)(({ article }) => {
	return (
		<div className={styles.articleWrapper}>
			<ArticleMeta image={article.author.image} username={article.author.username} createdAt={article.createdAt} />
			<ArticleActions />
		</div>
	)
})

const User = connect(mapStateToProps)(({ profile }) => {
	if (!profile?.username) return null
	return (
		<div className={styles.userWrapper}>
			<figure>
				<img src={profile.image} className="user-img" alt={profile.username} />
				<figcaption>
					<Title type={3}>{profile.username}</Title>
				</figcaption>
			</figure>
			<div className={styles.button}>
				<FollowUserButton />
			</div>
		</div>
	)
})

const App = connect(mapStateToProps)(({ appName }) => {

	return (
		<div className={styles.titleWrapper}>
			<Title type={1} shadow>
				{appName}
			</Title>
			<Title type={3}>Место, где готовится новый опыт</Title>
		</div>
	)
})

const BannerComponent = ({ variant, appName, currentUser }) => {
	if (!variant || !appName || !currentUser) return null

	const bannerVariants = {
		app: App,
		user: User,
		article: Article,
	}

	return <div className={styles.banner}>{React.createElement(bannerVariants[variant])}</div>
}

export const Banner = connect(mapStateToProps)(BannerComponent)

Banner.propTypes = {
	type: PropTypes.oneOf("app", "user", "article"),
}
