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

// <<<<<<< HEAD
//     return (
//       <div>
//         <Header
//           appName={appName}
//           currentUser={currentUser}
//         />
//         {error && <p>{error}</p> }
//         <Switch>
// =======
  return (
    <>
      <Header />
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} exact />
          <Route path="/editor" component={Editor} exact />
          <Route exact path="/article/:id" component={Article} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/@:username/favorites" component={Profile} />
          <Route exact path="/@:username" component={Profile} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
