import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewService from './ReviewService/ReviewService';

const ReviewWithService = ({id}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/service/reviews/${id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            console.log(data);
        })
    },[id])
    return (
        <>
            {
                reviews.length === 0 ?
                <div className='h-full flex justify-center items-center'>
                    <h2>No review Add yet!</h2>
                </div>
                :
                
                reviews.map(review => <ReviewService key={review._id} review={review}></ReviewService>)
            }
        </>
    );
};

export default ReviewWithService;