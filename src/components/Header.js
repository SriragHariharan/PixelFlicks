import { useState } from "react";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className="z-20 absolute w-screen bg-gradient-to-b from-black  flex justify-between pb-48 pt-5 pl-10 pr-10 mt-24">
        {/* logo part */}
        <div className="flex">
            <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
            <div className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
              PixelFlicks
            </div>
        </div>

        {/* user and logout part */}
        <div className="sm:mt-8 lg:mt-2 mr-24">
            <button
                onClick={toggleDropdown}
                type="button"
                className="px-10 py-2 sm:text-2xl lg:text-base font-bold text-black bg-green-500 border rounded-lg"
            >
                You
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="origin-top-left absolute mt-2 sm:w-52 lg:w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                    {/* Dropdown items */}
                    <div className="cursor-pointer block px-6 sm:py-10 border border-b-4 border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Profile</div>
                    <div className="cursor-pointer block px-6 sm:py-10 border border-b-4 border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Logout</div>
                    <div className="cursor-pointer block px-6 sm:py-10 border            border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Logout</div>
                </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default Header