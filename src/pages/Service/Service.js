import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className='flex justify-center pt-8 '>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form className="card-body">
                    <h2 className='text-center text-4xl'>Add A Service</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
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
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Service;