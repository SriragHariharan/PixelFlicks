import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function FilmDetails({poster, title, overview, rating, releaseDate, runtime, genres}) {
  return (
        <div className="grid grid-cols-3 gap-0 lg:m-10 mt-10 ml-6" >
            {/* image banner */}
            <div className="col-span-3 lg:col-span-1">
                <img src={TMDB_IMG_CDN + poster} alt="" className="w-44 place-items-center lg:w-auto lg:h-[500px] border-white lg:border-8" />
            </div>
            
            {/* movie details */}
            <div className="col-span-3 lg:col-span-2 ">
                <div className="text-white text-base lg:text-6xl font-bold">{title}</div>
                <div className="grid grid-cols-3 lg:flex mt-4">
                    <div className="text-white p-2 text-xs lg:text-base">{releaseDate}</div>
                    <div className="text-white p-2 text-xs lg:text-base">
                        {
                            genres?.map(g => <span className='mr-1'> {g?.name}</span> )
                        }
                    </div>
                    <div className="text-white p-2 font-bold">{runtime} min</div>
                </div>
                <div>
                    <i className="fa-regular fa-heart text-xl mt-0 text-red-500"></i>
                    <span className="text-xl text-red-400 ml-2">{rating} <small>ratings</small></span>
                </div>
                <div className="text-white text-xl my-2 md:my-6 md:text-4xl">Overview</div>
                <div className="text-white text-sm md:text-2xl">
                    {overview}
                </div>
            </div>
        </div>  
    )
}

export default FilmDetails