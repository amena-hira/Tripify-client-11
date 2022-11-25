import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Tour from '../Home/Tours/Tour/Tour';

const AllTours = () => {
    useTitle('Services')
    const allservices = useLoaderData();
    console.log(allservices.length);
    return (
        <div className='max-w-screen-xl mt-3 mb-12 mx-auto'>
            <div className='grid gap-6 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    allservices.map(service => <Tour 
                        key={service._id}
                        service={service}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default AllTours;

