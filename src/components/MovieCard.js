import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

function MovieCard({movieDetails}) {

  return (
    <Link to={"../movie-details/"+ movieDetails?.id} class="w-56 m-4 rounded shadow-lg p-2 bg-white">
        <img src={TMDB_IMG_CDN + movieDetails?.poster_path} alt={movieDetails?.original_title + "film poster"} className="w-56 h-72" />
        <div class="px-2 text-left">
            <div class=" text-lg text-black mb-2">{movieDetails?.original_title}</div>
        </div>
        <div class="px-2">
            <span class="rounded-full py-1 text-sm font-semibold text-red-400">
                <i class="fa-regular fa-heart"></i> &nbsp;
                <p className='inline-block bottom-0'>Rating : {Math.floor(movieDetails?.vote_average) }</p>
            </span>
        </div>
    </Link>
  )
}

export default MovieCard