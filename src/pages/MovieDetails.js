import { useNavigate, useParams } from "react-router-dom"
import { TMDB_IMG_CDN } from "../utils/constants"
import ActorCard from "../components/ActorCard"
import FilmDetails from "../components/FilmDetails"
import useGetMovieDetails from "../hooks/useGetMovieDetails"
import useGetCastDetails from "../hooks/useGetCastDetails"
import useGetMoviePosters from "../hooks/useGetMoviePosters"
import useGetVideos from "../hooks/useGetVideos"
import Logo from "../components/Logo"

function MovieDetails() {

    //get movieID from params
    const {id} = useParams()
    const navigate = useNavigate()

    const movieDetails = useGetMovieDetails(id);
    const cast = useGetCastDetails(id);
    const posters = useGetMoviePosters(id);
    const videos = useGetVideos(id)

  return (
    <div className="bg-black" >
        <div className="relative w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${TMDB_IMG_CDN + movieDetails?.backdrop_path })`}} >

            {/* bg blur effect */}
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm">

                {/* logo + back button */}
                <div className="pt-4 pl-4 flex items-center gap-x-4">
                    <Logo />
                    <button
                        onClick={() => navigate('/browse')}
                        className="px-3 py-2 bg-transparent border border-white/40 rounded-lg hover:border-brand-red transition-colors"
                        aria-label="Back to Browse"
                    >
                        <i className="fa-solid fa-arrow-left text-white text-base lg:text-xl"></i>
                    </button>
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

            {/* fade into the page background below */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* cast and crew */}
        <div className="p-6 md:p-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">CAST &amp; CREW</h1>
            {
                cast?.length > 0 ?
                <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
                    {
                        cast?.map((c, i) => <ActorCard key={i} name={c?.name} character={c?.character} dp={c?.profile_path} role={c?.known_for_department} /> )
                    }
                </div>
                :
                <p className="text-neutral-500">No cast information available.</p>
            }
        </div>

        {/* videos and trailers */}
        <div className="px-6 md:px-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">TEASERS &amp; TRAILERS</h1>
            {
                videos?.length > 0 ?
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    videos?.map (v => (
                        <div key={v?.key} className="mb-2 bg-neutral-900 rounded-lg overflow-hidden">
                            <iframe
                                title={v?.name}
                                className="w-full sm:h-96 lg:h-56"
                                src={"https://www.youtube.com/embed/"+v?.key +"?autoplay=0&mute=1&controls=1"}
                                allow="autoplay;"
                            >
                            </iframe>
                            <p className="text-neutral-300 text-sm p-2 truncate">{v?.name}</p>
                        </div>
                    ))
                }
                </div>
                :
                <p className="text-neutral-500">No trailers available.</p>
            }
        </div>

        {/* images and banners */}
        <div className="p-6 md:p-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">POSTERS &amp; IMAGES</h1>
            {
                posters?.length > 0 ?
                <div className="grid grid-cols-4 lg:grid-cols-10 gap-2">
                {
                    posters?.map((p, i) => <img key={i} src={TMDB_IMG_CDN + p?.file_path} alt="" loading="lazy" className="rounded-md hover:scale-105 transition-transform" /> )
                }
                </div>
                :
                <p className="text-neutral-500">No posters or images available.</p>
            }
        </div>

    </div>
  )
}

export default MovieDetails
