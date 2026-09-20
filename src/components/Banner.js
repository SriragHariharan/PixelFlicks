import React, { useRef, useState} from 'react'
import Header from './Header'

const TRAILER_YOUTUBE_ID = 'fk0JHh1P9H0'

const Banner = () => {

    //show more info about movie
    const [isMoreInfoSelected, setIsMoreInfoSelected] = useState(false);

    //mute or unmute the trailer
    const [isMuted, setIsMuted] = useState(true);
    const iframeRef = useRef(null);
    const toggleMute = () => {
        const player = iframeRef.current?.contentWindow;
        if (!player) return;
        const command = isMuted ? 'unMute' : 'mute';
        player.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
        setIsMuted(!isMuted);
    };

  return (
    <div>
        {/* trailer + text over it */}
        <div className="relative z-10 h-screen">

            <Header />

            {/* youtube trailer, autoplaying/muted/looping/no controls, always covering the full viewport regardless of aspect ratio */}
            <div className="absolute inset-0 overflow-hidden">
                <iframe
                    ref={iframeRef}
                    title="BKU trailer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ width: '177.78vh', height: '56.25vw', minWidth: '100vw', minHeight: '100vh' }}
                    src={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${TRAILER_YOUTUBE_ID}&cc_load_policy=0&modestbranding=1&enablejsapi=1&playsinline=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>

            {/* texts over trailer, hidden by default so the video stays visible */}
            <div className="z-10 absolute top-0 p-5 bottom-0 flex flex-col items-start justify-center">
                { isMoreInfoSelected &&
                    <>
                        <div className="font-leo text-white text-4xl lg:text-6xl font-bold">BKU <span className="text-brand-red">(Bethlehem Kudumba Unit)</span></div>
                        <div className="mt-4 text-neutral-200 text-sm lg:text-base w-2/3 lg:w-1/3">
                            A Malayalam romantic comedy about Justin, a middle-aged bachelor, and Ashley, a young woman who returns home after a difficult experience. They get off on the wrong foot but gradually develop feelings for each other through their shared love of music, complicated by family opposition, age differences, and their tightly connected community.
                        </div>
                        <div className="text-neutral-300 text-sm lg:text-base lg:w-1/3 mt-5"> <b className="text-white">Director:</b> Girish A D </div>
                        <div className="text-neutral-300 text-sm lg:text-base lg:w-1/3"> <b className="text-white">Stars:</b> Nivin Pauly, Mamitha Baiju </div>
                        <div className='flex flex-wrap mt-4'>
                            <span className='text-xs text-brand-red font-bold px-4 py-1 mr-1 mb-1 border border-brand-red rounded-3xl hover:bg-brand-red hover:text-white transition-colors'>Romance</span>
                            <span className='text-xs text-brand-red font-bold px-4 py-1 mr-1 mb-1 border border-brand-red rounded-3xl hover:bg-brand-red hover:text-white transition-colors'>Comedy</span>
                            <span className='text-xs text-brand-red font-bold px-4 py-1 mr-1 mb-1 border border-brand-red rounded-3xl hover:bg-brand-red hover:text-white transition-colors'>Drama</span>
                            <span className='text-xs text-brand-red font-bold px-4 py-1 mr-1 mb-1 border border-brand-red rounded-3xl hover:bg-brand-red hover:text-white transition-colors'>Family</span>
                        </div>
                    </>
                }
            </div>

            {/* mute + info buttons, bottom-right corner */}
            <div className='z-10 absolute bottom-6 right-6 flex'>
                <button className='text-white font-bold w-14 h-12 text-base rounded-lg mr-3 bg-white/10 hover:bg-white/20 transition-colors' onClick={toggleMute} aria-label={isMuted ? 'Unmute trailer' : 'Mute trailer'}>
                    <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                </button>
                <button
                    className='text-white font-bold w-14 h-12 text-lg rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
                    onClick={() => setIsMoreInfoSelected(!isMoreInfoSelected)}
                    aria-label={isMoreInfoSelected ? 'Hide movie info' : 'Show movie info'}
                    aria-pressed={isMoreInfoSelected}
                >
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Banner
