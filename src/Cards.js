import './Cards.css';
import React from 'react';
import MovieCard from './MovieCards/MovieCard';

const Cards = (props) => {
  const movieDataBase = [
    { title: 'Tenent', genre: 'Thriller', isAvailable: true, grade: 'Good' },
    { title: 'Inception', genre: 'Thriller', isAvailable: true },
    { title: 'God Father', genre: 'Drama', isAvailable: false },
    { title: 'The Dark Knight', genre: 'Drama', isAvailable: true },
    { title: 'Shutter Island', genre: 'Drama', isAvailable: false },
  ];

  return (
    <div>
      <h3 className="heading">Movies</h3>
      <MovieCard movieCollection={movieDataBase} />
    </div>
  );
};

export default Cards;
