import React from 'react';
import './navbarstyle.css';
import Button from './Button/Button';
const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">{props.title.title}</a>
        <Button title="Log In/Sign Up" />
        <form class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search Movie"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
