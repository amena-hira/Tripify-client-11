import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/user/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[user?.email])
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewTable 
                                key={review._id} 
                                review={review}
                                services={services}
                            ></ReviewTable>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyReview;