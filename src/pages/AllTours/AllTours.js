import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTour from './AllTour/AllTour';

const AllTours = () => {
    const allservices = useLoaderData();
    console.log(allservices.length);
    return (
        <div className='flex justify-center my-8 lg:my-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    allservices.map(service => <AllTour
                        key={service._id}
                        service = {service}
                    ></AllTour>)
                }
            
            </div>
        </div>
    );
};

export default AllTours;