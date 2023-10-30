import { Link } from "react-router-dom"
import GPTSearch from "../components/GPTSearch"
import { MAIN_BANNER_IMAGE } from "../utils/constants"

function Search() {
  return (
    <div className="relative">
        {/* background banner */}
        <div>
            <div className="bg-black absolute inset-0"></div>
            <img src={MAIN_BANNER_IMAGE} alt="banner home screen" className="opacity-50 h-screen w-full sm: object-cover lg:object-fit" />
            <img src={MAIN_BANNER_IMAGE} alt="banner home screen" className="opacity-50 h-screen w-full sm: object-cover lg:object-fit" />
        </div>

        {/* navbar+brand logo*/}
        <div className="z-10 absolute top-10 left-10 flex items-center justify-center">
            <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
            <Link to={'/'} className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
              PixelFlicks
            </Link>
        </div>      

        <div className="absolute inset-0 flex items-start justify-center pt-48">
            <GPTSearch />  
        </div>

    </div>
  )
}

export default Search