import { useState, useEffect } from 'react';
import MovieDetails from '../pages/MovieDetails';
import MoviesList from 'components/MoviesList';

const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

export const Home = ({ movieId }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  const handleMovieClick = movie => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : popularMovies.length > 0 ? (
        <MoviesList movies={popularMovies} onMovieClick={handleMovieClick} />
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
};
