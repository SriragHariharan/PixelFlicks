import { useParams } from "react-router-dom"
import { TMDB_IMG_CDN } from "../utils/constants"
import ActorCard from "../components/ActorCard"
import FilmDetails from "../components/FilmDetails"
import useGetMovieDetails from "../hooks/useGetMovieDetails"
import useGetCastDetails from "../hooks/useGetCastDetails"
import useGetMoviePosters from "../hooks/useGetMoviePosters"
import useGetVideos from "../hooks/useGetVideos"
import Logo from "../components/Logo"
// 

function MovieDetails() {

    //get movieID from params
    const {id} = useParams()

    const movieDetails = useGetMovieDetails(id);
    const cast = useGetCastDetails(id);
    const posters = useGetMoviePosters(id);
    const videos = useGetVideos(id)
    console.log("videos :::",videos)


  return (
    <div className="bg-black" >
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${TMDB_IMG_CDN + movieDetails?.backdrop_path })`}} >

            {/* bg blur effect */}
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm">
                
                {/* logo */}
                <div className="pt-4 pl-4">
                    <Logo />
                </div>

                {/* movie banner & details */}
                <FilmDetails 
                    poster={movieDetails?.poster_path} 
                    title={movieDetails?.title}
                    overview={movieDetails?.overview} 
                    rating={movieDetails?.vote_average}
                    releaseDate={movieDetails?.release_date}
                    runtime={movieDetails?.runtime}
                    genres={movieDetails?.genres}
                />
                
            </div>
        </div>

        {/* cast and crew */}
        <div className="grid grid-cols-3 md:grid-cols-8 md:p-20 gap-2">
            <h1 className="text-white text-4xl md:text-6xl text-right">CAST & CREW</h1>
            {
                cast?.map(c => <ActorCard name={c?.name} character={c?.character} dp={c?.profile_path} role={c?.known_for_department} /> )
            }
            
        </div>

        {/* videos and trailers */}
        <h1 className="text-white text-xl p-6">TEASERs & TRAILERS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {
            videos?.map (v => (
                <div key={v?.key} className="mb-10">
                    <iframe 
                        title={v?.name}
                        className="w-full sm:h-96 lg:h-full"
                        src={"https://www.youtube.com/embed/"+v?.key +"?autoplay=0&mute=1&controls=1"} 
                        allow="autoplay;" 
                    >
                    </iframe>
                    <p className="text-white text-lg">{v?.name}</p>
                </div>
            ))
        }
        </div>
        
        {/* images and banners */}
        <h1 className="text-white text-xl p-4">POSTERS & IMAGES</h1>
        <div className="grid grid-cols-4 lg:grid-cols-10 gap-2 p-4">
        {
            posters?.map((p, i) => <img key={i} src={TMDB_IMG_CDN + p?.file_path} alt="" loading="lazy" /> )
        }
            
        </div>


    </div>
  )
}

export default MovieDetails