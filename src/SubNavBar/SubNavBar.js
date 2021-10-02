import React from 'react';

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
    </ul>
  );
};
export default SubNavBar;
