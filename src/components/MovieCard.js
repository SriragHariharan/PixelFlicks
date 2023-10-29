import React from 'react'

function MovieCard() {
  return (
    <div class="w-56 m-2 rounded shadow-lg p-2">
        <img src="https://www.cinejosh.com/newsimg/newsmainimg/leo-fan-made-poster_b_2303231134.jpg" alt="jailer" className="w-56 h-72" />
        <div class="px-2 text-left">
            <div class=" text-lg text-white mb-2">Lorem ipsum dolor sit.</div>
        </div>
        <div class="px-2">
            <span class="rounded-full py-1 text-sm font-semibold text-red-400">
                <i class="fa-regular fa-heart"></i> &nbsp;
                <p className='inline-block'>Rating: 8.5</p>
            </span>
        </div>
    </div>
  )
}

export default MovieCard