import { useEffect, useState } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants"

function useGetMovies() {

    //get now playing movies
    const getNowPlaying = async() => {
        let resp = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS)
        let json = await resp.json()
        setNowPlayingMovies(json)
    }

    //get popular movies
    const getPopular = async() => {
        let resp = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_API_OPTIONS)
        let json = await resp.json()
        setPopularMovies(json);
    }

    //get top rated movies
    const getTopRated = async() => {
        let resp = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TMDB_API_OPTIONS)
        let json = await resp.json()
        setTopRatedMovies(json);
    }

    //get Up Comming movies
    const getUpComming = async() => {
        let resp = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_API_OPTIONS)
        let json = await resp.json()
        setUpCommingMovies(json);
    }

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upCommingMovies, setUpCommingMovies] = useState([]);
    
    useEffect(() => {
        getNowPlaying();
        getPopular()
        getTopRated()
        getUpComming()
    },[])

  return [nowPlayingMovies, popularMovies, topRatedMovies, upCommingMovies]
}

export default useGetMovies