import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

function MovieCard({movieDetails}) {

  return (
    <Link to={"../movie-details/"+ movieDetails?.id} className="w-40 m-4 rounded shadow-lg p-2 bg-neutral-900 hover:scale-105 hover:shadow-brand-red/20 transition-transform">
        <img src={TMDB_IMG_CDN + movieDetails?.poster_path} alt={movieDetails?.original_title + "film poster"} className="w-56 h-60 rounded" />
        <div className="text-left">
            <div className="text-xs text-white font-semibold mb-2 mt-2 truncate">{movieDetails?.original_title}</div>
        </div>
        <div className="px-2">
            <span className="text-xs text-brand-red">
                <i className="fa-regular fa-heart"></i> &nbsp;
                <p className='inline-block text-neutral-300'>Rating : {Math.floor(movieDetails?.vote_average) }</p>
            </span>
        </div>
    </Link>
  )
}

export default MovieCard
