import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextAreaWrapper, TextAreaElement, TextAreaLabel} from './style.js';

function TextArea({className, placeholder, ...props}) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={className} onBlur={() => setFocus(false)}>
      <TextAreaWrapper
        isFocus={focus}
        className="pr-6 pl-6 pt-2 pb-2"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.target.children[0].focus();
            setFocus(true);
          }
        }}>
        <TextAreaLabel
          isFocus={focus}
          notEmpty={Boolean(props.value)}
          className="text text_type_main-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.target.parentNode.children[1].focus();
              setFocus(true);
            }
          }}>{placeholder}</TextAreaLabel>
        <TextAreaElement
          className="text text_type_main-default"
          {...props}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.target.focus();
              setFocus(true);
            }
          }}/>
      </TextAreaWrapper>
    </div>
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextArea;
