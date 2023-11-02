import React, { useState } from 'react'
import { MAIN_BANNER_IMAGE } from '../utils/constants'
import Login from './Login'
import Signup from './Signup'
import Logo from './Logo'

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
        
        <div className="z-10 absolute top-4 left-4 flex items-center justify-center">
            <Logo />
        </div>

        <div className="absolute inset-0 flex mt-10 lg:items-center justify-center">
          {
            newUser ? <Signup updateNewUserState={updateNewUserState} /> : <Login updateNewUserState={updateNewUserState} /> 
          }
            
            
        </div>
    </div>
  )
}

export default Auth
