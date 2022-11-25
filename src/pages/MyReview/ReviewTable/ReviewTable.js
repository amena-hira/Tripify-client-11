import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({review, services, handleDelete}) => {
    const serviceReview = services.find(service => service._id === review.service);
    const {_id,reviewText} = review;

    
    return (
        <tr>
            <th>
                <label>
                    <h2 onClick={()=>handleDelete(_id)}>X</h2>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={serviceReview.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{serviceReview.serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewText}
            </td>
            <td>{serviceReview.price}</td>
            <th>
                <Link to={`/editreview/${_id}`} className="btn btn-ghost btn-xs">Edit</Link>
            </th>
        </tr>
    );
};

export default ReviewTable;