import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'} className='flex'>
        <div className="leaf w-7 h-7 xl:w-14 xl:h-14 inline-block"></div>
        <span className="text-4xl xl:text-6xl font-amantic font-extrabold text-green-300">
            PixelFlicks
        </span>
    </Link>
  )
}

export default Logo