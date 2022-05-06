import Header from "./header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Editor from "./Editor";
import Home from "./Home";
import Login from "./login";
import Profile from "./Profile";
import Register from "./register";
import Settings from "./Settings";
import { store } from "../services/store";
import { push } from "react-router-redux";
import { auth, setTokenAxios } from "../api";
import { useDispatch } from "react-redux";
import { authThunk, loginThunk } from "../services/thunks";

function App() {
  const dispatch = useDispatch();
  const { appName, currentUser, token } = useSelector((store: any) => store.common);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(token) {
      dispatch(authThunk());
    }
  }, []);

    return (
      <div>

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
