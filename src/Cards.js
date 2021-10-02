import './Cards.css';
import React from 'react';

const Cards = (props) => {
  const dataBase = props.movieCollection;

  return (
    <div>
      <h3 style={{ backgroundColor: '#BEBEBE', padding: '10px' }}>
        {props.cardTitle} -------------------{' '}
        <span style={{ color: 'blue' }}>Blue</span>-Available{'  '}
        <span style={{ color: 'red' }}>Red</span>-Not Available
      </h3>
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
