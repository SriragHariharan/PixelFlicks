//welcome page shown when user is not logged in

import { Link } from "react-router-dom"
import Logo from "./Logo"
import WelcomePageFeatures from "./WelcomePageFeatures"
import FaqContainer from "./FaqContainer"
import Footer from "./Footer"

const Navbar = () => {

  return (
    <>
      <div className="relative">

        {/* cinematic gradient hero */}
        <div className="h-screen w-full bg-black bg-[radial-gradient(ellipse_at_top,_#b0060f_0%,_#000000_55%)] opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"></div>

          {/* overlaying text */}
          <div className="z-10 relative h-full flex flex-col items-center justify-center px-6">
            <p className="text-white text-4xl text-center font-extrabold leading-[1.3] lg:text-7xl lg:px-24 lg:leading-[1.2]">
              Laughter. Tears. Thrills. Find it all on <span className="text-brand-red">PixelFlicks</span>
            </p>
            <p className="text-white text-xl mt-10 text-center font-semibold leading-[1.5] sm:text-3xl">
              Start your movie journey now
            </p>
            <Link to={'auth'} className="mt-6 px-8 py-3 rounded-md bg-brand-red hover:bg-brand-red-dark transition-colors cursor-pointer flex items-center gap-x-2 text-white font-semibold">
              Get started <i className="fa-solid fa-arrow-right fa-sm"></i>
            </Link>
          </div>

        </div>

        {/* navbar.. logo + sign-up btn  */}
        <div className="z-10 p-6 lg:p-12 justify-between absolute inset-0 flex items-start">
            <Logo />
            <Link to={'auth'}>
                <div className="px-4 py-1.5 text-white border border-white/40 rounded-md text-sm xl:text-lg hover:border-brand-red hover:text-brand-red transition-colors">
                  Sign in
                </div>
            </Link>
        </div>
      </div>
      <WelcomePageFeatures />
      <FaqContainer />
      <Footer />
    </>
  )
}

export default Navbar