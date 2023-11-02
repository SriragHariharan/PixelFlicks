//seen on top after the user sign in

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { logoutUser } from "../redux-toolkit/userReducer";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Logo from "./Logo";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    //getting user details from redux store
    const userDetails = useSelector(store => store?.user?.user)

    //logout user
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(logoutUser());
            navigate('/')
        })
    }

  return (
    <div className="z-20 absolute w-full bg-gradient-to-b from-black  flex justify-between pb-48 pt-5 px-5 lg:mt-24">
        {/* logo part */}
        <Logo />

        {/* user and logout part */}
        <div className="mt-1">
            <button
                onClick={toggleDropdown}
                type="button"
                className="px-2 py-0 bg-transparent border rounded-lg"
            >
                <img src={userDetails?.photoURL} alt="dp" className="w-5 h-5 inline-block mr-1" />
                <p className="inline-block text-white text-xs lg:text-base lg:p-2 ">{userDetails?.displayName}</p> 
            </button>
            <Link to={'/search'} className="ml-1 px-2 py-0 bg-transparent border rounded-lg lg:py-2">
                <i className="fa-solid fa-magnifying-glass text-white text-base lg:text-xl"></i>
            </Link>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="origin-top-left absolute mt-2 sm:w-52 lg:w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                    {/* Dropdown items */}
                    <div className="cursor-pointer block px-6 sm:py-10 border border-b-4 border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Profile</div>
                    <div className="cursor-pointer block px-6 sm:py-10 border border-b-4 border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Logout</div>
                    <div onClick={handleLogout} className="cursor-pointer block px-6 sm:py-10 border            border-slate-100 lg:py-3 text-sm text-gray-700 sm:text-3xl lg:text-base">Logout</div>
                </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default Header