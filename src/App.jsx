import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProdHouse from './components/ProdHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  return (
    <div className='bg-slate-900 w-full h-screen'>
      <Header/>
      <Slider/>
      <ProdHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App