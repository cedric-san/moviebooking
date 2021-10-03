import React from 'react';
import './navbarstyle.css';
import Button from './Button/Button';
import Form from './Form/Form';


const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">{props.title.title}</a>
        <Button title="Log In/Sign Up" />
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search for Movies..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
