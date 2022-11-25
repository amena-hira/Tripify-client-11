import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../Shared/SeviceDetails/ServiceDetails';
import EditReviewForm from './EditReviewForm/EditReviewForm';

const EditReview = () => {
    const review = useLoaderData();
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    const service = services.find(service => service._id === review.service);
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 my-8'>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure>
                        {
                            service &&
                            <img src={service.image} alt="" />  
                        }
                    </figure>
                    <div className="card-body">
                        {
                            service && <ServiceDetails service={service}></ServiceDetails>
                        }
                        

                    </div>
                </div>
                <EditReviewForm 
                    review={review}
                    service={service}
                ></EditReviewForm>
                
                
            </div>
        </div>
    );
};

export default EditReview;