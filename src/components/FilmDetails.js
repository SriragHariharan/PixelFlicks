import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function FilmDetails({poster, title, overview, rating, releaseDate, runtime, genres}) {
  return (
        <div className="grid grid-cols-3 gap-0 lg:m-10 mt-10 ml-6" >
            {/* image banner */}
            <div className="col-span-3 lg:col-span-1">
                <img src={TMDB_IMG_CDN + poster} alt="" className="w-44 place-items-center rounded-lg shadow-lg shadow-black/50 lg:w-auto lg:h-[500px]" />
            </div>

            {/* movie details */}
            <div className="col-span-3 lg:col-span-2 pr-6">
                <div className="font-leo text-white text-2xl lg:text-6xl font-bold">{title}</div>
                <div className="flex flex-wrap items-center gap-x-2 mt-4 text-neutral-400 text-xs lg:text-base">
                    <span>{releaseDate}</span>
                    <span>&middot;</span>
                    <span className="font-bold">{runtime} min</span>
                </div>
                <div className='flex flex-wrap mt-4'>
                    {
                        genres?.map(g => (
                            <span key={g?.id} className='text-xs text-brand-red font-bold px-4 py-1 mr-1 mb-1 border border-brand-red rounded-3xl hover:bg-brand-red hover:text-white transition-colors'>{g?.name}</span>
                        ))
                    }
                </div>
                <div className="mt-4">
                    <i className="fa-regular fa-heart text-xl mt-0 text-brand-red"></i>
                    <span className="text-xl text-brand-red ml-2">{rating} <small className="text-neutral-400">ratings</small></span>
                </div>
                <div className="text-white font-semibold text-xl my-2 md:my-6 md:text-3xl">Overview</div>
                <div className="text-neutral-300 text-sm md:text-lg leading-relaxed">
                    {overview}
                </div>
            </div>
        </div>
    )
}

export default FilmDetails
