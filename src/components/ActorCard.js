import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function ActorCard({name, character, dp, role}) {
  return (
    <>
    {
        dp &&
        <div className="bg-white sm:w-24 sm:h-56 md:w-40 md:h-80">
            <img 
                src={TMDB_IMG_CDN + dp} 
                alt=""
            />
            {
                character && <p className="text-black px-2 text-xs md:text-base">{character}</p>
            }
            <p className="text-green-500 px-2 text-xs mt-2 md:text-base">{name}</p>            
        </div>
    }
    </>
  )
}

export default ActorCard