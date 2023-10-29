import React from 'react'
import MovieCard from './MovieCard'

function MoviesCategory({ category, moviesArray }) {
  return (
    <div className="">
            <div className=" text-white text-3xl ml-10 block -mt-24">
                <h1>{category} &gt;&gt; </h1>
            </div>
            <div className="flex overflow-x-scroll ml-10 mr-10 bg-transparent">
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