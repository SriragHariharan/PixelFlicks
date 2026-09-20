import React from 'react'
import IMG_1 from '../assets/image1.png'
import IMG_2 from '../assets/image2.png'
import IMG_3 from '../assets/image3.png'
import IMG_4 from '../assets/image4.png'

function WelcomePageFeatures() {
  return (
    <div className='bg-black'>

        {/* feature grid 01 */}
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-y-8 px-8 py-16 md:gap-24 border-t border-neutral-800">
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold">Enjoy on your TV</div>
                <div className="text-sm md:text-2xl text-neutral-400 my-6">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </div>
            </div>
            <div className="text-white col-span-12 md:col-span-6 flex items-center">
                <img src={IMG_1} alt="Watching Pix on a smart TV" />
            </div>
        </div>

        {/* feature grid 02 */}
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-y-8 px-8 py-16 md:gap-24 border-t border-neutral-800">
            <div className="text-white col-span-12 md:col-span-6 order-2 md:order-1 flex items-center">
                <img src={IMG_2} alt="Downloading shows to watch offline" />
            </div>
            <div className="text-white col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Download your shows to watch offline</div>
                <div className="text-sm md:text-2xl text-neutral-400 my-6">
                    Save your favourites easily and always have something to watch.
                </div>
            </div>
        </div>

        {/* feature grid 03 */}
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-y-8 px-8 py-16 md:gap-24 border-t border-neutral-800">
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Watch everywhere</div>
                <div className="text-sm md:text-2xl text-neutral-400 my-6">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </div>
            </div>
            <div className="text-white col-span-12 md:col-span-6 flex items-center">
                <img src={IMG_3} alt="Watching Pix across devices" />
            </div>
        </div>

        {/* feature grid 04 */}
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-y-8 px-8 py-16 md:gap-24 border-t border-b border-neutral-800">
            <div className="text-white col-span-12 md:col-span-6 order-2 md:order-1 flex items-center">
                <img src={IMG_4} alt="Kids profile with favourite characters" />
            </div>
            <div className="text-white col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Create profiles for kids</div>
                <div className="text-sm md:text-2xl text-neutral-400 my-6">
                    Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </div>
            </div>
        </div>

    </div>
  )
}

export default WelcomePageFeatures
