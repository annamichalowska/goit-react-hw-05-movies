import { Link, Outlet, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';

function MovieDetails({ movie }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies/';

  if (!movie) {
    return <p>Please select a movie.</p>;
  }

  return (
    <div>
      <BackLink to={backLinkHref}>Back to movie list</BackLink>
      <div>
        <img
          width={150}
          height={220}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h1>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p>User score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {/* NIE DZIAŁA */}
        {/* <p>{movie.genres.map(genre => genre.name).join(' ')}</p> */}
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/${movie.id}/cast`,
                state: {
                  from: {
                    location,
                  },
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/${movie.id}/reviews`,
                state: {
                  from: {
                    location,
                  },
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
export default MovieDetails;
