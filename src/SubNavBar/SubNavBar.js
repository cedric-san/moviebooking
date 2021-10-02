import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

const SubNavBar = (props) => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default SubNavBar;
