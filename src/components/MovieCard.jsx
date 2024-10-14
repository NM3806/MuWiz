import React from 'react'
const imgBaseURL = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  return (
    <section className='hover:scale-110 border-zinc-200 hover:border-2 rounded-lg cursor-pointer shadow-lg hover:shadow-black transition-all duration-150 ease-in'>
        <img src={imgBaseURL+movie.backdrop_path} className='w-24 md:w-52 object-cover rounded-lg'/>
        <h2 className='w-24 md:w-52 p-1 text-slate-200'>{movie.title}</h2>
    </section>
  )
}

export default MovieCard