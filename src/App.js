import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';
import Form from './Form/Form';
import RegisterForm from './RegisterForm/RegisterForm';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Banners from './Banners/Banners';
export default function App() {
  const [form, updateForm] = useState(false);
  const [title, setTitle] = useState('');
  const [pic, setPic] = useState('');
  const [count, setCount] = useState(300);

  const baseUrl = `https://api.themoviedb.org/3/movie/${count}?api_key=7c9047007cc6ef342aa6ce8db6cb4851`;
  const imgUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      const movieTitle = response.data;
      console.log(response.data);
      setTitle(movieTitle.title);
      setPic(movieTitle.poster_path);
    });
  });
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
