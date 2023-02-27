import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList';
import MovieDetails from '../pages/MovieDetails';
import { useState, useEffect } from 'react';

const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      const response = await fetch(
        `${API_URL}?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    if (query !== '') {
      searchMovies();
    }

    if (query === '') {
      searchMovies('');
    }
  }, [query]);

  const handleMovieClick = movie => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <SearchBox query={query} setQuery={setQuery} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : movies.length > 0 ? (
        <MoviesList movies={movies} onMovieClick={handleMovieClick} />
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
};
