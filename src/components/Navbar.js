//welcome page shown when user is not logged in

import { Link } from "react-router-dom"
import { MAIN_BANNER_IMAGE } from "../utils/constants"
import Logo from "./Logo"

const Navbar = () => {
    
  return (
    <div className="relative">
      
      {/* banner image */}
      <div>
        <div className="bg-black bg-opacity-100 absolute inset-0"></div>
        <img src={MAIN_BANNER_IMAGE} alt="banner home screen" className="opacity-50 h-screen w-full sm: object-cover lg:object-fit" />
        
        {/* overlaying text */}
        <div className="z-10 absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-4xl text-center font-extrabold leading-[1.6]  lg:text-8xl lg:px-24">
            Laughter. Tears. Thrills. Find it all on PixelFlicks
          </p>
          <p className="text-white xl:text-3xl mt-28 text-center font-extrabold leading-[1.5] sm:leading-[1.7] sm:text-5xl">
            Start your movie journey now <Link to={'auth'} className="px-6 py-0 bg-green-500 cursor-pointer"> 
            <i className="fa-solid fa-arrow-right text-black fa-sm"></i> </Link>
          </p>
        </div>
      
      </div>

      {/* navbar.. logo + sign-up btn  */}
      <div className="z-10 p-6 lg:p-12 justify-between absolute inset-0 flex">
          <Logo />
          <Link to={'auth'}>
              <div className="px-3 py-0 mt-2 text-white  border rounded-lg  text-sm xl:text-lg">
                Sign in
              </div>
          </Link>
      </div>
    </div>
  )
}

export default Navbar