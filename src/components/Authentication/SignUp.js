import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signError, setSignError] = useState('')
    const navigate = useNavigate();

    const handleSignup = (data) => {
        console.log(data)
        setSignError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Created Successfully')
                navigate('/home')

            })

            .catch(err => {
                console.error(err)
                setSignError(err.message)
            })

    }

    return (
        <div>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 border-solid rounded-xl text-white  bg-gray-900 '>
                    <h2 className='text-2xl  font-bold text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Full Name</span></label>

                            <input type="text" placeholder="full name"
                                {...register("name", { required: true })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.name && <span><small className='text-red-600'>name is required</small></span>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Email</span></label>

                            <input type="email" placeholder="email"
                                {...register("email", { required: true })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.email && <span><small className='text-red-600'>email is required</small></span>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Password</span></label>

                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be 8 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.password && <span><small className='text-red-600'>{errors.password.message} </small></span>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Photo URL</span></label>

                            <input type="text" placeholder="phone number"
                                {...register("photo", { required: true })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.photo && <span><small className='text-red-600'>photo url is required</small></span>}
                        </div>


                        <label className="label"><span className="label-text text-white underline">Forget Password?</span></label>
                        {
                            signError &&
                            <p><small className='text-red-600'>{signError}</small></p>
                        }
                        <input value='Sign up' type="submit" className='btn btn-gray w-full my-6' />
                    </form>

                    <p><small>Already have an Account?</small> <Link to='/login' className='text-info text-md font-bold focus:underline hover:underline'>please login</Link></p>


                </div>

            </div>
        </div>
    );
};

export default SignUp;