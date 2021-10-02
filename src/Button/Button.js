import React from 'react';
import './Button.css';
const Button = (props) => {
  const nxtbtn = props.className;

  return <button className={`btn ${nxtbtn}`}>{props.title}</button>;
};

export default Button;
