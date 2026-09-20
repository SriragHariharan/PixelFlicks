import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

function ActorCard({name, character, dp, role}) {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden sm:w-24 sm:h-56 md:w-40 md:h-80 hover:scale-105 transition-transform">
        {
            dp ?
            <img
                src={TMDB_IMG_CDN + dp}
                alt={name + ' profile'}
                className="w-full h-2/3 object-cover"
            />
            :
            <div className="w-full h-2/3 flex items-center justify-center bg-neutral-800">
                <i className="fa-solid fa-user text-neutral-600 text-3xl md:text-5xl"></i>
            </div>
        }
        <div className="p-2">
            {
                character && <p className="text-neutral-400 text-xs md:text-base truncate">{character}</p>
            }
            <p className="text-brand-red text-xs mt-1 md:text-base truncate">{name}</p>
            {
                !character && role && <p className="text-neutral-500 text-xs md:text-sm truncate">{role}</p>
            }
        </div>
    </div>
  )
}

export default ActorCard
