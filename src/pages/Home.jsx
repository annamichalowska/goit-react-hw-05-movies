import { useState, useEffect } from 'react';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
    const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
