import React from 'react'

const Signup = ({updateNewUserState}) => {
    
    const changeFormToLogin = () => {
        updateNewUserState()
    }
  
  return (
    <div class="max-w-7xl px-16 py-8 bg-black">
        <form onSubmit={e => e.preventDefault()}>
            <p className="mb-8 text-center text-white sm:text-6xl lg:text-4xl">Sign up</p>

            <div class="sm:mb-12 lg:mb-6">
                <label for="username" class="block text-lg font-medium text-white md:text-4xl lg:text-base">Username</label>
                <input type="text" placeholder='Username' class=" mt-2 p-3 w-full border rounded-md bg-red-40 md:text-4xl md:h-28 lg:h-10 lg:text-sm lg:w-96" />
            </div>

            <div class="sm:mb-12 lg:mb-6">
                <label for="username" class="block text-lg font-medium text-white md:text-4xl lg:text-base">email</label>
                <input type='email' placeholder='mail-id@domain.com' class="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " />
            </div>

            <div class="sm:mb-12 lg:mb-6">
                <label for="password" class="block text-lg font-medium text-white md:text-4xl lg:text-base">password</label>
                <input type="password" placeholder='*************' class="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " />
            </div>

            <div class="sm:mb-12 lg:mb-6">
                <label for="password" class="block text-lg font-medium text-white md:text-4xl lg:text-base">confirm password</label>
                <input type="password" placeholder='*************' class="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " />
            </div>

            <div>
                <button type="submit" class="w-full px-4 bg-green-500 text-white rounded-md md:text-4xl lg:text-lg md:h-28 lg:h-10">
                    Submit
                </button>
            </div>

            <div className='sm:mt-12 lg:mt-6'>
                <p onClick={changeFormToLogin} className='text-green-500 sm:text-4xl lg:text-base cursor-pointer'>Existing user ? Login now</p>
            </div>
        </form>
    </div>
  )
}

export default Signup