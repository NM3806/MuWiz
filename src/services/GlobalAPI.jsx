import axios from "axios";

const api_key = import.meta.env.VITE_TMDB_API_KEY; // Using environment variable for the API key
const movieBaseURL = "https://api.themoviedb.org/3";
const movieByGenreBaseURL = `${movieBaseURL}/discover/movie?api_key=${api_key}`;

const GlobalAPI = {
  getTrending: () => {
    return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
  },
  
  getMoviesByGenreID: (id) => {
    return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
  },

  searchMovies: (query) => {
    return axios.get(`${movieBaseURL}/search/movie?api_key=${api_key}&query=${query}`);
  }
};

export default GlobalAPI;
