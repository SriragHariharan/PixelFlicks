import React from 'react'
import IMG_1 from '../assets/image1.png'
import IMG_2 from '../assets/image2.png'
import IMG_3 from '../assets/image3.png'
import IMG_4 from '../assets/image4.png'

function WelcomePageFeatures() {
  return (
    <div className='bg-black'>

        {/* feature grid 01 */}
        <div className="bg-gray-500 py-1"></div>
        <div className="grid grid-cols-12 p-8 md:gap-24">
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold">Enjoy on your TV</div>
                <div className="text-sm md:text-2xl text-white my-6">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </div>
            </div>
            <div className="text-white col-span-12 md:col-span-6">
                <img src={IMG_1} alt="" />
            </div>
        </div>

        {/* feature grid 02 */}
        <div className="bg-gray-500 py-1"></div>
        <div className="grid grid-cols-12 p-8 md:gap-24">
            <div className="text-white col-span-12 md:col-span-6">
                <img src={IMG_2} alt="" />
            </div>
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Download your shows to watch offline</div>
                <div className="text-sm md:text-2xl text-white my-6">
                    Save your favourites easily and always have something to watch.
                </div>
            </div>
        </div>

        {/* feature grid 03 */}
        <div className="bg-gray-500 py-1"></div>
        <div className="grid grid-cols-12 p-8 md:gap-24">
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Watch everywhere</div>
                <div className="text-sm md:text-2xl text-white my-6">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </div>
            </div>
            <div className="text-white col-span-12 md:col-span-6">
                <img src={IMG_3} alt="" />
            </div>
        </div>

        {/* feature grid 04 */}
        <div className="bg-gray-500 py-1"></div>
        <div className="grid grid-cols-12 p-8 md:gap-24">
            <div className="text-white col-span-12 md:col-span-6">
                <img src={IMG_4} alt="" />
            </div>
            <div className="text-white col-span-12 md:col-span-6 flex flex-col justify-center align-middle">
                <div className="text-3xl md:text-6xl text-white font-extrabold md:leading-normal">Create profiles for kids</div>
                <div className="text-sm md:text-2xl text-white my-6">
                    Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </div>
            </div>
        </div>
        <div className="bg-gray-500 py-1"></div>


    </div>
  )
}

export default WelcomePageFeatures