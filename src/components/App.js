import Header from "./header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Article from "../components/Article";
import Editor from "../components/Editor";
import Home from "../components/Home";
import Login from "../components/login";
import Profile from "../components/Profile";
import Register from "../components/register";
import Settings from "../components/Settings";
import { store } from "../services/store";
import { push } from "react-router-redux";
import { auth, setTokenAxios } from "../api";
import { useDispatch } from "react-redux";
import { authThunk, loginThunk } from "../services/thunks";

function App() {
  const dispatch = useDispatch();
  const { appName, currentUser, token } = useSelector(store => store.common);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(token) {
      dispatch(authThunk());
    }
  }, []);

    return (
      <div>
        <Header
          appName={appName}
          currentUser={currentUser}
        />
        {error && <p>{error}</p> }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/article/:id" component={Article} />
          <Route path="/settings" component={Settings} />
          <Route path="/@:username/favorites" component={Profile} />
          <Route path="/@:username" component={Profile} />
        </Switch>
      </div>
    );
}

export default App;
