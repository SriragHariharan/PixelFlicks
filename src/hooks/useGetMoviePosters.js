import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useGetMoviePosters = (movieID) => {
    const [posters, setPosters] = useState([]);

    const fetchMoviePosters = async(movieID) => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/images', TMDB_API_OPTIONS)
        const json = await resp.json()
        setPosters([...json.posters, ...json.backdrops])
    }

    useEffect(() => {
        fetchMoviePosters(movieID)
    },[movieID])

    return posters

}

export default useGetMoviePosters