import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY;// Used environment variable for the API key

const movieByGenreBaseURL = `${movieBaseURL}/discover/movie?api_key=${api_key}`;

const getTrending = () => {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
};

const getMoviesByGenreID = (id) => {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
};

export default { getTrending, getMoviesByGenreID};
