import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import GlobalAPI from '../services/GlobalAPI';
import MovieCard from './MovieCard';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
      if (query.trim()) {
        GlobalAPI.searchMovies(query).then(response => {
          setResults(response.data.results);
        });
      }
    };

  return (
    <div className="p-4">
      <div className='flex justify-center p-1 pb-4'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded ml-2">
          <CiSearch size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            className="border border-gray-200 p-2 hover:shadow-lg transform transition-transform duration-150 ease-in-out" 
          />
        ))}
      </div>
    </div>
  );
}

export default Search