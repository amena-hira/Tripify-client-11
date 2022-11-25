import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceDetails from '../Shared/SeviceDetails/ServiceDetails';
import ReviewWithService from './ReviewWithService/ReviewWithService';

const OneService = () => {
    useTitle('Service & Review')
    const service = useLoaderData();
    const {_id, image} = service;
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 my-8'>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <ServiceDetails service={service}></ServiceDetails>
                        <div className="card-actions justify-end">
                            <Link to={`/review/service/${_id}`} className="btn border-none bg-sky-500 hover:bg-sky-900">Add A Review</Link>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 className='text-1xl font-bold mb-2'>Reviews</h2>
                    <ReviewWithService id={_id}></ReviewWithService>
                    
                </div>
                
            </div>
        </div>
    );
};

export default OneService;