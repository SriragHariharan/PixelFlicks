import { useEffect, useState } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants";

const useGetMovieDetails = (movieID) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async(movieID) => {
      const resp = await fetch('https://api.themoviedb.org/3/movie/'+ movieID +'?language=en-US', TMDB_API_OPTIONS);
      const json = await resp.json();
      setMovieDetails(json);
  }
  
  useEffect(() => {
    fetchMovieDetails(movieID)
  },[movieID])
  
    return movieDetails;
}

export default useGetMovieDetails