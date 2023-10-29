import React, { useRef, useState} from 'react'
import Header from './Header'
import LEO_TRAILER from '../assets/Leo trailer.mp4'

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

            <div className="bg-black bg-opacity-50 absolute inset-0"></div>

            <Header />

            {/* video embed from youtube */}
            {/* <iframe 
                className='w-full h-screen sm:hidden lg:block' 
                src="https://www.youtube.com/embed/Po3jStA673E?autoplay=1&mute=1&controls=0&cc_load_policy=3" 
                allow="autoplay;" 
                allowfullscreen>
            </iframe> */}

            <video autoPlay muted className=' mt-[-100px] sm:hidden lg:block' ref={videoRef}>
                <source src={LEO_TRAILER} type="video/mp4" className='w-screen h-screen aspect-video object-cover' />
                Your browser does not support the video tag.
            </video>

            {/* image for smaller screensl */}
            <img 
                src="https://www.hindustantimes.com/ht-img/img/2023/06/22/1600x900/Leo_First_Look_1687403718085_1687403733149.jpg" 
                alt="leo banner" 
                className="w-full h-screen object-cover sm:block lg:hidden" 
            />

            {/* texts over image */}
            <div className="z-10 absolute top-40 left-16 bottom-0 flex flex-col items-start justify-center">                
                <div className="font-leo text-white sm:text-[250px] lg:text-8xl font-bold">LEO</div>
                <div className="mt-4 text-white sm:text-4xl lg:text-base font-bold lg:w-1/3"> Parthiban is a mild mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.</div>
                { isMoreInfoSelected &&
                    <>
                        <div className="text-red-300 sm:text-4xl lg:text-base lg:w-1/3 mt-5"> <b>Director:</b>  Lokesh Kanagaraj </div>
                        <div className="text-red-300 sm:text-4xl lg:text-base lg:w-1/3"> <b> Writers:</b> Lokesh Kanagaraj, Rathna Kumar, Deeraj Vaidy </div>
                        <div className="text-red-300 sm:text-4xl lg:text-base lg:w-1/3"> <b> Stars: </b> Joseph Vijay, Sanjay Dutt, Trisha Krishnan </div>
                        <div className='flex mt-4'>
                            <span className='text-red-500 cursor-pointer font-bold px-4 py-1 mr-4 border-4 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Action</span>
                            <span className='text-red-500 cursor-pointer font-bold px-4 py-1 mr-4 border-4 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Crime</span>
                            <span className='text-red-500 cursor-pointer font-bold px-4 py-1 mr-4 border-4 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Drama</span>
                            <span className='text-red-500 cursor-pointer font-bold px-4 py-1 mr-4 border-4 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white'>Thriller</span>
                        </div>
                    </>
                }
                <div className='flex mt-6'>
                    <button className='text-black bg-white font-bold lg:w-28 lg:h-12 lg:text-base sm:w-96 sm:h-24 sm:text-4xl rounded-lg mr-6 hover:bg-opacity-50' onClick={handleVideoClick}>
                        <i className="fa-solid fa-play"></i> &nbsp;&nbsp;
                        PLAY
                    </button>
                    <button onClick={() => setIsMoreInfoSelected(!isMoreInfoSelected)} className='text-white sm:w-96 sm:h-24 sm:text-4xl lg:w-48 lg:h-12 lg:text-base bg-slate-500 bg-opacity-40 hover:bg-opacity-100 font-bold px-6 py-2 rounded-lg'>
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

// src="https://www.youtube.com/embed/Po3jStA673E?si=4jlOjm5gZ6vat-I7&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>