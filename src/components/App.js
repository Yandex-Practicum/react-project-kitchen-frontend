import agent from "../agent"
import Header from "./Header"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { APP_LOAD, REDIRECT } from "../constants/actionTypes"
import { Route, Switch } from "react-router-dom"
import Article from "../components/Article"
import Editor from "../components/Editor"
import Home from "../components/Home"
import Login from "../components/Login"
import Profile from "../components/Profile"
import ProfileFavorites from "../components/ProfileFavorites"
import Register from "../components/Register"
import Settings from "../components/Settings"
import { store } from "../store"
import { push } from "react-router-redux"
import { Loader } from "./UI/Loader"

const mapStateToProps = (state) => {
	return {
		appLoaded: state.common.appLoaded,
		appName: state.common.appName,
		currentUser: state.common.currentUser,
		redirectTo: state.common.redirectTo,
		dispatch: state.dispatch,
	}
}

const mapDispatchToProps = (dispatch) => ({
	onLoad: (payload, token) => dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
	onRedirect: () => dispatch({ type: REDIRECT }),
	pushRedirect: (payload) => dispatch(push(payload)),
})

const App = ({ onLoad, appLoaded, onRedirect, dispatch, redirectTo, pushRedirect }) => {
	useEffect(() => {
		const token = window.localStorage.getItem("jwt")
		if (token) agent.setToken(token)

		onLoad(token ? agent.Auth.current() : null, token)
	}, [])

	useEffect(() => {
		if (redirectTo) {
			// this.context.router.replace(nextProps.redirectTo);
			pushRedirect(redirectTo)
			onRedirect()
		}
	}, [redirectTo, dispatch])

	if (appLoaded)
		return (
			<>
				<Header />
				<div style={{ width: "var(--layout-width)", margin: "0 auto" }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/editor/:slug" component={Editor} />
						<Route path="/editor" component={Editor} />
						<Route path="/article/:id" component={Article} />
						<Route path="/settings" component={Settings} />
						<Route path="/@:username/favorites" component={ProfileFavorites} />
						<Route path="/@:username" component={Profile} />
					</Switch>
				</div>
			</>
		)

	return <Loader />
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
