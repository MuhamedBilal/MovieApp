
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';


const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Favorites</h1>
      <Row>
        {favorites.map(movie => (
          <Col key={movie.id} sm={11} md={4} lg={3} >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorites;
