import React from 'react'
import { MAIN_BANNER_IMAGE } from '../utils/constants'
import GPTSearch from '../components/GPTSearch'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

function Search() {
  const moviesFromTMDB = useSelector(store => store?.movieSuggestions?.tmdbMovieSuggestions);
  const gptSuggestions  = useSelector(store => store?.movieSuggestions?.gptSuggestions);

  return (
    <div className="bg-black">
      <div className="w-screen opacity-75" style={{ backgroundImage: `url(${MAIN_BANNER_IMAGE})`}} >
          {/* logo */}
          <Link to={'/'} className="flex pt-12 pl-12">
              <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
              <div className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
                PixelFlicks
              </div>
          </Link>    

          {/* search bar */}
          <div className='flex justify-center mt-10'>
            <GPTSearch />  
          </div>  

          {/* TMDB search results */}
          <div className="mt-24 grid place-items-center grid-cols-5">
            {
              moviesFromTMDB?.map(movie => <div className="flex"><MovieCard movieDetails={movie} /></div>  )
            }

          </div>

          {/* GPT search results */}
          <div className="mt-24 grid place-items-center grid-cols-1 p-10">            
            
            <div className='rounded-3xl bg-white p-10'>

              <div className='text-center text-3xl mb-4 underline decoration-wavy'>GPT SUGGESTIONS</div>
              <p className='my-10 text-base text-black'>
                  {gptSuggestions || "GPT Content comes here"}
              </p>
              <p className="text-center text-gray-400 mt-4">
                ## Our GPT is still in beta mode & may generate incorrect information. Verify important information.
              </p>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Search