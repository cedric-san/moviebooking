import React from 'react';
import Form from '../Form/Form';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const SubNavBar = (props) => {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Homes
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Movies
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Theatres
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Events
        </a>
      </li>
      <BrowserRouter>
        <Route path="/form" component={Form}></Route>
      </BrowserRouter>
    </ul>
  );
};
export default SubNavBar;
