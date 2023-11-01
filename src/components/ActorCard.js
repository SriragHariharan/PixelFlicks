import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function ActorCard({name, character, dp, role}) {
  return (
    <>
    {
        dp &&
        <div className="bg-white w-40 h-80">
            <img 
                src={TMDB_IMG_CDN + dp} 
                alt=""
            />
            {
                character && <p className="text-black  px-3 text-md">{character}</p>
            }
            <p className="text-green-500  px-3 text-sm mt-2">{name}</p>            
        </div>
    }
    </>
  )
}

export default ActorCard