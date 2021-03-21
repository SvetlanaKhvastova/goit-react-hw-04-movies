import axios from 'axios';
let key = `ca68a7af060f5e9f7b7eefce94561f3e`;
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

async function getTrending() {
  let url = `trending/movie/week?api_key=${key}`;
  const response = await axios.get(url);
  const data = await response.data;
  const results = await data.results;
  // console.log(results);
  return results;
}

async function searchMovies(search) {
  let url = `search/movie?query=${search}&api_key=${key}`;
  const response = await axios.get(url);
  const data = await response.data;
  const results = await data.results;
  // console.log(results);
  return results;
}

async function getMovieDetails(movieId) {
  let url = `movie/${movieId}?api_key=${key}`;
  const response = await axios.get(url);
  const data = await response.data;
  // console.log(data);
  return data;
}

async function getMovieCredits(movieId) {
  let url = `movie/${movieId}/credits?api_key=${key}`;
  const response = await axios.get(url);
  const data = await response.data;
  const cast = await data.cast;
  // console.log(cast);
  return cast;
}

async function getMovieReviews(movieId) {
  let url = `movie/${movieId}/reviews?api_key=${key}`;
  const response = await axios.get(url);
  const data = await response.data;
  const results = await data.results;
  // console.log(results);
  return results;
}

const services = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default services;
