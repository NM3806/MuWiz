import React from 'react'
const imgBaseURL = "https://image.tmdb.org/t/p/original"

function VrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 border-zinc-200 hover:border-2 rounded-lg cursor-pointer shadow-lg hover:shadow-black transition-all duration-150 ease-in'>
        <img src={imgBaseURL+movie.poster_path} className='w-24 md:w-52 object-cover rounded-lg'/>
        <h3 className='w-24 md:w-52 p-1 text-slate-200'>{movie.title}</h3>
    </section>
  )
}

export default VrMovieCard