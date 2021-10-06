import React from 'react';
import Error from './Error';

import { Link } from 'react-router-dom';
const SubNavBar = (props) => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active" href="#">
            Homes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movie" className="nav-link" href="#">
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/theatres" className="nav-link" href="#">
            Theatres
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/event" className="nav-link" href="#">
            Events
          </Link>
        </li>
      </ul>
    </>
  );
};
export default SubNavBar;
