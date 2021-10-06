import React, { useState } from 'react';
import './navbarstyle.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isLogin, setIsLogin] = useState('Log In/Sign Up');

  const onChangeHandler = () => {
    setIsLogin('Logout');
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">{props.title.title}</a>
        <Link to="/form">
          <button onClick={onChangeHandler} className="btn">
            {isLogin}
          </button>
        </Link>
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
