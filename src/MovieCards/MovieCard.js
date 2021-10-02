import React from 'react';
import './MovieCard.css';
const movieCard = (props) => {
  const dataBase = props.movieCollection;
  return (
    <div>
      <ul>
        {dataBase.map((movie) => {
          return (
            <li>
              <div>
                <div className="movieCards">
                  <img
                    className="imgSize"
                    src={`https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80`}
                    alt=""
                  />
                </div>

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
  );
};
export default movieCard;
