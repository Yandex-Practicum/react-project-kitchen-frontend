import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ImageWrapper} from './style.js';
import ImageView from '../image-view';

function Image({className, img}) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className={className} style={{display: 'flex', justifyContent: 'center'}}>
      <ImageWrapper src={`data:image/png;base64,${img}`} alt="img" onClick={() => setShowImage(true)} />
      {showImage && <ImageView
        onClose={() => setShowImage(false)}
        img={`data:image/png;base64,${img}`}/>
      }
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string
};

export default Image;
