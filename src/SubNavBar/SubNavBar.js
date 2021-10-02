import React from 'react';

const SubNavBar = (props) => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Homes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Movies
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Theatres
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Events
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Orders
        </a>
      </li>
    </ul>
  );
};

export default SubNavBar;
