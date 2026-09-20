import React from 'react'
import MovieCard from './MovieCard'

function MoviesCategory({ category, moviesArray }) {
  return (
    <div>
            <h1 className="text-white text-xl font-semibold ml-5 mb-2 flex items-center gap-x-2">
                {category} <i className="fa-solid fa-chevron-right text-brand-red text-sm"></i>
            </h1>
            <div className="flex overflow-x-scroll bg-transparent">
                {
                    moviesArray?.map(m => (
                        <div className="flex" key={m?.id}>
                            <MovieCard movieDetails={m} />
                        </div>

                    ))
                }
            </div>

        </div>
  )
}

export default MoviesCategory