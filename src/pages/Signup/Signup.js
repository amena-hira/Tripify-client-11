import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex justify-center pt-12 '>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form className="card-body">
                    <h2 className='text-center text-4xl'>Sign Up</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Signup</button>
                    </div>

                    <div className='my-4'>
                        <h4 className='text-center'>Have an account?<Link to='/login' className='btn-link text-sky-900'>Login</Link> </h4>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Signup;

