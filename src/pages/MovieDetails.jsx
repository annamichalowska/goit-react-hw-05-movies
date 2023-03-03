import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { useState, useEffect } from 'react';
import { getMovieDetails, IMAGE_URL } from 'components/fetchAPI';

function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies/';
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await getMovieDetails(movieId);

      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  return (
    <div>
      {!movie ? (
        <div>This movie is not found</div>
      ) : (
        <>
          <BackLink to={backLinkHref}>Back to movie list</BackLink>
          <div>
            <img
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              width={150}
              height={220}
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
            <p>{`${movie.genres.map(genre => genre.name).join(', ')}`}</p>
          </div>
        </>
      )}

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link
              to="reviews"
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
