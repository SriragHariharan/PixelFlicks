import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Logo from './Logo'

const Auth = () => {
  const [newUser, setNewuser] = useState(false);

  const updateNewUserState = () => {
    setNewuser(!newUser);
  };

  return (
    <div className="relative min-h-screen">
        <div className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(ellipse_at_top,_#b0060f_0%,_#000000_55%)] opacity-90">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"></div>
        </div>

        <div className="z-10 absolute top-4 left-4 flex items-center justify-center">
            <Logo />
        </div>

        <div className="z-10 relative flex min-h-screen items-center justify-center px-4 py-24">
          <div className="w-full max-w-md rounded-lg bg-black/70 border border-neutral-800 p-6 lg:p-10">
            {
              newUser ? <Signup updateNewUserState={updateNewUserState} /> : <Login updateNewUserState={updateNewUserState} />
            }
          </div>
        </div>
    </div>
  )
}

export default Auth
