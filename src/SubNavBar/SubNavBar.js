import React from 'react';
import Error from './Error';
import { Route, Switch, Link } from 'react-router-dom';
const SubNavBar = (props) => {
  return (
    <>
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
          <Link to="/event" className="nav-link" href="#">
            Events
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/event" component={Error} />
      </Switch>
    </>
  );
};
export default SubNavBar;
