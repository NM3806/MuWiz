import React, { useEffect, useState, useRef } from 'react'
import {CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import GlobalAPI from '../services/GlobalAPI';
import MovieCard from './MovieCard';
import VrMovieCard from './VrMovieCard';

function MovieList({genreID, index_}) {
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
    <div className='relative'>
        <CiSquareChevLeft onClick={()=>slideLeft(element.current)} 
            className={`text-[50px] text-slate-200 p-2 ml-[-20px] z-10 cursor-pointer hidden md:block absolute
                        ${index_%3==0? 'mt-36' : 'mt-12'}`
            }/>

        <div ref={element} className='flex overflow-x-auto gap-8 pt-4 px-3 pb-8 scrollbar-hide scroll-smooth '>
            {movieList.map((item, index)=>(
                <>
                    {index_%3==0 ? <VrMovieCard movie={item}/> : <MovieCard key={item.id} movie={item}/>}
                </>
            ))}
        </div>

        <CiSquareChevRight onClick={()=>slideRight(element.current)}
            className={`text-[50px] text-slate-200 hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 
                        ${index_%3==0? 'mt-36' : 'mt-12'}`}/> 
        
    </div>
  )
}

export default MovieList