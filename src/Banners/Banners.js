import React from 'react';
import './Banners.css';

const Banners = (props) => {
  return (
    <div>
      <img
        src={`https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80`}
        alt="Responsive image"
        className="bannerStyle"
      />
    </div>
  );
};
export default Banners;
