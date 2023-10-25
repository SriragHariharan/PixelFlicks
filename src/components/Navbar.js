import { MAIN_BANNER_IMAGE } from "../utils/constants"

const Navbar = () => {
    
  return (
    <div className="relative">
      
      {/* banner image */}
      <div>
        <div className="bg-black bg-opacity-100 absolute inset-0"></div>
        <img src={MAIN_BANNER_IMAGE} alt="banner home screen" className="opacity-50 h-screen w-full sm: object-cover lg:object-fit" />
        
        {/* overlaying text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white lg:text-7xl text-center font-extrabold px-28 sm:leading-[1.4] sm:text-8xl">
            Laughter. Tears. Thrills. Find it all on PixelFlicks
          </p>
          <p className="text-white xl:text-3xl mt-28 text-center font-extrabold leading-[1.5] sm:leading-[1.7] sm:text-5xl">
            Start your movie journey now <span className="px-6 py-0 bg-green-500 cursor-pointer"> 
            <i class="fa-solid fa-arrow-right text-black fa-sm"></i> </span>
          </p>
        </div>
      
      </div>

      {/* navbar.. logo + sign-up btn  */}
      <div className="p-12 justify-between absolute inset-0 flex">
          <div>
              <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
              <span className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
                PixelFlicks
              </span>
          </div>
          <div>
              <button className="px-6 py-3 mt-6 xl:mt-2 text-white  border rounded-lg bg-green-500 text-4xl xl:text-lg">
                Sign in
              </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar