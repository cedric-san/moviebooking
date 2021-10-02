import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';
import SubNavBar from './SubNavBar/SubNavBar';

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
      <NavBar title={navbarhead} formChange={formChange} />
      <SubNavBar />
      <Banners />
      <Cards />
    </div>
  );
}
