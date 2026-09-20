import React from 'react'
import GPTSearch from '../components/GPTSearch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import Logo from '../components/Logo'

function Search() {
  const moviesFromTMDB = useSelector(store => store?.movieSuggestions?.tmdbMovieSuggestions);
  const gptSuggestions  = useSelector(store => store?.movieSuggestions?.gptSuggestions);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_#b0060f_0%,_#000000_55%)]">
        {/* logo + back button */}
        <div className="pt-6 pl-6 flex items-center gap-x-4">
          <Logo />
          <button
              onClick={() => navigate('/browse')}
              className="px-3 py-2 bg-transparent border border-white/40 rounded-lg hover:border-brand-red transition-colors"
              aria-label="Back to Browse"
          >
              <i className="fa-solid fa-arrow-left text-white text-base lg:text-xl"></i>
          </button>
        </div>

        {/* search bar */}
        <div className='flex justify-center mt-10 px-6'>
          <GPTSearch />
        </div>

        {/* TMDB search results */}
        <div className="mt-16 px-6 md:px-16">
          {
            moviesFromTMDB?.length > 0 ?
            <div className="grid place-items-center grid-cols-2 lg:grid-cols-8 gap-y-6">
              {
                moviesFromTMDB?.map(movie => <MovieCard key={movie?.id} movieDetails={movie} /> )
              }
            </div>
            :
            <p className="text-center text-neutral-500">Search for a movie to see results here.</p>
          }
        </div>

        {/* GPT search results */}
        {
          gptSuggestions &&
          <div className="mt-16 grid place-items-center grid-cols-1 p-5 pb-16">
            <div className='rounded-2xl bg-neutral-900 border border-neutral-800 p-6 md:p-10 max-w-3xl'>
              <div className='text-center font-semibold text-xl mb-4 text-brand-red'>GPT SUGGESTIONS</div>
              <p className='my-6 text-sm md:text-base text-neutral-200 whitespace-pre-line'>
                  {gptSuggestions}
              </p>
              <p className="text-center text-neutral-500 mt-4 text-xs">
                Our GPT is still in beta mode &amp; may generate incorrect information. Verify important information.
              </p>
            </div>
          </div>
        }
    </div>
  )
}

export default Search
