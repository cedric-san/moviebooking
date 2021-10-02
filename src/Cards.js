import './Cards.css';
import React from 'react';
import MovieCard from './MovieCards/MovieCard';

const Cards = (props) => {
  const dataBase = props.movieCollection;

  return (
    <div>
      <h3 className="heading">Movies</h3>
      <MovieCard />
      <div>
        <ul>
          {dataBase.map((movie) => {
            return (
              <li>
                <div>
                  {movie.isAvailable ? (
                    <div className="movieCards" />
                  ) : (
                    <div
                      className="movieCards"
                      style={{ backgroundColor: 'red' }}
                    />
                  )}

                  <div>
                    <h4>{movie.title}</h4>
                    <p>
                      {movie.genre} <span>{movie.isAvailable}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
