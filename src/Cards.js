import './Cards.css';
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCards/MovieCard';
import axios from 'axios';
import Button from './Button/Button';

const Cards = (props) => {
  const [comingSoon, setComingSoon] = useState(false);
  const onChangeMovieCard = () => {
    setComingSoon(!comingSoon);
  };
  return (
    <div>
      <h3 className="heading">Movies</h3>
      <button className="btn" onClick={onChangeMovieCard}>
        Now Showing
      </button>
      {comingSoon ? <MovieCard /> : <MovieCard />}
    </div>
  );
};

export default Cards;
