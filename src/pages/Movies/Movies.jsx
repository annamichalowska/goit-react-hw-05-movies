import { Form, Input, Button } from './Movies.styled';
import { useState, useEffect } from 'react';
import { searchMovies } from 'components/fetchAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieToFind, setMovieToFind] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        const { results } = await searchMovies(query);
        setMovies(results);
        if (results.length === 0) {
          return alert('There is no such movie');
        }
      };
      getMovies();
    }
    if (query === '') {
      alert('Your query is empty');
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: movieToFind });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={movieToFind}
          onChange={event => setMovieToFind(event.target.value)}
          placeholder="Search movie"
        />
        <Button type="submit">Search</Button>
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

Movies.displayName = 'Movies';

export default Movies;
