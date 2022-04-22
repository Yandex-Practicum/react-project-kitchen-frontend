import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {NavigationView} from "./navigation-view";

const Header: FunctionComponent<{appName: string, currentUser: {username: string}}> = (props) => {
  return (
    <nav className="navbar navbar-light">
      <header className="container">

        <Link to="/" className="navbar-brand">
          {props.appName.toLowerCase()}
        </Link>

        <NavigationView currentUser={props.currentUser}/>

      </header>
    </nav>
  );
}

export default Header;