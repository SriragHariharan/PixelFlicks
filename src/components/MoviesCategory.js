import React from 'react'
import MovieCard from './MovieCard'

function MoviesCategory() {
  return (
    <div className="">
            <div className=" text-white text-3xl ml-10 block -mt-24">
                <h1>TRENDING &gt;&gt; </h1>
            </div>
            <div className="flex overflow-x-scroll ml-10 mr-10 bg-transparent">
                    <div className="flex ">
                        <MovieCard />
                    </div> 
                    <div className="flex ">
                        <MovieCard />
                    </div>
            </div>

        </div>
  )
}

export default MoviesCategory