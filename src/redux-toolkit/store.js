import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import searchedMovieReducer from "./searchedMovieReducer";

const store = configureStore({
    reducer:{
        user: userReducer,
        movieSuggestions: searchedMovieReducer,
    }
})

export default store;