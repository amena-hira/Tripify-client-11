import React from 'react';

const ServiceDetails = ({service}) => {
    const { serviceName, price, details} = service;
    return (
        
        <>
            <h2 className="card-title">{serviceName}</h2>
            <span><strong>Price: $</strong>{price}</span>
            <p>{details}</p>
        </>
                
    );
};

export default ServiceDetails;