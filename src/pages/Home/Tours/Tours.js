import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tour from './Tour/Tour';
import './Tours.css';

const Tours = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services',)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <div className='max-w-screen-xl py-3 mx-auto my-20'>
            <h2 className='text-center text-4xl'>Popular Deals</h2>
            <div className='grid gap-6 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    services.map(service => <Tour 
                        key={service._id}
                        service={service}
                    ></Tour>)
                }
                
                
            </div>
            <div className='text-center mt-12'>
                <Link to='/allservice' className="btn rounded border-none bg-sky-500 hover:bg-sky-900 px-8 pb-6 pt-4">See All</Link>
            </div>
            
        </div>
    )
};

export default Tours;