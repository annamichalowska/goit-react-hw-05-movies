import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { SharedLayout } from './SharedLayout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
