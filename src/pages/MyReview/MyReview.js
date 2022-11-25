import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReview = () => {
    useTitle('My Review')
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const services = useLoaderData();

    useEffect(()=>{
        fetch(`http://localhost:5000/user/review?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('tripify-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                logOut()
            }
            return res.json()
        })
        .then(data => {
            setReviews(data);
        })
    },[user?.email, logOut])
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
                                reviews.length > 0 && reviews.map(review => <ReviewTable 
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