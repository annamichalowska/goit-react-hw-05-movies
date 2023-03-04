import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/fetchAPI';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
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
    </div>
  );
};
export default Home;