import React, { useEffect, useState, useRef } from 'react'
import {CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import GlobalAPI from '../services/GlobalAPI';
import MovieCard from './MovieCard';

function MovieList({genreID}) {
    const [movieList, setMovieList]=useState([])
    const element=useRef(null);
    useEffect(()=>{
        getMoviesByGenreID();
    }, [genreID])

    const getMoviesByGenreID=()=>{
        GlobalAPI.getMoviesByGenreID(genreID).then(resp=>{
            setMovieList(resp.data.results) 
        })
    }
    
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div>
        <CiSquareChevLeft onClick={()=>slideLeft(element.current)} 
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>

        <div className='flex overflow-x-auto gap-8 pt-3 px-3 pb-1 scrollbar-hide scroll-smooth '>
            {movieList.map((item, index)=>(
                <MovieCard key={item.id} movie={item}/>
            ))}
        </div>

        <CiSquareChevRight onClick={()=>slideRight(element.current)}
            className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
        
    </div>
  )
}

export default MovieList