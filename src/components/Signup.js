import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux-toolkit/userReducer';
import { useNavigate } from 'react-router-dom';
import { USER_AVATAR } from '../utils/constants';

const Signup = ({updateNewUserState}) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //toggle form to login
    const changeFormToLogin = () => {
        updateNewUserState()
    }

    //form handling
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    //uploading form data to firebase
    const onSubmit = (data) => {
        setLoading(true);
        //firebase code
        createUserWithEmailAndPassword(auth, data.email, data.confirmPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: data.username,
                photoURL: USER_AVATAR
            })
            .then(() => {
                let {email, uid, displayName, photoURL} = userCredential?.user;
                dispatch(loginUser({ email, uid, displayName, photoURL }));
                navigate('/browse');
            })
        })
        .catch((error) => {
            setLoading(false);
            let errorMessage = error?.code?.split('/')[1]?.replace(/-/g, ' ');
            setError(errorMessage)
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-6 text-center text-white text-2xl lg:text-3xl font-bold">Sign up</p>

            {/* error messages */}
            {error && <p className='text-center text-red-500 py-2 px-4 border border-red-500 rounded-md mb-4'>{error}</p>}

            <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-medium text-neutral-300 lg:text-base">Username</label>
                <input
                    type="text"
                    {...register("username", { required: true, minLength: 4, maxLength:20, pattern: /^[a-zA-Z0-9_]+$/ })}
                    placeholder='Username'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.username?.type === "required" && (<p className='form-error'>Username is required</p> )}
                {errors.username?.type === "minLength" && (<p className='form-error'>Username too short</p> )}
                {errors.username?.type === "maxLength" && (<p className='form-error'>Username too long</p> )}
                {errors.username?.type === "pattern" && (<p className='form-error'>Username can only contain letters, numbers and underscores</p> )}
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 lg:text-base">Email</label>
                <input
                    type='email'
                    {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    placeholder='mail-id@domain.com'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.email?.type === "required" && (<p className='form-error'>email is required</p> )}
                {errors.email?.type === "pattern" && (<p className='form-error'>email invalid</p> )}
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-300 lg:text-base">Password</label>
                <input
                    type="password"
                    {...register("password", { required: true, minLength:8, maxLength:24, pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/ })}
                    placeholder='*************'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.password?.type === "required" && (<p className='form-error'>Password is required</p> )}
                {errors.password?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.password?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}
                {errors.password?.type === "pattern" && (<p className='form-error'>Password must contain at least one letter and one number</p> )}
            </div>

            <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 lg:text-base">Confirm password</label>
                <input
                    type="password"
                    {...register("confirmPassword", { required: true, minLength:8, maxLength:24, validate: (val) => {
                                if (watch('password') !== val) {
                                  return "passwords mismatch";
                                }
                              }
                    })}
                    placeholder='*************'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.confirmPassword?.type === "required" && (<p className='form-error'>Password is required</p> )}
                {errors.confirmPassword?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.confirmPassword?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}
                {errors.confirmPassword?.type === "validate" && (<p className='form-error'>Password doesn't match</p> )}

            </div>

            <div>
                {
                    loading ?
                    (
                        <button className='w-full py-2 bg-brand-red text-white rounded-md lg:text-lg lg:h-10' disabled>
                            <i className="fa-solid fa-circle-notch fa-spin "></i>
                        </button>
                    )
                    :
                    <input type="submit" value="Sign up" className="w-full cursor-pointer py-2 bg-brand-red hover:bg-brand-red-dark transition-colors text-white font-semibold rounded-md lg:text-lg lg:h-10" />
                }
            </div>

            <div className='mt-6'>
                <p onClick={changeFormToLogin} className='text-center text-brand-red hover:underline text-sm lg:text-base cursor-pointer'>Existing user? Login now</p>
            </div>
        </form>
    </div>
  )
}

export default Signup
