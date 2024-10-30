import React from 'react';
const imgBaseURL = "https://image.tmdb.org/t/p/original";
const placeholderURL = "https://via.placeholder.com/300x169?text=No+Image";

function MovieCard({ movie, className = '' }) {
  const imgSrc = movie.backdrop_path ? imgBaseURL+movie.backdrop_path : placeholderURL;

  return (
    <section className={`hover:scale-110 border-zinc-200 hover:border-2 rounded-lg cursor-pointer 
    shadow-lg hover:shadow-black transition-all duration-150 ease-in ${className}`}>
      <img src={imgSrc} alt={movie.title} className='w-24 md:w-52 object-cover rounded-lg'/>
      <h3 className='w-24 md:w-52 p-1 text-slate-200'>{movie.title}</h3>
    </section>
  );
}

export default MovieCard;