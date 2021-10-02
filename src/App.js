import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';

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
      <Banners />
      <Cards />
    </div>
  );
}
