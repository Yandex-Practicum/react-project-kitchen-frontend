import React from 'react';

const Banner = ({ token }) => {
  if (token) {
    return null;
  }
  return (
    <div className='banner'>
      <div className='container'>
        <h1 className='logo-font'>Проектная кухня</h1>
        <p>Место, где готовится новый опыт</p>
      </div>
    </div>
  );
};

export default Banner;
