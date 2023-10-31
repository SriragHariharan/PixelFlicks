import React, { useState } from 'react'
import openAI_config from '../utils/openai';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setGptSuggestions, setTmdbSuggestions } from '../redux-toolkit/searchedMovieReducer';

function GPTSearch() {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    //handling gpt search
    const getGptResults = async(query) => {
        const gptQuery = `Act as a Movie Recommendation system and do the following : ${query} movies with release year exactly like 1.film1(year), 2.film2(year), 3.film3(year). all 20 movies should be provided by you .return as numbered film with each film in new line. no texts. only show films.`
    
        const chatCompletion = await openAI_config.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        return chatCompletion.choices[0].message.content;
    }

    //handling gpt api
    const getTmdbResults = async() => {
        let resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&primary_release_year=2016&page=1`, TMDB_API_OPTIONS);
        let json = await resp.json();
        return json.results
    }

    //GPT Search logic && TMDB api logic
    const handleGptSearch = async() => {
        if(query === "") return;
        console.log("button clicked :::"+ query)

        const tmdbResults = await getTmdbResults(query);
        dispatch(setTmdbSuggestions(tmdbResults))

        const gptResults = await getGptResults(query);
        dispatch(setGptSuggestions(gptResults))
    }

  return (
    <div className='flex'>
        <input 
            type="text" 
            value={query} 
            onChange={handleQueryChange}
            className='px-12 py-6 w-[50em] placeholder:text-2xl focus:outline-none' 
            placeholder='What would you love to watch today ?' 
        />
        <button onClick={handleGptSearch} className="bg-green-500">
            <i className="fa-solid fa-magnifying-glass text-white text-3xl px-12"></i>
        </button>
    </div>
  )
}

export default GPTSearch