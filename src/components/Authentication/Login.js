import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from './Context/AuthProvider';

const Login = () => {
    const { signIn, GoogleLogin } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginEmail, setLoginEmail] = useState('')

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginEmail(data.email)
                toast.success('Succesfully Logged in!!')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })


    }

    //Google Login     
    const handleGoogle = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }


    return (
        <div>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 border-solid rounded-xl text-white  bg-gray-900 '>
                    <h2 className='text-2xl  font-bold text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Email</span></label>

                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered w-full max-w-xs text-black" />
                            {errors.email && <span><small className='text-red-600'>email is required</small></span>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Password</span></label>

                            <input type="password" {...register("password", { required: true, minLength: 8 })} placeholder="password" className="input input-bordered w-full max-w-xs text-black" />
                            {errors.password && <span><small className='text-red-600'>password must be 8 characters or longer</small></span>}
                            {
                                loginError && <span><small className='text-red-600'>{loginError}</small></span>
                            }
                        </div>

                        <label className="label"><span className="label-text text-white">Forget Password?</span></label>

                        <input value='Login' type="submit" className='btn btn-gray w-full my-6' />
                    </form>

                    <p><small>New to EduCine?</small> <Link to='/signup' className='text-info text-md font-bold focus:underline hover:underline'>Create an Account</Link></p>

                    <div className="divider divide-white">OR</div>
                    <button onClick={handleGoogle} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
                </div>

            </div>
        </div>
    );
};

export default Login;