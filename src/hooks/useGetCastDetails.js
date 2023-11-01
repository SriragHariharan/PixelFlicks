import { useEffect, useState } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants";

const useGetCastDetails = (movieID) => {
    const [castDetails, setCastDetails] = useState([]);

    const fetchCastDetails = async(movieID) => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/credits?language=en-US', TMDB_API_OPTIONS)
        const json = await resp.json()
        setCastDetails([...json?.cast, ...json?.crew ])
    }

    useEffect(() =>{
        fetchCastDetails(movieID)
    },[movieID])

    return castDetails;
}

export default useGetCastDetails