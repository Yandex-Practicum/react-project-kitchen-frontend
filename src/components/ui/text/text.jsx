import React from "react";
import styles from './text.module.css'

const { h1, h2, headline, text, textLine, caption } = styles;

export const TYPES = {
  H1: h1,
  H2: h2,
  HEADLINE: headline,
  TEXT: text,
  TEXTLINE: textLine,
  CAPTION: caption,
}

function Text(props) {
  const { type, children } = props;

  return (
    <>
      <p className={type}>{children}</p>
    </>
  );
}

export default Text;