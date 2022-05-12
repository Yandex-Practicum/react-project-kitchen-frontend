import React, { FC } from "react";
import { useSelector } from "react-redux";
import Banner from "./Home/Banner";
import Navigation from "./Navigation";
import { HeaderContainer } from "./StyledComponents/headerStyles";

const Header: FC = () => {
  const { appName, token } = useSelector((store: any) => store.common);

  return (
    <HeaderContainer>
      <Navigation />
      <Banner token={token} appName={appName} />
    </HeaderContainer>
  );
};

export default Header;
