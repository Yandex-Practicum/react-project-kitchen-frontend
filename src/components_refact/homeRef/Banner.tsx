import { FC } from 'react';

const Banner : FC<{ appName: string, token: string }> = ({ appName, token }) => (
  token
    ? null
    : (
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>
            {appName.toLowerCase()}
          </h1>
          <p>Your community project starter pack.</p>
        </div>
      </div>
    )
);

export default Banner;
