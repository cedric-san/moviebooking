import './Cards.css';
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCards/MovieCard';

const Cards = (props) => {
  return (
    <div>
      <h3 className="heading">Movies</h3>

      <MovieCard />
    </div>
  );
};

export default Cards;
