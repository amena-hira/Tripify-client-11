import React from 'react';

const AllTour = ({service}) => {
    const {serviceName, image, price, details} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <span><strong>Price: $</strong>{price}</span>
                    <p>{details}</p>
                </div>
        </div>
    );
};

export default AllTour;