import React from 'react'
import { useForm } from "react-hook-form"

const Signup = ({updateNewUserState}) => {
    
    const changeFormToLogin = () => {
        updateNewUserState()
    }
    //form handling
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const onSubmit = (data) => console.log(data)
  
  return (
    <div className="max-w-7xl px-16 py-8 bg-black">
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-8 text-center text-white sm:text-6xl lg:text-4xl">Sign up</p>

            <div className="sm:mb-12 lg:mb-6">
                <label htmlFor="username" className="block text-lg font-medium text-white md:text-4xl lg:text-base">Username</label>
                <input 
                    type="text" 
                    {...register("username", { required: true, minLength: 4, maxLength:10 })}
                    placeholder='Username' 
                    className=" mt-2 p-3 w-full border rounded-md bg-red-40 md:text-4xl md:h-28 lg:h-10 lg:text-sm lg:w-96" 
                />
                {errors.username?.type === "required" && (<p className='form-error'>Username is required</p> )}
                {errors.username?.type === "minLength" && (<p className='form-error'>Username too short</p> )}
                {errors.username?.type === "maxLength" && (<p className='form-error'>Username too long</p> )}
            </div>

            <div className="sm:mb-12 lg:mb-6">
                <label htmlFor="username" className="block text-lg font-medium text-white md:text-4xl lg:text-base">email</label>
                <input 
                    type='email' 
                    {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    placeholder='mail-id@domain.com' 
                    className="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " 
                />
                {errors.email?.type === "required" && (<p className='form-error'>email too short</p> )}
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
                {errors.password?.type === "required" && (<p className='form-error'>Password is required</p> )}
                {errors.password?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.password?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}
            </div>

            <div className="sm:mb-12 lg:mb-6">
                <label htmlFor="password" className="block text-lg font-medium text-white md:text-4xl lg:text-base">confirm password</label>
                <input 
                    type="password" 
                    {...register("confirmPassword", { required: true, minLength:8, maxLength:24, validate: (val) => {
                                if (watch('password') !== val) {
                                  return "passwords mismatch";
                                }
                              }
                    })}
                    placeholder='*************' 
                    className="mt-2 p-3 w-full border rounded-md md:text-4xl md:h-28 lg:h-10 lg:text-sm " 
                />
                {errors.confirmPassword?.type === "required" && (<p className='form-error'>Password is required</p> )}
                {errors.confirmPassword?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.confirmPassword?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}
                {errors.confirmPassword?.type === "validate" && (<p className='form-error'>Password doesn't match</p> )}

            </div>

            <div>
                <input type="submit" className="w-full cursor-pointer px-4 bg-green-500 text-white rounded-md md:text-4xl lg:text-lg md:h-28 lg:h-10" />
            </div>

            <div className='sm:mt-12 lg:mt-6'>
                <p onClick={changeFormToLogin} className='text-green-500 sm:text-4xl lg:text-base cursor-pointer'>Existing user ? Login now</p>
            </div>
        </form>
    </div>
  )
}

export default Signup