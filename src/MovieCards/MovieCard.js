import React from 'react';
import './MovieCard.css';
const movieCard = (props) => {
  const dataBase = props.movieCollection;
  const imgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      <ul>
        {dataBase.map((movie, index) => {
          return (
            <li key={index}>
              <div>
                <div className="movieCards">
                  <img
                    className="imgSize"
                    src={`${imgUrl}${props.pic}`}
                    alt=""
                  />
                </div>

                <div>
                  <h4>{props.title}</h4>
                  <p>
                    {props.genres} <span>{movie.isAvailable}</span>
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
