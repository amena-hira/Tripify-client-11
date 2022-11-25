import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServiceDetails from '../Shared/SeviceDetails/ServiceDetails';
import ReviewForm from './ReviewForm/ReviewForm';

const AddReview = () => {
    useTitle('Service & Review')
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { image } = service;
    return (
        <div className='max-w-screen-lg mx-auto'>
                {
                    user?
                    <>
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
                    </>
                    :
                    <h2 className='text-center my-8'>Please Login to add a review!<Link className='btn btn-link' to='/login'>Login</Link> </h2>
                }
                
            
        </div>
    );
};

export default AddReview;

