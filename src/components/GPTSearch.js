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
        if(query === "") return;
        console.log("button clicked :::"+ query)

        const tmdbResults = await getTmdbResults(query);
        dispatch(setTmdbSuggestions(tmdbResults))

        const gptResults = await getGptResults(query);
        dispatch(setGptSuggestions(gptResults))
    }

  return (
    <div className="max-w-7xl flex p-6 md:p-0">
        <input 
            type='text' 
            value={query}
            onChange={handleQueryChange}
            placeholder='What would you love to watch today ?'
            className="p-3 w-full focus:outline-none lg:w-96" 
        />
        <button onClick={handleGptSearch} className="bg-green-500 px-3">
            <i className="fa-solid fa-magnifying-glass text-white text-base"></i>
        </button>
    </div>
      )
    }
    
    export default GPTSearch;