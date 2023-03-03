import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '5fcd4365d493d0f97c8c4d9a62c7577d';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async stringToSearch => {
  const queryString = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${API_KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${API_KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

export const getMovieReviews = async movieId => {
  const queryString = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};
