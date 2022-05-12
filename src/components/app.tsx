import Header from "./header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Editor from "./Editor";
import Home from "../pages/home-page/home-page";
import Login from "./login";
import Profile from "./Profile";
import Register from "../pages/register/register";
import Settings from "../pages/settings/settings";
import { useDispatch } from "react-redux";
import { authThunk } from "../services/thunks";
import { Layout } from "./StyledComponents/Layout";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((store: any) => store.common);

  useEffect(() => {
    if (token) {
      dispatch(authThunk());
    }
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/article/:id" component={Article} />
          <Route path="/settings" component={Settings} />
          <Route path="/@:username/favorites" component={Profile} />
          <Route path="/@:username" component={Profile} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
