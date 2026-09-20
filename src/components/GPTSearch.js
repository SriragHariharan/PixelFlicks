import React, { useState } from 'react'
import openAI_config from '../utils/openai';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setGptSuggestions, setTmdbSuggestions } from '../redux-toolkit/searchedMovieReducer';

function GPTSearch() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    //handling gpt search
    const getGptResults = async(query) => {
        try {
            const gptQuery = `Act as a Movie Recommendation system and do the following : ${query} movies with release year exactly like 1.film1(year), 2.film2(year), 3.film3(year). all 20 movies should be provided by you .return as numbered film with each film in new line. no texts. only show films.`

            const chatCompletion = await openAI_config.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });

            return chatCompletion.choices[0].message.content;

        } catch (error) {
               return "Unable to generate GPT suggestions"
        }
    }

    //handling gpt api
    const getTmdbResults = async() => {
        let resp1 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`, TMDB_API_OPTIONS);
        let resp2 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=2`, TMDB_API_OPTIONS);
        let resp3 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=3`, TMDB_API_OPTIONS);
        let resp4 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=4`, TMDB_API_OPTIONS);
        let resp5 = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=5`, TMDB_API_OPTIONS);
        let json1 = await resp1.json();
        let json2 = await resp2.json();
        let json3 = await resp3.json();
        let json4 = await resp4.json();
        let json5 = await resp5.json();
        return [...json1.results, ...json2.results, ...json3.results, ...json4.results, ...json5.results]
    }

    //GPT Search logic && TMDB api logic
    const handleGptSearch = async() => {
        try {
            if(query === "") return;
            setLoading(true);

            const tmdbResults = await getTmdbResults(query);
            dispatch(setTmdbSuggestions(tmdbResults))

            const gptResults = await getGptResults(query);
            dispatch(setGptSuggestions(gptResults))

            setLoading(false);
        } catch (error) {
            dispatch(setGptSuggestions(error.message))
            setLoading(false);
        }
    }

  return (
    <div className="max-w-4xl w-full flex items-center gap-x-3 px-6 md:px-0">
        <div className="flex items-center w-full rounded-full bg-neutral-800/80 border border-neutral-700 shadow-lg shadow-black/40 focus-within:ring-2 focus-within:ring-brand-red focus-within:border-brand-red transition-colors pl-6 pr-2 py-2">
            <i className="fa-solid fa-magnifying-glass text-neutral-500 text-base mr-4"></i>
            <input
                type='text'
                value={query}
                onChange={handleQueryChange}
                onKeyDown={(e) => e.key === 'Enter' && handleGptSearch()}
                placeholder='What would you love to watch today?'
                className="w-full bg-transparent text-white text-base md:text-lg placeholder:text-neutral-500 outline-none"
            />
            <button onClick={handleGptSearch} className="shrink-0 bg-brand-red hover:bg-brand-red-dark transition-colors w-11 h-11 rounded-full flex items-center justify-center">
                {
                    loading ?
                    <i className="fa-solid fa-circle-notch fa-spin text-white text-base"></i>
                    :
                    <i className="fa-solid fa-arrow-right text-white text-base"></i>
                }
            </button>
        </div>
    </div>
      )
    }

    export default GPTSearch;
