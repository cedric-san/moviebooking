import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';
import SubNavBar from './SubNavBar/SubNavBar';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
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
