
import React, { useState, useEffect } from 'react';
import { instance } from '../APIs/config';
import MovieCard from '../components/MovieCard';
import { CardGroup, Form, Button } from 'react-bootstrap';
import { useLanguage } from '../context/language';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { language } = useLanguage();

  useEffect(() => {
    const endpoint = searchTerm
      ? `/search/movie?query=${searchTerm}`
      : '/movie/popular';
    instance
      .get(endpoint, { params: { page, language } })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  });


  return (
    <>
      <Form className="mx-auto my-3" style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3 mt-3">
          <Form.Control
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form.Group>
      </Form>
      <CardGroup className="mx-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </CardGroup>
      <div className="text-center my-3">
        <Button onClick={() => setPage((prevPage) => prevPage - 1)}>Prev</Button>
        <Button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</Button>
      </div>
    </>
  );
};

export default MovieList;