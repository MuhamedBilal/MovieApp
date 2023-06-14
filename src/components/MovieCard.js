import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';


const MovieCard = ({ movie}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div>
      <Card
        style={{width: '23rem',height: '42rem',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',position:'relative'
        }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />

        <Card.Body>
          <Card.Title className="d-flex justify-content-center">{movie.title}</Card.Title>
          <div className="d-flex justify-content-center align-items-center">
           
              <Button variant="primary" as={Link} to={`/movie/${movie.id}`}>
                View Details
              </Button>
              <span className="my-1 mx-1 mb-2"
                onClick={handleToggleFavorite}
                style={{ fontSize: '2.5rem', color: isFavorite ? 'gold' : 'gray' }}
              >
                {isFavorite ? '★' : '☆'}
              </span>
          
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;