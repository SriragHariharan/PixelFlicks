import React, { useState } from 'react'

function GPTSearch() {
    const [query, setQuery] = useState("");
    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }
  return (
    <div className='flex'>
        <input 
            type="text" 
            value={query} 
            onChange={handleQueryChange}
            className='px-12 py-6 w-[50em] placeholder:text-2xl focus:outline-none' 
            placeholder='What would you love to watch today ?' 
        />
        <button className="bg-green-500">
            <i className="fa-solid fa-magnifying-glass text-white text-3xl px-12"></i>
        </button>
    </div>
  )
}

export default GPTSearch