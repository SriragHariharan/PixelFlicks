import { createSlice } from "@reduxjs/toolkit";

const searchedMovieSlice = createSlice({
    name:"searchedMovies",
    initialState:{
        gptSuggestions : "",
        tmdbMovieSuggestions :[]
    },
    reducers:{
        setGptSuggestions : (state, action) => {
            state.gptSuggestions = action.payload
        },
        setTmdbSuggestions : (state, action) => {
            state.tmdbMovieSuggestions = action.payload
        }
    }
})

export default searchedMovieSlice.reducer

export const {setGptSuggestions, setTmdbSuggestions} = searchedMovieSlice.actions