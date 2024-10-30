import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProdHouse from './components/ProdHouse';
import MovieList from './components/MovieList';
import GenreMovieList from './components/GenreMovieList';
import Footer from './components/Footer'; 
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Slider /><ProdHouse /><MovieList /><GenreMovieList /><Footer /></>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;