import React from 'react'
import GenreList from '../constants/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenreList.genre.map((item, index) => index<=4&&(
            <div className='p-5 pb-0 md:p-14 md:pb-1 md:pt-7'>
                <h2 className='text-xl text-slate-100 font-semibold'>{item.name}</h2>
                <MovieList genreID={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList