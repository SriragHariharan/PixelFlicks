import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux-toolkit/userReducer';
import { useNavigate } from 'react-router-dom';

const Login = ({updateNewUserState}) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const changeFormToSignup = () => {
        updateNewUserState()
    }
    //form handling
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        setLoading(true);
        //firebase code
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            let {email, uid, displayName, photoURL} = userCredential?.user;
            dispatch(loginUser({ email, uid, displayName, photoURL }));
            navigate('/browse')
        })
        .catch((error) => {
            setLoading(false);
            const errorCode = error.code.split('/')[1].replace(/-/g, ' ');
            setError(errorCode)
        });

    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-6 text-center text-white text-2xl lg:text-3xl font-bold">Sign in</p>

            {/* error messages */}
            {error && <p className='text-center text-red-500 py-2 px-4 border border-red-500 rounded-md mb-4'>{error}</p>}

            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 lg:text-base">Email</label>
                <input
                    type='email'
                    {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    placeholder='mail-id@domain.com'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.email?.type === "required" && (<p className='form-error'>email required</p> )}
                {errors.email?.type === "pattern" && (<p className='form-error'>email invalid</p> )}

            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-300 lg:text-base">Password</label>
                <input
                    type="password"
                    {...register("password", { required: true, minLength:8, maxLength:24 })}
                    placeholder='*************'
                    className="mt-2 p-2 w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand-red lg:h-10 lg:text-sm"
                />
                {errors.password?.type === "required" && (<p className='form-error'>Password required</p> )}
                {errors.password?.type === "minLength" && (<p className='form-error'>Password too short</p> )}
                {errors.password?.type === "maxLength" && (<p className='form-error'>Password too long</p> )}

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
                    <input type="submit" value="Sign in" className="w-full cursor-pointer py-2 bg-brand-red hover:bg-brand-red-dark transition-colors text-white font-semibold rounded-md lg:text-lg lg:h-10" />
                }
            </div>

            <div className='mt-6 text-center'>
                <p onClick={changeFormToSignup} className='text-brand-red hover:underline text-sm lg:text-base cursor-pointer'>New user? Signup now</p>
            </div>
        </form>
    </div>
  )
}

export default Login
