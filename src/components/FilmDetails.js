import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function FilmDetails() {
  return (
        <div className="grid grid-cols-3 gap-0 m-24" >
            {/* image banner */}
            <div className="col-span-1">
                <img src={TMDB_IMG_CDN + "/pTmMxAHqX4vsIDE6HPPxOR0Q6TN.jpg"} alt="" className="h-[500px] border-white border-8" />
            </div>
            
            {/* movie details */}
            <div className="col-span-2">
                <div className="text-white text-6xl font-bold">JAILER (2023)</div>
                <div className="flex mt-4">
                    <div className="border-2 text-white p-2">UA</div>
                    <div className="text-white p-2">08/10/2023 (IN)</div>
                    <div className="text-white p-2">Action, Crime, Thriller</div>
                    <div className="text-white p-2 font-bold">165 min</div>
                </div>
                <div>
                    <i className="fa-regular fa-heart text-4xl mt-4 text-red-500"></i>
                    <span className="text-2xl text-red-400 ml-2">3.5</span>
                </div>
                <div className="text-white text-2xl mt-4">Overview</div>
                <div className="text-base text-white">
                    Muthuvel Pandian, a retired, stern yet compassionate jailer lives a peaceful life with his family, but trouble knocks his door when his cop son’s tryst with an antique mafia gang goes awry and forces Muthu to step back into a dark world he had voluntarily took a break from.
                </div>
                <button className="flex mt-5 border-4 w-36 p-3">
                    <i className="fa-brands fa-youtube text-red-500 text-4xl"></i>
                    <p className="text-white m-2">TRAILER</p>
                </button>
            </div>
        </div>  
    )
}

export default FilmDetails