import React, { FC } from "react";
import { useSelector } from "react-redux";
import Banner from "./Home/Banner";
import Navigation from "./Navigation";

const Header: FC = () => {
  const { appName, token } = useSelector((store: any) => store.common);

  return (
    <header>
      <Navigation />
      <Banner token={token} appName={appName} />
    </header>
  );
};

export default Header;
