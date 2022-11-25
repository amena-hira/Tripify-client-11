import React from 'react';

const ReviewTable = ({review,services}) => {
    console.log(services);
    const service = services.find(service => service._id === review.service);
    const {reviewText} = review;
    return (
        <tr>
            <th>
                <label>
                    <h2>X</h2>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={service.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{service.serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewText}
            </td>
            <td>{service.price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default ReviewTable;