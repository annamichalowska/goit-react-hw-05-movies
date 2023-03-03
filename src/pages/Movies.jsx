import { Form, Input } from './Movies.styled';
import { useState, useEffect } from 'react';
import { searchMovies } from 'components/fetchAPI';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieToFind, setMovieToFind] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchString = new URLSearchParams(location.search).get('query');
    console.log('searchString:', searchString);

    if (searchString) {
      const getMovies = async () => {
        const { results } = await searchMovies(searchString);

        setMovies(results);
        setMovieToFind(searchString);

        console.log(searchString);
      };

      getMovies();
    }
  }, [location.search]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (movieToFind.trim()) {
      const { results } = await searchMovies(movieToFind);

      setMovies(results);
      setMovieToFind('');

      if (results.length === 0) {
        alert('There is no such movie');
      }
      console.log('results:', results);
      navigate({
        pathname: '/movies',
        search: `/?query=${movieToFind}`,
        state: { from: location },
      });
    }
  };

  console.log('movie to find:', movieToFind);
  console.log('movies:', movies);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={movieToFind}
          onChange={event => setMovieToFind(event.target.value)}
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </Form>

      {movies && movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${`${id}`}`,
                  state: {
                    from: {
                      location,
                    },
                  },
                }}
              >
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
