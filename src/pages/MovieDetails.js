import { Link } from "react-router-dom"
import { TMDB_IMG_CDN } from "../utils/constants"
import ActorCard from "../components/ActorCard"
import FilmDetails from "../components/FilmDetails"
// 

function MovieDetails() {
  return (
    <div className="bg-black" >
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${TMDB_IMG_CDN + "v9L9ydhE5gExur77cLGyaxGNJoN.jpg" })`}} >

            {/* bg blur effect */}
            <div class="absolute inset-0 backdrop-filter backdrop-blur-md">
                
                {/* logo */}
                <Link to={'/'} className="flex pt-12 pl-12">
                    <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
                    <div className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
                        PixelFlicks
                    </div>
                </Link>

                {/* movie banner & details */}
                <FilmDetails />
                
            </div>
        </div>

        {/* cast and crew */}
        <div className="grid grid-cols-8 p-24 gap-4">
            <h1 className="text-white text-5xl text-right">CAST & CREW</h1>
            <ActorCard />
        </div>

        {/* images and banners */}
        <div className="grid grid-cols-2 p-10 gap-4">
        <h1 className="text-white text-5xl p-10">POSTERS & IMAGES</h1>
            <img src="https://www.themoviedb.org/t/p/original/ownDZBS9ecoPbWjW5V5L8jknGF.jpg" alt="" />
        </div>

        {/* videos and trailers */}
        <div className="grid grid-cols-2 gap-10 p-10">
        <h1 className="text-white text-5xl p-10">TEASERs & TRAILERS</h1>
            <div>
                <p className="text-white text-3xl">Official trailer</p>
                <iframe 
                    className="w-full h-screen"
                    src="https://www.youtube.com/embed/xenOE1Tma0A?autoplay=0&mute=0&controls=1" 
                    allow="autoplay;" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

    </div>
  )
}

export default MovieDetails