import React from 'react'
const imgBaseURL = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  return (
    <>
        <img src={imgBaseURL+movie.backdrop_path} className='w-24 md:w-52 rounded-lg hover:border-[3px] 
        cursor-pointer border-zinc-200 hover:scale-105 transition-all duration-150 ease-in '/>
    </>
  )
}

export default MovieCard