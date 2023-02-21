import { useState, useEffect } from 'react';
import { MovieDetails } from './MovieDetails';

export const Home = ({ movieId }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
    const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

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
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id} onClick={() => handleMovieClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div>
          <div>
            <img
              width={150}
              height={220}
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          </div>
          <div>
            <h2>
              {selectedMovie.title} ({selectedMovie.release_date.slice(0, 4)})
            </h2>
            <p>User score: nie wiem co to jest</p>
            <h3>Overview</h3>
            <p>{selectedMovie.overview}</p>
            <h3>Genres</h3>
            {/* TO NIE DZIAŁA!!!!!! */}
            <p>
              {selectedMovie.genres &&
                selectedMovie.genres.map(genre => genre.name).join(', ')}
            </p>
            <MovieDetails />
          </div>
        </div>
      )}
    </div>
  );
};
