import React from 'react'

const Login = ({updateNewUserState}) => {

    const changeFormToSignup = () => {
        updateNewUserState()
    }

  return (
    <div class="max-w-7xl p-16 bg-black">
        <form onSubmit={e => e.preventDefault()}>
            <p className="mb-10 text-center text-white sm:text-6xl lg:text-4xl">Sign in</p>

            <div class="sm:mb-12 lg:mb-6">
                <label for="username" class="block text-lg font-medium text-white md:text-4xl lg:text-base">email</label>
                <input type='email' placeholder='mail-id@domain.com' class="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm lg:w-96" />
            </div>

            <div class="sm:mb-12 lg:mb-6">
                <label for="password" class="block text-lg font-medium text-white md:text-4xl lg:text-base">password</label>
                <input type="password" placeholder='*************' class="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " />
            </div>

            <div>
                <button type="submit" class="w-full px-4 bg-green-500 text-white rounded-md md:text-4xl lg:text-lg md:h-28 lg:h-10">
                    Submit
                </button>
            </div>

            <div className='sm:mt-12 lg:mt-6'>
                <p onClick={changeFormToSignup} className='text-green-500 sm:text-4xl lg:text-base cursor-pointer'>New user ? Signup now</p>
            </div> 
        </form>
    </div>
  )
}

export default Login