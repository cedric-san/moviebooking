import React from 'react';
import './Button.css';
const Button = (props) => {
  return <button className="btn login">{props.title}</button>;
};

export default Button;
