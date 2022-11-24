import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({service}) => {
    const {_id, serviceName, image, price, details} = service;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <span><strong>Price: $</strong>{price}</span>
                    <p>{details.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`} className="btn border-none bg-sky-500 hover:bg-sky-900">Details</Link>
                    </div>
                </div>
        </div>
    );
};

export default Tour;

