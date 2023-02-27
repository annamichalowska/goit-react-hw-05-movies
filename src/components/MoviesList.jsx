import { Link, useLocation } from 'react-router-dom';

function MoviesList({ movies, onMovieClick }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} onClick={() => onMovieClick(movie)}>
          <Link
            to={{
              pathname: `/${movie.id}`,
              state: {
                from: {
                  location,
                },
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
