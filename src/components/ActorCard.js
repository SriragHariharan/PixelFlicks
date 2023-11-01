import React from 'react'

function ActorCard() {
  return (
    <div className="bg-white w-40">
        <img 
            src="https://th.bing.com/th/id/R.099223bdd6dfd885f6e9eba86e33876d?rik=wt5hS90KLLamAA&riu=http%3a%2f%2fdata1.ibtimes.co.in%2fen%2ffull%2f600910%2frajinikanth.jpg&ehk=9w%2fPcRZUFn3bj7LyKTVv%2fj6KdY7BATqgL%2fDuOnks9JQ%3d&risl=&pid=ImgRaw&r=0" 
            alt=""
        />
        <p className="text-black  px-3 text-md">Tiger Muthuvel Pandian</p>
        <p className="text-black  px-3 text-sm mt-2">Rajinikanth</p>
    </div>
  )
}

export default ActorCard