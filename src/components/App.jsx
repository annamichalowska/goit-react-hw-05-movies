import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { SharedLayout } from './SharedLayout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />}>
          <Route path="/Movies/:movieId/Cast" element={<Cast />} />
          <Route path="/Movies/:movieId/Reviews" element={<Reviews />} />
        </Route>
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />}>
          <Route path="/Movies/:movieId/Cast" element={<Cast />} />
          <Route path="/Movies/:movieId/Reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
