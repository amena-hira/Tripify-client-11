import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Tour from '../Home/Tours/Tour/Tour';
import ReviewTable from './ReviewTable/ReviewTable';

const OneService = () => {
    const service = useLoaderData();
    const {_id, serviceName, image, price, details} = service;
    return (
        <div className='max-w-6xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <span><strong>Price: $</strong>{price}</span>
                    <p>{details}</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-4xl my-8'>Reviews</h2>
                <ReviewTable></ReviewTable>
            </div>
        </div>
    );
};

export default OneService;