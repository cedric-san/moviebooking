import React from 'react';
import './MovieCard.css';
const movieCard = (props) => {
  const dataBase = props.movieCollection;
  return (
    <div>
      <img className="imgSize" src={props.img} alt="" />
      <ul>
        {dataBase.map((movie, index) => {
          return (
            <li key={index}>
              <div>
                <div className="movieCards">
                  <img
                    className="imgSize"
                    src={`https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80`}
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
