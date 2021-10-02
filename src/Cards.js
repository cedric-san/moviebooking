import './Cards.css';
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCards/MovieCard';
import axios from 'axios';

const Cards = (props) => {
  const movieDataBase = [
    { title: 'Tenent', genre: 'Thriller', isAvailable: true, grade: 'Good' },
    { title: 'Inception', genre: 'Thriller', isAvailable: true },
    { title: 'God Father', genre: 'Drama', isAvailable: false },
    { title: 'The Dark Knight', genre: 'Drama', isAvailable: true },
    { title: 'Shutter Island', genre: 'Drama', isAvailable: false },
  ];
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

  return (
    <div>
      <h3 className="heading">Movies</h3>
      <MovieCard movieCollection={movieDataBase} title={title} img={pic} />
    </div>
  );
};

export default Cards;
