import { Routes, Route } from 'react-router-dom';
//import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies/Movies';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews';

//const Home = lazy(() => import('../pages/Home'));
//const Movies = lazy(() => import('../pages/Movies'));
//const MovieDetails = lazy(() => import('../pages/MovieDetails'));
//const Cast = lazy(() => import('./Cast'));
//const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
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
