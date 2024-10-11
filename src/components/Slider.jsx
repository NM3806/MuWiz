import React, {useEffect, useState, useRef} from 'react'
import GlobalAPI from '../services/GlobalAPI'
import {CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
const imgBaseURL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const reference=useRef();
    useEffect(()=>{
        getTrendingMovies();
    }, []) 
    {/* passing empty array [] ensures that the API is called only once when the component mounts */}

    const getTrendingMovies=()=>{
        GlobalAPI.getTrending()
          .then(response=>{
              console.log(response.data.results);
              setMovieList(response.data.results)
          })
    }

    const slideRight=(element) => {
      element.scrollLeft+=screenWidth-92
    }
    const slideLeft=(element) => {
      element.scrollLeft-=screenWidth-92
    }

  return (
    <div>
      <CiSquareChevLeft className='hidden md:block text-white text-[35px] absolute mx-8 mt-[160px] 
      cursor-pointer' onClick={()=>slideLeft(reference.current)}/>
      <CiSquareChevRight className='hidden md:block text-white text-[35px] absolute mx-8 mt-[160px] 
      cursor-pointer right-0' onClick={()=>slideRight(reference.current)}/>

      <div className='flex overflow-x-auto w-full px-14 py-4 pb-8 scrollbar-hide scroll-smooth' ref={reference}>
        {movieList.map((item, index)=>{
          return (<img key={index} src={imgBaseURL+item.backdrop_path} 
            className='min-w-full md:h-80 object-cover object-left-top mr-5 rounded-md hover:border-4  
            border-slate-200 transition-all duration-150 ease-in'/>)
        })}
      </div>
    </div>
  )
}

export default Slider