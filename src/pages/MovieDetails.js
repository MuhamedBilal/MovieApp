import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../APIs/config';
import { useLanguage } from '../context/language';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { language } = useLanguage();

  useEffect(() => {
    instance
      .get(`/movie/${id}`, {params:{language}})
      .then((response) => setMovie(response.data))  //cause i'm retriving a single movie details but in the list cause I'm retriving an array 
      .catch((error) => console.log(error));
  })

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <img alt="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
      <img alt="landscape poster" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}></img>
    </div>
  );
};

export default MovieDetails;