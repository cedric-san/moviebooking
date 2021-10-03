import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieCard.css';

import './MovieCard.css';
const movieCard = (props) => {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [pic, setPic] = useState();
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);
  const [count, setCount] = useState(330);
  const baseUrl = `https://api.themoviedb.org/3/movie/${count}?api_key=7c9047007cc6ef342aa6ce8db6cb4851`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      const movieTitle = response.data;
      setTitle(movieTitle.title);
      setGenre(movieTitle.genres[0].name);
      setPic(movieTitle.poster_path);

      setMovie([
        ...movie,
        {
          title: movieTitle.title,
          genre: movieTitle.genres[0].name,
          pic: movieTitle.poster_path,
        },
      ]);
    });
  }, [count]);
  console.log(movie);
  const onChangeHandler = () => {
    setCount(count + 1);
  };
  const imgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      <ul>
        {movie.map((movie, index) => {
          return (
            <li key={index}>
              <div>
                <div className="movieCards">
                  <img className="imgSize" src={`${imgUrl}${pic}`} alt="" />
                </div>

                <div>
                  <h4 style={{ width: '100px' }}>{movie.title}</h4>
                  <p>{movie.genre} </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="btn nextBtn" onClick={onChangeHandler}>
        {'>'}
      </button>
    </div>
  );
};
export default movieCard;
