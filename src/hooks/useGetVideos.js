import { useEffect, useState } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants";

const useGetVideos = (movieID) => {
    const [videos, setVideos] = useState(null);

    const fetchVideos = async(movieID) => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', TMDB_API_OPTIONS);
        const json = await resp.json()
        setVideos(json.results)
    }

    useEffect(() => {
        fetchVideos(movieID)
    },[movieID])

    return videos

}

export default useGetVideos