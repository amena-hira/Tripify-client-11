import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About Tripify Travel Agency</h1>
                    <p className="py-6">The purpose of a travel agent is to sell transportation and accommodation to individuals and groups planning trips. They provide advice on travel destinations, plan itineraries, and collect payments. These professionals are passionate about travel with an aptitude for sales and customer service.</p>
                    <button className="btn border-none bg-sky-500 hover:bg-sky-900">Book a tour</button>
                </div>
            </div>
        </div>
    );
};

export default About;