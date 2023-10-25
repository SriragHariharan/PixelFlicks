import React, { useState } from 'react'
import { MAIN_BANNER_IMAGE } from '../utils/constants'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
  const [newUser, setNewuser] = useState(false);

  const updateNewUserState = () => {
    setNewuser(!newUser);
  };

  return (
    <div className="relative">
        <div>
            <div className="bg-black bg-opacity-100 absolute inset-0"></div>
            <img src={MAIN_BANNER_IMAGE} alt="banner home screen" className="opacity-50 h-screen w-full sm: object-cover lg:object-fit" />
        </div>

        <div className="absolute top-10 left-10 flex items-center justify-center">
            <div className="leaf w-20 h-20 xl:w-14 xl:h-14 inline-block"></div>
            <span className="text-8xl xl:text-6xl font-amantic font-extrabold text-green-300">
            PixelFlicks
            </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {
            newUser ? <Signup updateNewUserState={updateNewUserState} /> : <Login updateNewUserState={updateNewUserState} /> 
          }
            
            
        </div>
    </div>
  )
}

export default Auth
