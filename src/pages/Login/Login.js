import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center pt-12 '>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form className="card-body">
                    <h2 className='text-center text-4xl'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Login</button>
                    </div>

                    <div className='my-4'>
                        <h4 className='text-center'>Are you new in Tripify?<Link to='/signup' className='btn-link text-sky-900'>Sign up</Link> </h4>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;