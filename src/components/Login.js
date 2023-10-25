import React from 'react'
import { useForm } from "react-hook-form"

const Login = ({updateNewUserState}) => {

    const changeFormToSignup = () => {
        updateNewUserState()
    }
    //form handling
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const onSubmit = (data) => console.log(data)

  return (
    <div className="max-w-7xl p-16 bg-black">
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-10 text-center text-white sm:text-6xl lg:text-4xl">Sign in</p>

            <div className="sm:mb-12 lg:mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-white md:text-4xl lg:text-base">email</label>
                <input 
                    type='email' 
                    {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    placeholder='mail-id@domain.com' 
                    className="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm lg:w-96" 
                />
                {errors.email?.type === "required" && (<p className='form-error'>email required</p> )}
                {errors.email?.type === "pattern" && (<p className='form-error'>email invalid</p> )}

            </div>

            <div className="sm:mb-12 lg:mb-6">
                <label htmlFor="password" className="block text-lg font-medium text-white md:text-4xl lg:text-base">password</label>
                <input 
                    type="password" 
                    {...register("password", { required: true, minLength:8, maxLength:24 })}
                    placeholder='*************' 
                    className="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " 
                />
                {errors.password?.type === "required" && (<p className='form-error'>Password required</p> )}
                {errors.password?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.password?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}

            </div>

            <div>
                <button type="submit" className="w-full px-4 bg-green-500 text-white rounded-md md:text-4xl lg:text-lg md:h-28 lg:h-10">
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