import React from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, APPLY_TAG_FILTER } from "../../constants/actionTypes"
import { TagsList, Sidebar, Pagination } from "components/UI"
import { Banner } from "components/Banner"
import MainView from "components/MainView"

const mapStateToProps = (state) => ({
	...state.home,
	appName: state.common.appName,
	token: state.common.token,
})

const mapDispatchToProps = (dispatch) => ({
	onClickTag: (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
	onLoad: (tab, pager, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
	onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
})

class Home extends React.Component {
	componentWillMount() {
		const tab = this.props.token ? "feed" : "all"
		const articlesPromise = this.props.token ? agent.Articles.feed : agent.Articles.all

		this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]))
	}

	componentWillUnmount() {
		this.props.onUnload()
	}

	render() {
		return (
			<>
				<Banner variant="app" />
				<div style={{ display: "flex", gap: 32, marginTop: 32 }}>
					<div>
						<MainView />
					</div>
					<div>
						<Sidebar>
							<TagsList tags={this.props.tags} onClickTag={this.props.onClickTag} />
						</Sidebar>
					</div>
				</div>
				<Pagination />
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
