import React from 'react';
import './Tours.css';

const Tours = () => {
    return (
        <div className='max-w-screen-xl py-3 mx-auto my-20'>
            <h2 className='text-center text-4xl'>Popular Deals</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className="card lg:card-side drop-shadow-2xl bg-slate-200 shadow-xl">
                    <figure><img className='card-img' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side drop-shadow-2xl bg-slate-200 shadow-xl">
                    <figure><img className='card-img' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side drop-shadow-2xl bg-slate-200 shadow-xl">
                    <figure><img className='card-img' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-12'>
                <button className="btn rounded border-none bg-sky-500 hover:bg-sky-900 px-8 pb-6 pt-4">See All</button>
            </div>
            
        </div>
    )
};

export default Tours;