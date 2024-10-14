import React from 'react'

import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwars from './../assets/images/starwars.png'

import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import natgeoV from './../assets/videos/natgeo.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starwarsV from './../assets/videos/star-wars.mp4'

function ProdHouse() {
    const ProdHouseList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: marvel, video: marvelV },
        { id: 3, image: nationalG, video: natgeoV },
        { id: 4, image: pixar, video: pixarV },
        { id: 5, image: starwars, video: starwarsV },
    ];

  return (
    <div className='flex gap-2 md:gap-5 px-3 md:px-14 md:py-5'>
        {ProdHouseList.map((item)=>(
            <div className='relative bg-slate-800 border-2 border-slate-600 rounded-xl hover:scale-110 transition-all duration-200 cursor-pointer 
            shadow-lg shadow-black overflow-hidden'>
                <video src={item.video} autoPlay loop playsInline muted
                className='absolute top-0 left-0 h-full w-full object-cover rounded-xl opacity-0 hover:opacity-50 transition-opacity duration-300 z-0'/>
                <img src={item.image} className='w-full object-cover rounded-xl z-[1]'/>
            </div>
        ))}
    </div>
  )
}

export default ProdHouse