import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';
import SubNavBar from './SubNavBar/SubNavBar';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import RegisterForm from './RegisterForm/RegisterForm';
import { useState } from 'react';

import Banners from './Banners/Banners';
export default function App() {
  const [form, updateForm] = useState(false);

  const formChange = () => {
    updateForm(!form);
  };

  const navbarhead = {
    title: 'My Movie Booking',
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar title={navbarhead} formChange={formChange} />
        <SubNavBar />
        <Banners />
        <Cards />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
