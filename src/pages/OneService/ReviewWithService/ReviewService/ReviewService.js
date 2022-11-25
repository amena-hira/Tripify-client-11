import React from 'react';

const ReviewService = ({review}) => {
    const {userName, reviewText, userImage} = review;
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    
                    <img src={userImage} alt="" />
                </div>
            </div>
            <div className="chat-header">
                {userName}
                
            </div>
            <div className="chat-bubble">{reviewText}</div>
        </div> 
    );
};

export default ReviewService;