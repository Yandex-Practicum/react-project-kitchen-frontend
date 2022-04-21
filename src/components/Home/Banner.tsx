import React from 'react'

type TBannerProps = {
  appName: string,
  token: string | null
}

const Banner: React.FC<TBannerProps> = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Your community project starter pack.</p>
      </div>
    </div>
  );
};

export default Banner;
