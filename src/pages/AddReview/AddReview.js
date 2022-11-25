import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../Shared/SeviceDetails/ServiceDetails';
import ReviewForm from './ReviewForm/ReviewForm';

const AddReview = () => {
    const service = useLoaderData();
    const { image } = service;
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 my-8'>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <ServiceDetails service={service}></ServiceDetails>
                    </div>
                </div>
                <ReviewForm
                    service={service}
                ></ReviewForm>
                
            </div>
        </div>
    );
};

export default AddReview;

