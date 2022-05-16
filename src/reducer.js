import article from "./reducers/article";
import articleList from "./reducers/articleList";
import auth from "./reducers/auth";
import { combineReducers } from "redux";
import common from "./reducers/common";
import editor from "./reducers/editor";
import home from "./reducers/home";
import profile from "./reducers/profile";
import settings from "./reducers/settings";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
	combineReducers({
		article,
		articleList,
		auth,
		common,
		editor,
		home,
		profile,
		settings,
		router: connectRouter(history),
	});

export default createRootReducer;
