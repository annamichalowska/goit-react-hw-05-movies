//import { MovieDetails } from "./MovieDetails";
import { useState } from 'react';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  };

  return (
    <main>
      <h1>Movie search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {/* <MovieDetails /> */}
    </main>
  );
};
