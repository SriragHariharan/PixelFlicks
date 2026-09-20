import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'} className='flex items-center gap-x-2'>
        <i className="fa-solid fa-clapperboard text-xl xl:text-4xl text-brand-red"></i>
        <span className="text-3xl xl:text-5xl font-pix text-white tracking-wide">
            Pix
        </span>
    </Link>
  )
}

export default Logo