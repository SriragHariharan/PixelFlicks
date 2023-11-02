import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

function MovieCard({movieDetails}) {

  return (
    <Link to={"../movie-details/"+ movieDetails?.id} class="w-40 m-4 rounded shadow-lg p-2 bg-white">
        <img src={TMDB_IMG_CDN + movieDetails?.poster_path} alt={movieDetails?.original_title + "film poster"} className="w-56 h-60" />
        <div class="text-left">
            <div class=" text-xs text-black font-semibold mb-2">{movieDetails?.original_title}</div>
        </div>
        <div class="px-2">
            <span class="text-xs text-red-400">
                <i class="fa-regular fa-heart"></i> &nbsp;
                <p className='inline-block'>Rating : {Math.floor(movieDetails?.vote_average) }</p>
            </span>
        </div>
    </Link>
  )
}

export default MovieCard