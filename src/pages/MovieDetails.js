import { Link, useParams } from "react-router-dom"
import { TMDB_IMG_CDN } from "../utils/constants"
import ActorCard from "../components/ActorCard"
import FilmDetails from "../components/FilmDetails"
import useGetMovieDetails from "../hooks/useGetMovieDetails"
import useGetCastDetails from "../hooks/useGetCastDetails"
import useGetMoviePosters from "../hooks/useGetMoviePosters"
import useGetVideos from "../hooks/useGetVideos"
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
            <div className="absolute inset-0 backdrop-filter backdrop-blur-md">
                
                {/* logo */}
                <Link to={'/'} className="flex pt-12 pl-12">
                    <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
                    <div className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
                        PixelFlicks
                    </div>
                </Link>

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
        <div className="grid grid-cols-8 p-20 gap-4">
            <h1 className="text-white text-5xl text-right">CAST & CREW</h1>
            {
                cast?.map(c => <ActorCard name={c?.name} character={c?.character} dp={c?.profile_path} role={c?.known_for_department} /> )
            }
            
        </div>

        {/* images and banners */}
        <div className="grid grid-cols-10 p-10 gap-4">
        <h1 className="text-white text-2xl p-10 text-right">POSTERS & IMAGES</h1>
        {
            posters?.map((p, i) => <img key={i} src={TMDB_IMG_CDN + p?.file_path} alt="" loading="lazy" /> )
        }
            
        </div>

        {/* videos and trailers */}
        <div className="grid grid-cols-4 gap-10 p-10">
        <h1 className="text-white text-5xl p-10">TEASERs & TRAILERS</h1>
        {
            videos?.map (v => (
                <div key={v?.key}>
                    <iframe 
                        title={v?.name}
                        className=""
                        src={"https://www.youtube.com/embed/"+v?.key +"?autoplay=0&mute=0&controls=1"} 
                        allow="autoplay;" 
                        allowFullScreen>
                    </iframe>
                    <p className="text-white text-lg">{v?.name}</p>
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default MovieDetails