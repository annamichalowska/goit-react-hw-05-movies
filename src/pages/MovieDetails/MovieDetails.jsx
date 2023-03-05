import { Link, Outlet, useParams } from 'react-router-dom';
import { Image, Container } from './MovieDetails.styled';
import { Suspense } from 'react';
import { BackLink } from '../../components/BackLink';
import { useState, useEffect } from 'react';
import { getMovieDetails, IMAGE_URL } from 'components/fetchAPI';

function MovieDetails() {
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
          <BackLink>Go back</BackLink>
          <Container>
            <Image src={IMAGE_URL + movie.poster_path} alt={movie.title} />

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
          </Container>
        </>
      )}

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default MovieDetails;
