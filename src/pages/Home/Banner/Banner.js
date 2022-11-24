import React from 'react';
import backgroundImg from '../../../assets/banner/header.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='max-w'>
                    <h1 className=" mb-12 lg:mb-28 md:text-xl lg:font-semibold lg:text-8xl ">Your Perfect Tour Plan Start From Here!!!</h1>
                    <button className="btn rounded-none bg-white text-black px-6 pb-5 pt-4">Book a tour</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;