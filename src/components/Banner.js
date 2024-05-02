import React, { useRef, useState} from 'react'
import Header from './Header'
import GOATLIFE_TRAILER from '../assets/goatlife trailer.mp4'

const Banner = () => {

    //show more info about movie
    const [isMoreInfoSelected, setIsMoreInfoSelected] = useState(false);

    //pause or play a video
    const videoRef = useRef(null);
    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

  return (
    <div>
        {/* text over image */}
        <div className="relative">

            {/* <div className="bg-black bg-opacity-50 absolute inset-0"></div> */}

            <Header />

            {/* video embed from youtube */}
            {/* <iframe 
                className='w-full h-screen sm:hidden lg:block' 
                src="https://www.youtube.com/embed/Po3jStA673E?autoplay=1&mute=1&controls=0&cc_load_policy=3" 
                allow="autoplay;" 
                allowfullscreen>
            </iframe> */}

            <video autoPlay loop muted className=' mt-[-100px] hidden lg:block' ref={videoRef}>
                <source src={GOATLIFE_TRAILER} type="video/mp4" className='w-screen h-screen aspect-video object-cover' />
                Your browser does not support the video tag.
            </video>

            {/* image for smaller screensl */}
            <img 
                src="https://www.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/3/23/aadujeevitham-2.jpg.transform/576x300/image.jpg" 
                alt="goat-life banner" 
                className="w-full h-screen object-cover sm:block lg:hidden" 
            />

            {/* texts over image */}
            <div className="z-10 absolute top-0 p-5 bottom-0 flex flex-col items-start justify-center">                
                <div className="font-leo text-white text-6xl lg:text-6xl font-bold">Aadujeevitham</div>
                <div className="mt-4 text-white text-sm lg:text-base w-2/3 lg:w-1/3">
                    Aadujeevitham (Goat Life), adapted from the bestselling 2008 Malayalam book, stars Prithviraj Sukumaran as Najeeb, an Indian immigrant in Saudi Arabia who is kidnapped and forced into slave-like labour as a goat herder in the desert. The story is inspired by the real-life ordeal of a man with the same name, who was abducted in the country in the 1990s and managed to escape after two years.
                </div>
                { isMoreInfoSelected &&
                    <>
                        <div className="text-red-300 text-sm lg:text-base lg:w-1/3 mt-5"> <b>Director:</b>  Blessy </div>
                        <div className="text-red-300 text-sm lg:text-base lg:w-1/3"> <b> Writers:</b> Lokesh Kanagaraj, Rathna Kumar, Deeraj Vaidy </div>
                        <div className="text-red-300 text-sm lg:text-base lg:w-1/3"> <b> Stars: </b> 
                            Prithviraj Sukumaran, Amala Paul, K R Gokul, Jimmy Jean-Louis 
                        </div>
                        <div className='flex mt-4'>
                            <span className='text-xs text-red-500 font-bold px-4 py-1 mr-1 border border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Romance</span>
                            <span className='text-xs text-red-500 font-bold px-4 py-1 mr-1 border border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Adventure</span>
                            <span className='text-xs text-red-500 font-bold px-4 py-1 mr-1 border border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Drama</span>
                            <span className='text-xs text-red-500 font-bold px-4 py-1 mr-1 border border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Thriller</span>
                        </div>
                    </>
                }
                <div className='flex mt-6'>
                    <button className='hidden lg:block text-black bg-white font-bold lg:w-28 lg:h-12 lg:text-base sm:w-96 sm:h-24 sm:text-4xl rounded-lg mr-6 hover:bg-opacity-50' onClick={handleVideoClick}>
                        <i className="fa-solid fa-play"></i> &nbsp;&nbsp;
                        PLAY
                    </button>
                    <button onClick={() => setIsMoreInfoSelected(!isMoreInfoSelected)} className='text-white w-48 h-12 text-base bg-slate-500 bg-opacity-40 hover:bg-opacity-100 font-bold px-6 py-2 rounded-lg'>
                        <i className="fa-solid fa-circle-info"></i> &nbsp;&nbsp;
                        MORE INFO
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner

