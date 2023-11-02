import React from 'react'
import { MAIN_BANNER_IMAGE } from '../utils/constants'
import GPTSearch from '../components/GPTSearch'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import Logo from '../components/Logo'

function Search() {
  const moviesFromTMDB = useSelector(store => store?.movieSuggestions?.tmdbMovieSuggestions);
  const gptSuggestions  = useSelector(store => store?.movieSuggestions?.gptSuggestions);

  return (
    <div className="bg-black">
      <div className="w-screen object-cover h-full" style={{ backgroundImage: `url(${MAIN_BANNER_IMAGE})`}} >
          {/* logo */}
          <div className="pt-6 pl-6">
            <Logo />    
          </div>

          {/* search bar */}
          <div className='flex justify-center mt-10'>
            <GPTSearch />  
          </div>  

          {/* TMDB search results */}
          <div className="mt-24 grid place-items-center grid-cols-2 lg:grid-cols-8">
            {
              moviesFromTMDB?.map(movie =><MovieCard movieDetails={movie} /> )
            }

          </div>

          {/* GPT search results */}
          <div className="mt-24 grid place-items-center grid-cols-1 p-5">            
            
            <div className='rounded-3xl bg-white p-10'>

              <div className='text-center font-semibold text-xl mb-4 underline decoration-wavy decoration-blue-400'>GPT SUGGESTIONS</div>
              <p className='my-10 text-base text-black'>
                  {gptSuggestions || "[ GPT Content takes some time to load...]"}
              </p>
              <p className="text-center text-gray-400 mt-4 text-xs">
                ## Our GPT is still in beta mode & may generate incorrect information. Verify important information.
              </p>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Search