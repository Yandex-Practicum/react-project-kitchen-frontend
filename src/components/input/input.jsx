import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {InputWrapper, InputElement, InputLabel, ImgPreview} from './style.js';
import ImageView from '../image-view';
import clipImage from '../../images/clip.svg';

function CustomInput({className, type, placeholder, inputRef, onKeyUp, ...props}) {
  const isFileUpload = type === "file";
  const [focus, setFocus] = useState(false);
  const [img, setImg] = useState('');
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    if (inputRef && inputRef.current){  
      const inRef =  inputRef.current;
      const files = inRef.files[0];
      if (isFileUpload && inRef) {
        if (inputRef.files && inputRef.files.length > 0) {          
          const FR = new FileReader();
          FR.addEventListener("load", function(e) {
            setImg(e.target.result);
            if (inputRef.current) {
              inputRef.current.files = inputRef.files;
            }
          });
          FR.readAsDataURL(inputRef.files[0]);
        } else if (files) {
          const FR = new FileReader();
          FR.addEventListener("load", function(e) {
            setImg(e.target.result);
          });
          FR.readAsDataURL(files);
        }
      }
    }
  }, [props.value, inputRef]);
  return (
    <div className={className} onBlur={() => setFocus(false)}>
      <InputWrapper
        isFocus={focus}
        className="pr-6 pl-6 pt-2 pb-2"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.target.children[1].focus();
            setFocus(true);
          }
        }}>
        <InputLabel
          type={type}
          isFocus={focus}
          notEmpty={Boolean(props.value)}
          className="text text_type_main-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.target.parentNode.children[1].focus();
              setFocus(true);
            }
          }}>{placeholder}</InputLabel>
        <InputElement
          onKeyUp={onKeyUp}
          ref={inputRef}
          type={type}
          className="text text_type_main-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.target.focus();
              setFocus(true);
            }
          }}
          {...props}/>
        {isFileUpload && <React.Fragment>
          {img && <ImgPreview
                    src={img}
                    onClick={() => setShowImage(true)} />}
          <ImgPreview
            src={clipImage}
            onClick={() => inputRef.current.click()} />
        </React.Fragment>}
      </InputWrapper>
      {showImage && <ImageView
        onClose={() => setShowImage(false)}
        img={img}/>
      }
    </div>
  );
}

CustomInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,    
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onKeyUp: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default CustomInput;
