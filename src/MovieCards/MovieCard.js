import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieCard.css';

import './MovieCard.css';
const movieCard = (props) => {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [pic, setPic] = useState();
  const [movie, setMovie] = useState([]);
  const [count, setCount] = useState(330);
  const baseUrl = `https://api.themoviedb.org/3/movie/${count}?api_key=7c9047007cc6ef342aa6ce8db6cb4851`;
  const imgUrl = 'https://image.tmdb.org/t/p/w200';

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

  const onChangeHandler = () => {
    setCount(count + 1);
  };
  const dataBase = [
    {
      genre: 'Adventure',
      pic: '/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg',
      title: 'The Lost World: Jurassic Park',
    },
    {
      genre: 'Adventure',
      pic: '/xyxqgEuxmxOj3mZ3tPSzgqpCBi7.jpg',
      title: 'Jurassic Park III',
    },
    {
      genre: 'Action',
      pic: '/eKpK8FaQDpkgp3HHm3YrIDqUjWh.jpg',
      title: 'Inspector Gadget',
    },
    {
      genre: 'Drama',
      pic: '/qbYgqOczabWNn2XKwgMtVrntD6P.jpg',
      title: 'Once Upon a Time in the West',
    },
  ];
  console.log(dataBase[2].pic);

  return (
    <div>
      <ul>
        {dataBase.map((movie, index) => {
          console.log(movie.pic);
          return (
            <li key={index}>
              <div>
                <div className="movieCards">
                  <img
                    className="imgSize"
                    src={`${imgUrl}${movie.pic}`}
                    alt=""
                  />
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
