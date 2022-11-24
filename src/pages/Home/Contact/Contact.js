import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-48">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact With Us</h1>
                        <p className="py-6">Feel free to contact us if you have any questions related to our tours, custom packages, or special offers.</p>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;