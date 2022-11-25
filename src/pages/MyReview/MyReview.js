import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const services = useLoaderData();

    useEffect(()=>{
        fetch(`http://localhost:5000/user/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[user?.email])
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure about delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(review => review._id !== _id);
                    setReviews(remaining);
                }
            })
        }
    }
    
    return (
        <div>
            {
                reviews.length === 0 ?
                <>
                    <h2 className='text-center my-2'>No reviews were added!</h2>
                </>
                :
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
                                    handleDelete={handleDelete}
                                ></ReviewTable>)
                            }
                        </tbody>
                        
                    </table>
                </div>
            }
        </div>
    );
};

export default MyReview;