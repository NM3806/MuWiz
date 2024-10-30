import React, { useEffect, useState, useRef } from 'react';
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import GlobalAPI from '../services/GlobalAPI';
import MovieCard from './MovieCard';
import VrMovieCard from './VrMovieCard';

function MovieList({ genreID, index_ }) {
    const [movieList, setMovieList] = useState([]);
    const [isScrollable, setIsScrollable] = useState(false);
    const element = useRef(null);

    useEffect(() => {
        getMoviesByGenreID();
    }, [genreID]);

    useEffect(() => {
        if (element.current) {
            setIsScrollable(element.current.scrollWidth > element.current.clientWidth);
        }
    }, [movieList]);

    const getMoviesByGenreID = () => {
        GlobalAPI.getMoviesByGenreID(genreID).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const slideRight = () => {
        if (element.current) {
            element.current.scrollLeft += 500;
        }
    };

    const slideLeft = () => {
        if (element.current) {
            element.current.scrollLeft -= 500;
        }
    };

    return (
        <div className="relative">
            {isScrollable && (
                <CiSquareChevLeft
                    onClick={slideLeft}
                    className={`text-[50px] text-slate-200 p-2 ml-[-20px] z-10 cursor-pointer hidden md:block absolute
                        ${index_ % 3 === 0 ? 'mt-36' : 'mt-16'}`}
                />
            )}
            
            <div ref={element} className="flex overflow-x-auto gap-8 pt-8 px-3 pb-8 scrollbar-hide scroll-smooth">
                {movieList.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index_ % 3 === 0 ? (
                            <VrMovieCard movie={item} />
                        ) : (
                            <MovieCard movie={item} />
                        )}
                    </React.Fragment>
                ))}
            </div>
            
            {isScrollable && (
                <CiSquareChevRight
                    onClick={slideRight}
                    className={`text-[50px] text-slate-200 hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 
                        ${index_ % 3 === 0 ? 'mt-36' : 'mt-12'}`}
                />
            )}
        </div>
    );
}

export default MovieList;
